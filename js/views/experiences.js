/**
 * js/views/experiences.js
 * Views for Experience
 * @uses Mustache Templates
 */
var xola = xola || {};

xola.config = {
	template: {
		skeleton: 'js/views/skeleton.mst',
		item: 'js/views/item.mst'
	}
};

xola.AppView = Backbone.View.extend({


	initialize: function () {

		// to solve the this issue
		_.bindAll(this, "render");

		this.exp = new xola.Experiences();

		this.exp.bind("reset", this.render);

		// this.exp.fetch({
		// 	success: function(r) {
		// 		console.log("done");
		// 		this.render(r);
		// 	}
		// });
		
		// I have to do this only becasue am not able to load the feed
		this.exp.reset([experience1, experience2]);
	},

	render: function() {
		var skeleton = $.mustache(xola.config.template.skeleton, this.exp);
	}
});