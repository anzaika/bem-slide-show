BEM.DOM.decl('b-progress-bar', {

    onSetMod : {

        js : function() {
            this.setMod('progress', '0');
        },

        progress : function(modName, modVal) {

            this.elem('filling')
                .css('width', modVal+'%');

        }

    }

});
