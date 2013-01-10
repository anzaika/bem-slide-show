BEM.DOM.decl('b-slide-show', {

    onSetMod : {

        js : function() {

            this._currentSlide    = this.elem('slide', 'current', 'yes');
            this._currentContents = this.elem('contents-item', 'current', 'yes');

            this._onHashChange();

            this
                .bindToDoc('keydown', this._onKeyDown)
                .bindToWin('hashchange', this._onHashChange)
                .bindTo('control', 'click', this._onControlClick)
                .bindTo('bookmark', 'click', this._onBookmarkClick)
                .bindTo('contents-item', 'click' ,this._onContentsItemClick);

        },

        pos : function(modName, modVal) {

            if (this._isStringValidAsPos(modVal)) {

                this
                    ._updateCurrentSlide(modVal)
                    ._updateCurrentInContents(modVal)
                    ._setHash(modVal.toString());

            } else if (this._isPosLast(this.getPosNum())) {

                this.trigger('outOfSlides');
                return false;

            } else {

                this.afterCurrentEvent(function() {
                    this.setPos(0);
                });
                return false;

            }
        }

    },

    onElemSetMod : {

        slide : {

            current : {

                yes : function(elem) {

                    if (this._currentSlide)
                        this.delMod(this._currentSlide, 'current');

                    this._currentSlide = elem;

                }

            }

        },

        'contents-item' : {

            current : {

                yes : function(elem) {

                    if (this._currentInContents)
                        this.delMod(this._currentInContents, 'current');

                    this._currentInContents = elem;

                }

            }

        }

    },

   /*
    * Get current position as number.
    *
    * @return {number}
    */
    getPosNum : function() {
        return parseInt(this.getMod('pos'), 10);
    },

   /*
    * Switch to next slide.
    */
    next : function() {
        this.setPos(this.getPosNum()+1);
    },

   /*
    * Switch to previous slide.
    */
    prev : function() {
        this.setPos(this.getPosNum()-1);
    },

   /*
    * Set 'pos' modificator, ensuring that the value passed to setMod is
    * a string.
    *
    * @param {string, number} modVal new modificator value.
    */
    setPos : function(value) {
        this.setMod('pos', value.toString());
    },

   /*
    * Set current modificator to yes for slide element with pos === pos.
    *
    * @param {string} pos 'pos' modificator value.
    */
    _updateCurrentSlide : function(pos) {

        this.setMod( this.elem('slide', 'pos', pos),
                     'current',
                     'yes');

        return this;


    },

   /*
    * Set current modificator to yes for contents-item element
    * with pos === pos.
    *
    * @param {string} pos 'pos' modificator value.
    */
    _updateCurrentInContents : function(pos) {

        this.setMod( this.elem('contents-item', 'pos', pos),
                     'current',
                     'yes');

        return this;

    },

   /*
    *
    *
    * @param {string} value 'pos' modificator value.
    */
    _isStringValidAsPos : function(value) {
        return !!this
                     .elem('slide', 'pos', value)
                     .length;
    },

    _isPosLast : function(value) {
        return value === this.elem('slide').length-1;
    },

   /*
    * Decides which action to trigger based on the keypress event.
    *
    * @private
    * @param {f.Event} e event object
    */
    _onKeyDown : function(e) {

        var key = e.keyCode;

        // 39, 32 - right arrow and space
        // 37     - left arrow

        if ( key === 39 || key === 32 ) {

            this.next();

        } else if ( key === 37 ) {

            this.prev();

        }

    },

   /*
    * React to bookmark click.
    *
    * @private
    */
    _onBookmarkClick : function() {
        this.toggleMod(this.elem('contents'), 'hidden', 'no', 'yes');
    },

   /*
    * Decides which action to trigger based on
    * which control button was clicked.
    *
    * @private
    * @param {f.Event}
    */
    _onControlClick : function(e) {

        e.preventDefault();

        var role = this.getMod($(e.target), 'role');

        if (role === 'next' || role === 'prev') {

            this[role]();

        }

        return this;

    },

   /*
    * React to item click in contents.
    *
    * @private
    * @param {f.Event}
    */
    _onContentsItemClick : function(e) {

        e.preventDefault();
        this._setHash(this.getMod($(e.target), 'pos'));

        return this;

    },

   /*
    * Get url location hash value.
    *
    * @private
    * @return {string}
    */
    _getHash : function() {
        return location.hash.substring(1);
    },

   /*
    * Set url location hash value.
    *
    * @private
    * @param {string}
    */
    _setHash : function(value) {
        location.hash = value;
    },

   /*
    * React to url location hash change.
    *
    * @private
    */
    _onHashChange : function() {
        this.setPos(this._getHash());
    }

});
