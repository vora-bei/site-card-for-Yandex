/**
 * Created with JetBrains PhpStorm.
 * User: Администратор
 * Date: 14.08.12
 * Time: 23:43
 * To change this template use File | Settings | File Templates.
 */
app.Views.mainApp=Backbone.View.extend({
    templates: '',
    itemCollection :{
        selector : '.section',
        attrs : ['id','name']
    },
    collectionClass : app.Collections.section,

    initialize: function(options){
        this.initCollection()
        this.render()
    },

    //инициализация коллекции
    initCollection: function(){

        this.collection=new this.collectionClass();

        //определение параметров необходимых для построения по html элементам, элементов коллекции
        //определение аттрибутов элементов коллекции (id,name)
        var itemColl =this.itemCollection;
        var selector=itemColl.selector?itemColl.selector:'div';
        var attrs=itemColl.attrs?itemColl.attrs:['id'];

        //добавление в коллекцию элементов c атрибутами определенными в attrs
        var item;
        this.$(selector).each(function(num,i){
             item={}
            _.each(attrs,function(val){
                 item[val]=$(num).attr(val);
            },num)
            this.collection.add(item)
        },this)
    },

    events: function(){

    },

    render :function(){

        this.renderList(elem,this.elem);
    },
    renderList: function(item){
        var coll = this.collection;
        if(!_.isEmpty(coll)&&!_.isEmpty(coll.models))
            coll.each(function(num,i){
                var    view = new item({model: num});
                view.render();
            },this);
        else
        {

            var view = new item({model: new Backbone.Models()});
            view.render_not_item();

        }
    },

    elem : Backbone.View.extend({
        initialize: function(){

        },
        events: function(){

        },
        render :function(){

        },
        render_not_item : function(){

        },
        renderList: function(){

        }
    })


});