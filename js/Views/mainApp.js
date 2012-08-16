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

    visibleSection: '',//Открытая Section

    collectionClass : app.Collections.section,

    initialize: function(options){
        this.initCollection()
        this.preRender()
    },

    //инициализация коллекции
    initCollection: function(){

        var collection=this.collection=new this.collectionClass();

        //определение параметров необходимых для построения по html элементам, элементов коллекции
        //определение аттрибутов элементов коллекции (id,name)
        var itemColl =this.itemCollection;
        var selector=itemColl.selector?itemColl.selector:'div';
        var attrs=itemColl.attrs?itemColl.attrs:['id'];

        //добавление в коллекцию элементов c атрибутами определенными в attrs
        var item;
        this.$(selector).each(function(i){
             item={}
            _.each(attrs,function(val){
                 item[val]=this.attr(val);
            },$(this))
            collection.add(item)
        })
    },

    events: {

    },
    toggle: function (current,next){
        var coll=this.collection;
        if(!_.isEmpty(current)){
            coll.get(current).trigger('close');
        }
        coll.get(next).trigger('open');

    },
    render: function(section){
       this.toggle(this.visibleSection,section)
       this.visibleSection=section;

    },
    preRender :function(){
        this.initList(this.elem);
    },
    initList: function(item){
        var coll = this.collection;
        if(!_.isEmpty(coll)&&!_.isEmpty(coll.models))
            coll.each(function(num,i){
                var view = new item({model: num, el :$('#'+num.id).get(0)});
            },this);
        else
        {
            var view = new item({model: new Backbone.Model()});
            view.render_not_item();
        }
    },

    elem : app.Views.sectionApp


});