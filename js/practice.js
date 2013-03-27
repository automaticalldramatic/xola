(function($, undefined) {
	var Todo = Backbone.Model.extend({
		defaults: {
			title: "This is the default title",
			completed: false
		},

		initialize: function() {
			console.log('Todo initialized');
			this.on('change:title', function() {
				console.log('Title changed to:' + this.get('title'));
			});
		},

		setTitle: function(newtitle) {
			this.set({title: newtitle});
		}

	});

	var TodosCollection = Backbone.Collection.extend({
		model: Todo,
		url: function() {
			// return "http://xola.com/experiences";
			return "http://onlinerecently.dev.stepout.com/API/v1/Users/1793101/?";
		}
	});

	var myToDo = new Todo();
	// myToDo.setTitle('This is a changed Title');
	myToDo.set({id:2});

	var todos = new TodosCollection([myToDo]);
	todos.fetch({
		dataType: "jsonp",
		success: function(r) {
			console.log(r.length);
		}
	});
	console.log(todos.length);
})(jQuery);