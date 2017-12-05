import AppDispatcher from "../dispatcher/dispatcher";
import EventEmitter from "events";

import uuidv4 from "uuidv4";

let _data = {
    
};

let ExtensionStore = Object.assign({}, EventEmitter.prototype, {
    getAll: function() {
        return _data;
    },

    getByKey: function(key) {
        return _data[key];
    },

    setAll: function(data) {
        _data = data;
    },

    setKey: function(key, value) {
        _data[key] = value;
    },

    clearKey: function(key) {
        delete _data[key];
    },

    emitChange: function(event) {
        this.emit(event);
    },

    addChangeListener: function(event, callback) {
        this.on(event, callback);
    },

    removeChangeListener: function(event, callback) {
        this.removeListener(event, callback);
    }
});

ExtensionStore.setMaxListeners(1000);

AppDispatcher.register(function(payload) {

    switch (payload.actionType) {
        case "SAMPLE_EVENT":
            ExtensionStore.emitChange("SAMPLE_EVENT");
            break;
        default: // Nothing
    }
});

export default ExtensionStore;
