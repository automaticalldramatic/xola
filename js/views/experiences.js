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

		this.$el.find("." + xola.config.CSS.classes.loader).fadeIn(1500);

		//Load all Mustache templates
		$.Mustache.load(xola.config.template.skeleton.path);
		$.Mustache.load(xola.config.template.item.path);

		xola.Experiences.on("add", this.render);

		var c = xola.Experiences.localStorage;
		if(c.records.length > 0) {
			this.render();
			return;
		}

		//Cannot get data remotely cause it gives a MIME error.
		// xola.Experiences.fetch({
		// 	success: function(r) {
		// 		console.log("done");
		// 		this.render();
		// 	}
		// });

		// I have to do this only becasue am not able to load the feed
		xola.Experiences.create([experience1,experience2, experience3, experience4, experience5]);
	},

	render: function() {
		var self = this;
		// var skeleton = $.mustache(xola.config.template.skeleton, this.exp);
		$("." + xola.config.CSS.classes.loader).animate({
			marginTop:'1%'
		},1500, function() {
			$(this).removeClass(xola.config.CSS.classes.loader);
			$(this).addClass(xola.config.CSS.classes.shadow);
			$(xola.config.CSS.id.headerMenu).show(1500);
			self.renderData();
		});
	},

	renderData: function() {
		var content = '',
			imgArr = [],
			a = this,
			c = xola.Experiences.localStorage.findAll();
		_.each(c, function(l) {
			if( typeof l != "object") return;
			_.each(l, function(exp) {
				if( typeof exp != "object") return;
				console.log(exp);
				var url = "//xola.com/" + exp.photo.src;
				imgArr.push(url);
				var experience = {
					dp: exp.photo
				};
				content += $.Mustache.render( xola.config.template.skeleton.id, exp );
			});
		});
		//preload if need be, but do it in init
		// a.preload(imgArr);

		$(xola.config.CSS.id.container).append(content);
	},

	preload: function(urls, content) {
		$.each(urls, function(i, url) {
			console.log('loading');
			// $("<img />").attr("src", url);
		});
	}
});