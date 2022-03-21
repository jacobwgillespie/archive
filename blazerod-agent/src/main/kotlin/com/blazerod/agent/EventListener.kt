package com.blazerod.agent

import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.block.*
import org.bukkit.event.entity.PlayerDeathEvent
import org.bukkit.event.player.*
import org.bukkit.event.server.PluginDisableEvent
import org.bukkit.event.server.PluginEnableEvent
import org.bukkit.event.world.ChunkPopulateEvent
import org.bukkit.event.world.StructureGrowEvent

class EventListener(val plugin: Plugin) : Listener {

    // Blocks changed

    @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
    fun onBlockBreak(event: BlockBreakEvent) {
        plugin.chunkHandler.markChunkDirty(event.block.chunk)
    }

    @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
    fun onBlockBurn(event: BlockBurnEvent) {
        plugin.chunkHandler.markChunkDirty(event.block.chunk)
    }

    @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
    fun onBlockExplode(event: BlockExplodeEvent) {
        plugin.chunkHandler.markChunkDirty(event.block.chunk)
    }

    @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
    fun onBlockGrow(event: BlockGrowEvent) {
        plugin.chunkHandler.markChunkDirty(event.block.chunk)
    }

    @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
    fun onBlockPlace(event: BlockPlaceEvent) {
        plugin.chunkHandler.markChunkDirty(event.block.chunk)
    }

    @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
    fun onStructureGrow(event: StructureGrowEvent) {
        plugin.chunkHandler.markChunkDirty(event.location.chunk)
    }

    @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
    fun onChunkPopulate(event: ChunkPopulateEvent) {
        plugin.chunkHandler.markChunkDirty(event.chunk)
    }

    // Player logged in, out, or was kicked or banned

    @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
    fun onPlayerJoin(event: PlayerJoinEvent) {
        val data = Utils.buildEventJSON(event)
        data["joinMessage"] = event.joinMessage
        data["player"] = Utils.buildPlayerJSON(event.player)
        plugin.messages.sendEvent(data)
    }

    @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
    fun onPlayerQuit(event: PlayerQuitEvent) {
        val data = Utils.buildEventJSON(event)
        data["player"] = Utils.buildPlayerJSON(event.player)
        data["quitMessage"] = event.quitMessage
        plugin.messages.sendEvent(data)
    }

    @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
    fun onPlayerKick(event: PlayerKickEvent) {
        val data = Utils.buildEventJSON(event)
        data["leaveMessage"] = event.leaveMessage
        data["player"] = Utils.buildPlayerJSON(event.player)
        data["reason"] = event.reason
        plugin.messages.sendEvent(data)
    }

    @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
    fun onPlayerLogin(event: PlayerLoginEvent) {
        val data = Utils.buildEventJSON(event)
        data["kickMessage"] = event.kickMessage
        data["player"] = Utils.buildPlayerJSON(event.player, event.address.hostAddress)
        data["result"] = event.result.toString()
        plugin.messages.sendEvent(data)
    }

    // Player statistic changed

    /*@EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
    fun onPlayerStatisticIncrement(event: PlayerStatisticIncrementEvent) {
        val data = Utils.buildEventJSON(event)
        if (event.entityType != null) data["entityType"] = event.entityType.name
        if (event.material != null) data["material"] = event.material.name
        data["newValue"] = event.newValue
        data["player"] = Utils.buildPlayerJSON(event.player)
        data["previousValue"] = event.previousValue
        data["statistic"] = event.statistic.name
        plugin.messages.sendEvent(data)
    }*/

    // Player sent chat message

    @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
    fun onAsyncPlayerChat(event: AsyncPlayerChatEvent) {
        val data = Utils.buildEventJSON(event)
        data["message"] = event.message
        data["player"] = Utils.buildPlayerJSON(event.player)
        plugin.messages.sendEvent(data)
    }

    // Player received achievement

    @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
    fun onPlayerAchievementAwarded(event: PlayerAchievementAwardedEvent) {
        val data = Utils.buildEventJSON(event)
        data["achievement"] = event.achievement.name
        data["player"] = Utils.buildPlayerJSON(event.player)
        plugin.messages.sendEvent(data)
    }

    // Resource pack status changed

    @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
    fun onPlayerResourcePackStatus(event: PlayerResourcePackStatusEvent) {
        val data = Utils.buildEventJSON(event)
        data["player"] = Utils.buildPlayerJSON(event.player)
        data["status"] = event.status.name
        plugin.messages.sendEvent(data)
    }

    // Player died

    @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
    fun onPlayerDeath(event: PlayerDeathEvent) {
        val data = Utils.buildEventJSON(event)
        data["deathMessage"] = event.deathMessage
        data["player"] = Utils.buildPlayerJSON(event.entity)
        if (event.entity.killer != null) {
            data["killer"] = Utils.buildPlayerJSON(event.entity.killer)
        }
        plugin.messages.sendEvent(data)
    }

    // Player teleported

    @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
    fun onPlayerTeleport(event: PlayerTeleportEvent) {
        val data = Utils.buildEventJSON(event)
        data["cause"] = event.cause.name
        data["from"] = Utils.buildLocationJSON(event.from)
        data["player"] = Utils.buildPlayerJSON(event.player)
        data["to"] = Utils.buildLocationJSON(event.to)
        plugin.messages.sendEvent(data)
    }

    // Player respawned

    @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
    fun onPlayerRespawn(event: PlayerRespawnEvent) {
        val data = Utils.buildEventJSON(event)
        data["isBedSpawn"] = event.isBedSpawn
        data["player"] = Utils.buildPlayerJSON(event.player)
        data["respawnLocation"] = Utils.buildLocationJSON(event.respawnLocation)
        plugin.messages.sendEvent(data)
    }

    // Plugin enabled or disabled

    @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
    fun onPluginEnable(event: PluginEnableEvent) {
        val data = Utils.buildEventJSON(event)
        plugin.messages.sendEvent(data)
    }

    @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
    fun onPluginDisable(event: PluginDisableEvent) {
        val data = Utils.buildEventJSON(event)
        plugin.messages.sendEvent(data)
    }

}
