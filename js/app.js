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

App.IndexController = Ember.ArrayController.extend({
	actions: {
	    initMasonry: function(work) {
	      	console.log('mansonry');
	      	this.transitionToRoute('index', work);
			setTimeout( function() {
				var container = document.querySelector('#tilesContainer');
				var msnry = new Masonry( container, {
			  		// options
					columnWidth: 200,
					itemSelector: '.tile'
				});
			}, 300);
	    }


	  }
});

// App.WorkSerializer = DS.RESTSerializer.extend({
//     primaryKey: 'id',
//     extractArray: function (store, primaryType, payload) {
//         var primaryTypeName = primaryType.typeKey;

//         var typeName = primaryTypeName,
//             type = store.modelFor(typeName);

//         var data = {};
//         var item = [];
//         item.push(payload)
//         data[typeName] = item;
//         console.log(JSON.stringify(data));
//         payload = data;

//         return this._super.apply(this, arguments);
//     }
// });

App.ApplicationAdapter = DS.RESTAdapter.extend({
	host: 'http://127.0.0.1/lem_portfolio_page'
});

// App.Work = DS.Model.extend({
// 	ImageGroup: DS.attr('array')
// });

App.Work = DS.Model.extend({
	title: DS.attr('string'),
	client: DS.attr('string'),
	client_url: DS.attr('string'),
	user_id: DS.attr('number'),
	album_id: DS.attr('number'),
	category_id: DS.attr('number'),
	created: DS.attr('date'),
	deleted: DS.attr('boolean'),
	description: DS.attr('string'),
	hidden: DS.attr('boolean'),
	modified: DS.attr('date'),
	portfolio_id: DS.attr('number'),
	sorting: DS.attr('number'),
	year: DS.attr('string'),
	agency: DS.attr('string'),
	product_url: DS.attr('string')
});

// App.Work.FIXTURES =
// [
// 	{
// 		id: 1,
// 		title: 'ZipJet Driver App',
// 		client: 'ZipJet',
// 		client_url: 'http://www.zipjet.com'
// 	},
// 	{
// 		id: 2,
// 		title: 'Augsburger Allgemeine iOS App',
// 		client: 'Augsburger Allgemeine',
// 		client_url: 'http://www.augsburger-allgemeine.de'
// 	},
// 	{
// 		id: 3,
// 		title: 'WAZ Plus',
// 		client: 'FUNKE Medien',
// 		client_url: 'http://www.funkemedien.de/de/geschaeftsfelder/digital/'
// 	}
// ]



