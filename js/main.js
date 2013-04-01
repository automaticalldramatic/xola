/**
 * Main JS file for myXola. 
 *
 * //js main.js
 * 
 * @author Rizwan Iqbal <mailme@rizwaniqbal.com>
 * @see https://bitbucket.org/rizwaniqbal/xola/overview
 */

var xola = xola || {};

xola.config = {
	template: {
		skeleton: {
			path: 'js/views/skeleton.mst',
			id: 'tpl-exp-wrapper'
		},
		item: {
			path: 'js/views/item.mst',
			id: 'tpl-item'
		}
	},
	el: $('#wrapper'),
	CSS: {
		classes: {
			loader: 'loading',
			item: "experience",
			shadow: "one-edge-shadow"
		},
		id: {
			container: '#inner-wrap',
			header: '#header'
		}
	},
	amplifyKey: ''
};

$(function() {

	// Kick things off by creating the **App**.
	new xola.AppView({ el: xola.config.el });

});