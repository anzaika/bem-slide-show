BEM.DOM.decl('b-slide-show', {

    onSetMod : {

        js : function() {

            this._current = this.elem('slide', 'current', 'yes');
            this._onHashChange();

            this
                .bindToDoc('keydown', this._onKeyDown)
                .bindToWin('hashchange', this._onHashChange)
                .bindTo('control', 'click', this._onControlClick)
                .bindTo('bookmark', 'click', this._onBookmarkClick)
                .bindTo('contents-item', 'click' ,this._onContentsItemClick);

        },

        pos : function(modName, modVal) {
            this._setHash(modVal);
        }

    },

    onElemSetMod : {

        slide : {

            current : {

                yes : function(elem) {

                    if (this._current)
                        this.delMod(this._current, 'current');

                    this._current = elem;

                }

            }

        }

    },

    _getHash : function() {
        return location.hash.substring(1);
    },

    _setHash : function(value) {
        location.hash = value;
    },

    _getPos : function() {
        return parseInt(this._getHash(), 10);
    },

    _onBookmarkClick : function() {
        this.toggleMod(this.elem('contents'), 'hidden', 'no', 'yes');
    },

    _onHashChange : function() {

        var pos = this._getHash(),
            elem = this.elem('slide', 'pos', pos) || this.elem('slide', 'pos', '0');

        this
            .setMod(elem, 'current', 'yes')
            .setMod('pos', this.getMod(elem, 'pos'))
            ._updateCurrentInContents();

        return this;

    },

    _onControlClick : function(e) {

        e.preventDefault();

        var role = this.getMod($(e.target), 'role');

        if (role === 'next' || role === 'prev') {

            this.show(role);

        }

        return this;

    },

    _onContentsItemClick : function(e) {

        e.preventDefault();
        this._setHash(this.getMod($(e.target), 'pos'));

        return this;

    },

    _updateCurrentInContents : function() {

        this.delMod(
            this.elem('contents-item', 'current', 'yes'),
            'current'
        );

        this.setMod(
            this.elem('contents-item', 'pos', this._getHash()),
            'current',
            'yes'
        );

        return this;

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

            this.show('next');

        } else if ( key === 37 ) {

            this.show('prev');

        }

    },

    _movePos : function(direction) {

        var inc = (direction === 'next' ? 1 : -1);
        this.setMod('pos', +this.getMod('pos') + inc);

        return this;

    },

    show : function(direction) {

        var next = this._current[direction]();

        if (direction === 'next' && (this._getPos() === this.elem('slide').length-1)){
            this.trigger('outOfSlides');
            return;
        }

        if (direction === 'prev' && this._getPos() === 0)
            return;

        this
            ._movePos(direction)
            .setMod(next, 'current', 'yes')
            .trigger('slideChange')
            ._updateCurrentInContents();

    }


});
