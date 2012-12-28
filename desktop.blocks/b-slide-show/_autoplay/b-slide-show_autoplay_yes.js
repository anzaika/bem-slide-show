BEM.DOM.decl('b-slide-show', {

    getDefaultParams : function() {

        return {

            autoplayTimerInterval: 2000

        };

    },

    onSetMod : {

        autoplay : {

            yes : function() {

                this
                    .on('autoplayTimer', this._onAutoplayTimer)
                    .on('autoplayFinish', this._onAutoplayFinish)
                    .on('slideChange', this._onSlideChange)
                    .on('outOfSlides', this._onOutOfSlides)
                    .afterCurrentEvent(function() { this._setTimer(); });


                this._startProgress();


            },

            '' : function() {

                this
                    .un('autoplayTimer', this._onAutoplayTimer)
                    .un('autoplayFinish', this._onAutoplayFinish)
                    .un('slideChange', this._onSlideChange)
                    .un('outOfSlides', this._onOutOfSlides);

                this._clearTimer();
                this._stopProgress();

            }

        }

    },

    _onKeyDown : function(e) {

        this.__base.apply(this, arguments);

        if (e.keyCode === 80) {
            this.toggleMod('autoplay', 'yes');
        }

    },

    _onAutoplayTimer : function() {

        this.show('next');

        return this;

    },

    _onControlClick : function(e) {

        this.__base.apply(this, arguments);

        var role = this.getMod($(e.target), 'role');

        if (role === 'autoplay') {

            this
                .toggleMod('autoplay', 'yes')
                .toggleMod(this.elem('control', 'role', 'autoplay'), 'active', 'yes');

        }

        return this;

    },

    _startProgress : function() {

        this
            .setMod(this.elem('progress'), 'active', 'yes')
            .findBlockInside('b-progress-bar')
            .start(this.params.autoplayTimerInterval);

        return this;

    },

    _stopProgress : function() {

        this
            .delMod(this.elem('progress'), 'active')
            .findBlockInside('b-progress-bar')
            .stop();

    }

});

BEM.DOM.decl({ block: 'b-slide-show', modName: 'autoplay', modVal: 'yes' }, {

    _setTimer : function() {

        this._autoplayTimer =
            setTimeout(

                this.changeThis(function() {
                    this.trigger('autoplayTimer');
                }),

                this.params.autoplayTimerInterval

            );

        return this;

    },

    _clearTimer : function() {

        clearTimeout(this._autoplayTimer);

        return this;

    },

    _resetTimer : function() {

        this
            ._clearTimer()
            ._setTimer();

        return this;

    },

    _onOutOfSlides : function() {

        this
            ._clearTimer()
            .delMod('autoplay')
            .setMod(this.elem('ticker'), 'active', 'no')
            .toggleMod(this.elem('control', 'role', 'autoplay'), 'active', 'yes');
    },

    _onSlideChange: function() {
        this
            ._startProgress()
            ._resetTimer();
    }

});
