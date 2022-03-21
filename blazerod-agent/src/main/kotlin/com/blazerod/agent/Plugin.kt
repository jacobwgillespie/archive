package com.blazerod.agent

import com.blazerod.agent.tasks.*
import org.bukkit.plugin.java.JavaPlugin
import java.io.File

class Plugin : JavaPlugin() {
    var API_KEY = ""
    var API_HOST = "http://localhost:3000"

    val chunkHandler = ChunkHandler(this)
    val messages = Messages(this)

    override fun onEnable() {
        loadConfiguration()

        server.pluginManager.registerEvents(EventListener(this), this)

        val fiveSeconds: Long = 20 * 5

        // Message producers
        DirtyChunksTask(this)
                .runTaskTimer(this, 0L, fiveSeconds)
        PeriodicSystemStatsTask(this)
                .runTaskTimer(this, 1L, fiveSeconds)
        PeriodicTPSStatusTask(this)
                .runTaskTimer(this, 2L, fiveSeconds)
        PeriodicUserStatusTask(this)
                .runTaskTimer(this, 3L, fiveSeconds)
        PeriodicWorldStatsTask(this)
                .runTaskTimer(this, 4L, fiveSeconds)

        // Message consumers
        FlushPendingMessagesTask(this)
                .runTaskTimerAsynchronously(this, 0L, fiveSeconds)
    }

    private fun loadConfiguration() {
        val configFile = File(dataFolder, "config.yml")
        if (!configFile.exists()) {
            config.options().copyDefaults(true)
            saveConfig()
        }

        reloadConfig()

        API_KEY = config.getString("api-key", "")

        if (API_KEY == "API_KEY") API_KEY = ""
    }
}
