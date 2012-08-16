/**
 * Created with JetBrains PhpStorm.
 * User: Администратор
 * Date: 14.08.12
 * Time: 23:43
 * To change this template use File | Settings | File Templates.
 */
app.Views.sectionApp=Backbone.View.extend({

        initialize: function(options){
            this.render();
            this.model.on('open',this.open,this);
            this.model.on('close',this.close,this);
        },
        events: function(){

        },
        open : function(){
            this.$el.slideDown();
        },
        close : function(){
            this.$el.slideUp();
        },
        render :function(){
            this.$el.hide();
        },
        render_not_item : function(){

        },
        renderList: function(){

        }



});