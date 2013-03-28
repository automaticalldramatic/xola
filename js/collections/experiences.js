/**
 * js/collections/experiences.js
 * Model Collection for Experience
 *
 */
var xola = xola || {};

var Experiences = Backbone.Collection.extend({
	model: xola.Experience,
	
	sync: function(method, model) {

		var params = _.extend({
			type: 'GET',
			dataType: 'jsonp',
			url: model.url()
		});
		return $.ajax(params);
	},

	url: function() {
		return "https://xola.com/experiences";
	},

	parse: function(response) {
		console.log(response);
		return response;
	}
});

xola.Experiences = new Experiences();