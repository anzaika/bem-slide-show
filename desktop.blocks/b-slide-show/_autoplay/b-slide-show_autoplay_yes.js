BEM.DOM.decl('b-slide-show', {

    getDefaultParams : function() {

        return {

            autoplayTimerInterval: 2000

        };

    },

    onSetMod : {

        autoplay : {

            yes : function() {

                this.afterCurrentEvent(function() {

                    this
                        ._manageHandlers('on')
                        ._start();

                });

            },

            '' : function() {

                this
                    ._manageHandlers('un')
                    ._stop();

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

    }

});

BEM.DOM.decl({ block: 'b-slide-show', modName: 'autoplay', modVal: 'yes' }, {

    onElemSetMod : {

        progress : {

            active : {

                yes : function() {

                    var interval =
                        this.params.autoplayTimerInterval;

                    this._progressBar =
                        this._progressBar ||
                        this.findBlockInside('progress', 'b-progress-bar');

                    this._progressBar.start(interval);

                },

                '' : function() {

                    this._progressBar.stop();

                }

            }

        }

    },

   /*
    * Subscribe and unsubscribe event handlers.
    *
    * @private
    * @param {string} action 'on' or 'un'
    */
    _manageHandlers : function(action) {

        if (action != 'on' && action != 'un')
            throw "_manageHandlers accepts only 'on' or 'un' as params, " +
                  "but received: " + action ;

        return this
                   [action]('autoplayTimer',  this._onAutoplayTimer)
                   [action]('autoplayFinish', this._onAutoplayFinish)
                   [action]('slideChange',    this._onSlideChange)
                   [action]('outOfSlides',    this._onOutOfSlides);

    },

    _start : function() {

        this._setTimer();

        return this.setMod(this.elem('progress'), 'active', 'yes');

    },

    _stop : function() {

        return this
                   ._clearTimer()
                   .delMod(this.elem('progress'), 'active');

    },

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
