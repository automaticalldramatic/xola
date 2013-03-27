/**
 * Main JS file for myXola.
 * @author Rizwan Iqbal <mailme@rizwaniqbal.com>
 * @see https://bitbucket.org/rizwaniqbal/xola/overview
 */

(function($, undefined) {
	"use strict";

	if(jQuery === undefined)
		return;

	var app = function() {

		var Experience = Backbone.Model.extend();

		var Experiences = Backbone.Collection.extend({
			model: Experience,
			sync: function(method, model) {

				var params = _.extend({
					type: 'GET',
					dataType: 'jsonp',
					url: model.url()
				});
				return $.ajax(params);
			},

			url: function() {
				// return "https://xola.com/experiences";
				return "http://onlinerecently.dev.stepout.com/API/v1/Users/1793101/?";
			},

			parse: function(response) {
				console.log(response);
				return response;
			}
		});

		var AppView = Backbone.View.extend({
			initialize: function () {

				// to solve the this issue
				_.bindAll(this, "render");
				
				this.exp = new Experiences();
				
				this.exp.bind("reset", this.render);

				this.exp.fetch({
					success: function(r) {
						console.log("done");
						this.render(r);
					}
				});
				
				// I have to do this only becasue am not able to load the feed
				// this.exp.reset([experience1, experience2]);
			},

			render: function(r) {
				console.log("model");
			}
		});

		var ui = {
			init: function() {
				new AppView({
					el: $("body")
				});
			}
		};

		return {
			'ui':ui
		};
	}();

	app.ui.init();

})(jQuery);