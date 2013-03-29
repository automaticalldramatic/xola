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
			id: 'tpl-wrapper'
		},
		item: {
			path: 'js/views/item.mst',
			id: 'tpl-item'
		}
	},
	el: $('#container'),
	CSS: {
		classes: {
			loader: '.loading',
			item: "experience"
		},
		id: {
			header: '#header'
		},
		loader: 'loading'
	},
	amplifyKey: ''
};

$(function() {

	// Kick things off by creating the **App**.
	new xola.AppView({ el: xola.config.el });

});