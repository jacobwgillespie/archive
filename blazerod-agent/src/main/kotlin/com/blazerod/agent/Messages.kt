package com.blazerod.agent

import okhttp3.MediaType
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.RequestBody
import org.bukkit.Chunk
import org.json.simple.JSONArray
import org.json.simple.JSONObject
import java.net.ConnectException

val JSON: MediaType = MediaType.parse("application/json; charset=utf-8")

class Messages(val plugin: Plugin) {
    val pendingMessages = mutableListOf<JSONObject>()
    var sentMessageCount: Long = 0
    var failedSends = 0

    val http = OkHttpClient()

    fun sendEvent(data: JSONObject) {
        sendMessage("event", data)
    }

    fun sendChunkMap(chunk: Chunk) {
        sendMessage("map", Utils.buildChunkMapJSON(chunk))
    }

    fun sendPlayerStatus() {
        if (plugin.server.onlinePlayers.isEmpty()) return

        val players: List<JSONObject> = plugin.server.onlinePlayers.map {
            val data = JSONObject()
            data["player"] = Utils.buildPlayerJSON(it)
            data["location"] = Utils.buildLocationJSON(it.location)
            data
        }

        sendMessage("players", players)
    }

    fun sendTPSStatus() {
        sendMessage("tps", Utils.getTPS())
    }

    fun sendSystemStats() {
        sendMessage("system", Utils.buildSystemStatsJSON())
    }

    fun sendWorldStats() {
        val worlds: List<JSONObject> = plugin.server.worlds.map {
            val data = JSONObject()
            data["name"] = it.name
            data["loadedChunks"] = it.loadedChunks.size
            data
        }

        val data = JSONArray()
        data.addAll(worlds)
        sendMessage("worlds", data)
    }

    fun flushPendingMessages() {
        synchronized(pendingMessages) {
            if (pendingMessages.isEmpty()) return

            if (failedSends > 5) {
                plugin.logger.warning("Failed to send events to Blazerod - pending events discarded")
                pendingMessages.clear()
                failedSends = 0
                return
            }

            val messages = pendingMessages.map { it.toJSONString() }.joinToString(separator = "\n")
            plugin.logger.info(messages)

            val payload = JSONArray()
            pendingMessages.forEach { payload.add(it) }

            try {
                val url = "${plugin.API_HOST}/events"
                val body = RequestBody.create(JSON, payload.toJSONString())
                val request = Request.Builder().url(url).post(body).build()
                val response = http.newCall(request).execute()

                plugin.logger.info("HTTP Code: ${response.code()}")

                sentMessageCount += pendingMessages.size
                failedSends = 0
                pendingMessages.clear()

                plugin.logger.info("Sent $sentMessageCount messages")
            } catch (err: ConnectException) {
                plugin.logger.warning("Unable to send events to Blazerod - retrying...")
                failedSends += 1
            }
        }
    }

    // Private helpers

    private fun sendMessage(type: String, payload: Any?) {
        synchronized(pendingMessages) {
            val data = JSONObject()
            data["type"] = type
            data["payload"] = payload
            data["timestamp"] = Utils.unixTimestamp()
            pendingMessages.add(data)
        }
    }
}
