App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
  this.resource('index', {path: '/'});
  this.resource('about', {path: '/about'});
  this.resource('contact', {path: '/contact'});
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('work');
   }
});

App.ApplicationAdapter = DS.FixtureAdapter.extend({

});

App.Work = DS.Model.extend({
	title: DS.attr('string'),
	client: DS.attr('string'),
	url: DS.attr('string')
});

App.Work.FIXTURES =
[
	{
		id: 1,
		title: 'ZipJet Driver App',
		client: 'ZipJet',
		url: 'http://www.zipjet.com'
	},
	{
		id: 2,
		title: 'Augsburger Allgemeine iOS App',
		client: 'Augsburger Allgemeine',
		url: 'http://www.augsburger-allgemeine.de'
	}
]



