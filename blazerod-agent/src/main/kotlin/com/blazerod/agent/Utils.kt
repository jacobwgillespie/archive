package com.blazerod.agent

import org.bukkit.Bukkit
import org.bukkit.Chunk
import org.bukkit.Location
import org.bukkit.entity.Player
import org.bukkit.event.Event
import org.json.simple.JSONArray
import org.json.simple.JSONObject
import java.lang.management.ManagementFactory
import java.lang.management.OperatingSystemMXBean
import java.lang.reflect.Field
import java.time.Instant

object Utils {
    private var minecraftServer: Any? = null
    private var recentTps: Field? = null

    fun buildEventJSON(event: Event): JSONObject {
        val data = JSONObject()
        data["type"] = event.eventName
        return data
    }

    fun buildPlayerJSON(player: Player, ip: String? = null): JSONObject {
        val data = JSONObject()

        data["name"] = player.name
        data["uuid"] = player.uniqueId.toString()
        data["location"] = buildLocationJSON(player.location)

        if (ip != null) {
            data["ip"] = ip
        }

        return data
    }

    fun buildLocationJSON(location: Location): JSONObject {
        val data = JSONObject()

        data["x"] = location.x
        data["y"] = location.y
        data["z"] = location.z
        data["world"] = location.world.name

        return data
    }

    fun buildChunkMapJSON(chunk: Chunk): JSONObject {
        val data = JSONObject()

        data["x"] = chunk.x
        data["z"] = chunk.z

        val world = chunk.world
        val blocks = JSONArray()

        for (deltaX in 0..15) {
            val row = JSONArray()
            for (deltaZ in 0..15) {
                val x = chunk.x * 16 + deltaX
                val z = chunk.z * 16 + deltaZ
                val topBlock = world.getHighestBlockAt(x, z)
                val block = world.getBlockAt(topBlock.x, topBlock.y - 1, topBlock.z) ?: topBlock
                val blockData = JSONObject()
                blockData.put("type", block.type.toString())
                blockData.put("x", deltaX)
                blockData.put("y", block.y)
                blockData.put("z", deltaZ)
                row.add(blockData)
            }
            blocks.add(row)
        }

        data["blocks"] = blocks

        return data
    }

    fun getTPS(): List<Double> {
        try {
            if (minecraftServer == null) {
                val server = Bukkit.getServer()
                val consoleField = server.javaClass.getDeclaredField("console")
                consoleField.isAccessible = true
                minecraftServer = consoleField.get(server)
            }
            if (recentTps == null) {
                recentTps = (minecraftServer as Any).javaClass.superclass.getDeclaredField("recentTps")
                (recentTps as Field).isAccessible = true
            }

            return ((recentTps as Field).get(minecraftServer) as DoubleArray).asList()
        } catch (ignored: IllegalAccessException) {
        } catch (ignored: NoSuchFieldError) {
        }

        return doubleArrayOf(20.0, 20.0, 20.0).asList()
    }

    fun buildSystemStatsJSON(): JSONObject {
        val data = JSONObject()
        val runtime = Runtime.getRuntime()
        val osBean = ManagementFactory.getPlatformMXBean(OperatingSystemMXBean::class.java)

        data["cpuLoad"] = osBean.systemLoadAverage
        data["freeMemory"] = runtime.freeMemory()
        data["maxMemory"] = runtime.maxMemory()
        data["totalmemory"] = runtime.totalMemory()

        return data
    }

    fun unixTimestamp(): Long {
        return Instant.now().epochSecond
    }
}
