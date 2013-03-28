/**
 * js/views/experiences.js
 * Views for Experience
 * @uses Mustache Templates
 */
var xola = xola || {};

xola.AppView = Backbone.View.extend({


	initialize: function () {
		// to solve the this issue
		_.bindAll(this, "render");

		this.$el.find(xola.config.CSS.classes.loader).fadeIn(1000);

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
		$(xola.config.CSS.classes.loader).animate({
			marginTop:'1%'
		},1500, function() {
			$(this).removeClass(xola.config.CSS.loader);
		});
		this.$el.appendTo(skeleton);
		$(xola.config.CSS.id.skeletonWrapper).fadeIn(1500);
	},
});