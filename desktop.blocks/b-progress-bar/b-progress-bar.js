BEM.DOM.decl('b-progress-bar', {

    onSetMod : {

        js : function() {
            this.on('timerEvent', this._onTimerEvent);
        },

        progress : function(modName, modVal) {
            this.elem('filling').css('width', modVal+'%');
        }

    },

    _setTimer : function(interval) {

        if(this._timer)
            this._clearTimer();

        this._timer =
            setInterval(

                this.changeThis( function() {
                    this.trigger('timerEvent');
                }),

                interval

            );

        return this;

    },

    _clearTimer : function() {
        clearTimeout(this._timer);
        return this;
    },

    _updateProgress : function() {

        this.setMod('progress', this._progress);

        return this;

    },

    start : function(duration) {

        this._progress = 100;

        this
            ._updateProgress()
            ._setTimer(duration/100);

        return this;

    },

    stop : function() {

        this
            ._clearTimer()
            .delMod('progress');

    },

    _decrementProgress : function() {

        if(this._progress !== 0) {
            --this._progress;
            this._updateProgress();
        }

    },

    _onTimerEvent : function() {
        this._decrementProgress();
    }

});
