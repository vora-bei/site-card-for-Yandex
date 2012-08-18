/**
 * Created with JetBrains PhpStorm.
 * User: Администратор
 * Date: 14.08.12
 * Time: 22:56
 * To change this template use File | Settings | File Templates.
 */
app.Routers.index = Backbone.Router.extend({

    initialize: function(){
        this.app = new app.Views.mainApp({
                                    apps:{
                                             leftMenu : {
                                                            app: app.Views.leftMenu,
                                                            elements: $('#sideLeft'),
                                                            options:{}
                                                        },
                                             accordion : {
                                                             app: app.Views.accordionApp,
                                                             elements: $('.accordion'),
                                                             options:{
                                                                        head : 'h3',
                                                                        body : 'div'
                                                                     }
                                                        }
                                         },
                                    el:$('#middle').get(0)
                                });
    },

    routes: {
        "":        "resume",
        ":section":        "resume",
        ":section/p:subsection": "resume",
        "": "resume"   // #search/kiwis/p7
        },

    resume: function(section, subsection) {
        section= section?section:'general';
        subsection= subsection?subsection:0;
        this.app.render(section)
        return false;
    }

});