package com.blazerod.agent

import org.bukkit.Chunk

class ChunkHandler(val plugin: Plugin) {
    private val dirtyChunks = mutableSetOf<Chunk>()

    fun markChunkDirty(chunk: Chunk) {
        dirtyChunks.add(chunk)
    }

    fun processDirtyChunks() {
        var chunk: Chunk
        while (dirtyChunks.size > 0) {
            chunk = dirtyChunks.first()
            dirtyChunks.remove(chunk)
            plugin.messages.sendChunkMap(chunk)
        }
    }
}
