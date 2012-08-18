/**
 * Created with JetBrains PhpStorm.
 * User: Администратор
 * Date: 14.08.12
 * Time: 23:43
 * To change this template use File | Settings | File Templates.
 */
app.Views.accordionApp=Backbone.View.extend({
        head: 'h3',
        body:'div',
        initialize: function(options){
            this.parentApp=options.parentApp;
            this.head=options.head?options.head:this.head;
            this.body=options.body?options.body:this.body;
            this.preRender()
        },
        events:{
        },
        preRender :function(){
            this.events['click '+this.head]='toggle';
            this.delegateEvents();
            this.$el.children(this.body).hide();
        },
        toggle :function(events){
            var elem=this.$(events.currentTarget);
            elem.next().toggle('slow',function(){})
            return false;

        },
        renderList: function(){

        }


});