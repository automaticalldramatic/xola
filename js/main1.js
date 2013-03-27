/**
 * Main JS file for myXola.
 * @description Loads static data
 * @author Rizwan Iqbal <mailme@rizwaniqbal.com>
 * @see https://bitbucket.org/rizwaniqbal/xola/overview
 */

(function($, undefined) {
	"use strict";

	if(jQuery === undefined)
		return;

	var xola = xola || {};

	$(function() {
		new xola.AppView();
	});

})(jQuery);