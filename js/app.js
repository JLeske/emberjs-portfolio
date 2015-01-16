App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
  this.resource('about', {path: '/about'});
  this.resource('contact', {path: '/contact'});
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});

App.AboutRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('text');
	}
});

App.AboutController = Ember.ObjectController.extend({

});

App.About = DS.Model.extend({
	text: DS.attr('string')
});


App.About.FIXTURES = {
	text: 'Bla bla bla.'
};
