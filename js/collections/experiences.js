/**
 * js/collections/experiences.js
 * Model Collection for Experience
 *
 */
var xola = xola || {};

xola.Experiences = Backbone.Collection.extend({
	model: xola.Experience,
	// sync: function(method, model) {

	// 	var params = _.extend({
	// 		type: 'GET',
	// 		dataType: 'jsonp',
	// 		url: model.url()
	// 	});
	// 	return $.ajax(params);
	// },

	url: function() {
		// return "https://xola.com/experiences";
		return "http://onlinerecently.dev.stepout.com/API/v1/Users/1793101/?";
	},

	parse: function(response) {
		console.log(response);
		return response;
	}
});