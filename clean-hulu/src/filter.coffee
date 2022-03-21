
#status = new Store("status")
#status.addEvent "status", (value, name, store) ->
#  console.log "changed status to " + value
#  if value is "stop"
#    muter.stopRebuildTesting()
#    muter.clear()
#    Notification.info "Filter stopped"
#  else if value is "start"
#    muter.rebuild()
#    muter.startRebuildTesting()
#    Notification.info "Filter started"