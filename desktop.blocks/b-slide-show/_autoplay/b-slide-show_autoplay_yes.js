BEM.DOM.decl('b-slide-show', {

    getDefaultParams : function() {

        return {

            autoplayTimerInterval: 10000

        };

    },

    onSetMod : {

        autoplay : {

            yes : function() {

                this.afterCurrentEvent(function() {

                    this
                        ._manageHandlers('on')
                        .start();

                });

            },

            '' : function() {

                this
                    ._manageHandlers('un')
                    .stop();

            }

        }

    },

   /*
    * Decides which action to trigger based on the keypress event.
    *
    * @private
    * @param {f.Event} e event object
    */
    _onKeyDown : function(e) {

        this.__base.apply(this, arguments);

        if (e.keyCode === 80) {
            this.toggleMod('autoplay', 'yes');
        }

    }

});

BEM.DOM.decl({ block: 'b-slide-show', modName: 'autoplay', modVal: 'yes' }, {

   /*
    * Subscribe and unsubscribe event handlers.
    *
    * @private
    * @param {string} action 'on' or 'un'
    */
    _manageHandlers : function(action) {

        return this
                    [action]('slideChange', this.start)
                    [action]('timer',       this.next)
                    [action]('outOfSlides', this.stop);

    },

    start : function() {

        var interval =
            this
                ._currentSlide
                .attr('playtime');

        this._setTimer(parseInt(interval, 10));

    },

    stop : function() {

        this
            ._clearTimer()
            .delMod('autoplay')
            .setMod(this.elem('ticker'), 'active', 'no')
            .toggleMod(this.elem('control', 'role', 'autoplay'), 'active', 'yes');

    },

    _setTimer : function(interval) {

        this._clearTimer();

        this._autoplayTimer =
            setTimeout(

                this.changeThis(function() {
                    this.trigger('timer');
                }),

                interval*1000

            );

    },

    _clearTimer : function() {

        clearTimeout(this._autoplayTimer);

        return this;

    }

});
