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
		skeleton: 'js/views/skeleton.mst',
		item: 'js/views/item.mst'
	},
	el: $('#container'),
	CSS: {
		classes: {
			loader: '.loading'
		},
		id: {
			header: '#header',
			skeletonWrapper: '#wrapper'
		},
		loader: 'loading'
	}
};

$(function() {

	// Kick things off by creating the **App**.
	new xola.AppView({ el: xola.config.el });

});