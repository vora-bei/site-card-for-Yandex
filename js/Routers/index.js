/**
 * Created with JetBrains PhpStorm.
 * User: Администратор
 * Date: 14.08.12
 * Time: 22:56
 * To change this template use File | Settings | File Templates.
 */
app.Routers.index = Backbone.Router.extend({

    initialize: function(){
        this.app = new Backbone.View.mainApp();
    },

    routes: {
        "help":                 "help",    // #help
        "resume/":        "resume",
        "resume/:section/p:subsection": "resume",
        "": "resume"   // #search/kiwis/p7
    },

    help: function() {

    },

    resume: function(section, subsection) {
        section= section?section:0;
        subsection= subsection?subsection:0;
    }

});