function State() {

  var s = {};
  
  var states = new Array();
  var current_state = null;
  var previous_state = null;
  var callbacks = new Array();

  s.change = function(state) {
    if ((state_exists(state)) && (current_state != state)) {
      process_callbacks(state);
      previous_state = current_state;
      current_state = state;
      return true;
    } else {
      return false;
    }
  };
  
  
  /*
   * Private Methods
   */
  
  function state_exists(state) {
    return (find_state(state) != false);
  }
  
  function find_state(state) {
    if (states[state] != undefined) {
      return states[state];
    } else {
      return false;
    }
  }
  
  s.add = function(state) {
    if (!state_exists(state)) {
      states[state] = {
        callbacks: []
      };
      return true;
    } else {
      return false;
    }
  }
  
  s.remove = function(state) {
    if (state_exists(state)) {
      delete states[state];
      return true;
    } else {
      return false;
    }
  }
  
  function find_callback(fn) {
    $.each(callbacks, function(i, val) {
      if (val == fn) {
        return callbacks[i];
      }
    });
    return false;
  }
  
  function process_callbacks(new_state) {
    var success = true;
    $.each(callbacks, function(i, val) {
      if (!val(current_state, new_state)) {
        success = false;
      }
    });
    return success;
  }
  
  s.bind = function(fn) {
    callbacks.push(fn);
  }
  
  s.unbind = function(fn) {
    $.each(callbacks, function(i, val) {
      if (val == fn) {
        callbacks.splice(i, 1);
        return true;
      }
    });
    return false;
  }
  
  return s;

}
