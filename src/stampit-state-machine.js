var stampit     = require('stampit'),
    EventBus    = require('stampit-event-bus');

module.exports = stampit().compose(EventBus).init(function () {

    var currentState = this.initialState || 'init';

    this.inState = function (state) {
        return currentState === state;
    };

    this.getState = function () {
        return currentState;
    };

    this.setState = function (newState) {
    
        var oldState = currentState;

        currentState = newState;

        this.emit('stateChanged', oldState, newState);

        return this;

    };

});
