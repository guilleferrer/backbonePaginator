window.PaginatorView = Backbone.View.extend({
    el: '.paginator',
    initialize: function () {
        this.setPaginatorControls();
    },

    events: {
        "click .paginator #moveright" : "nextPage",
        "click .paginator #moveleft"  : "prevPage"
    },
    
    
    setPaginatorControls: function()
    {
        this.resetControlls(this.collection.options.page_offset, this.collection.options.max_page_offset);
    },

    prevPage: function () {
        this.setPaginatorControls();
        this.collection.fetch( {
            data: {
                'page_offset' : --this.collection.options.page_offset
            }
        } );
        
    },

    nextPage: function () {
        this.setPaginatorControls();
        this.collection.fetch( {
            data: {
                'page_offset' : ++this.collection.options.page_offset
            }
        } );
    },

    resetControlls : function (page_offset, max_page_offset) {
        $(this.el).find('#moveleft').css('visibility', (page_offset == 0)? 'visible':'hidden');
        $(this.el).find('#moveright').css('visibility', (page_offset == max_page_offset)? 'hidden':'visible');
    }
});
