// Just stubbing Session on the server.
if (Meteor.isServer) {
	Session = {
		get: function () {
			console.log('Session.get() on server!');
			return [];
		},
		set: function () {
			console.log('Session.set() on server!');
			return true;
		}
	};
}

// Reset the click counter on startup.
Meteor.startup(function () {
	Session.set('clicks', ['no clicks yet!']);
});
	
// Helpers
Template.hello.helpers({
	something: function () {
		return [{
			name: 'Name 1',
			cool: true
		}, {
			name: 'Kristoffer Klintberg',
			cool: 'no'
		}, {
			name: 'George',
			cool: 100
		}];
	},
	clicks: function () {
		return Session.get('clicks');
	}
});

// Adding clicks to the clicks Session.
var addClick = function ( msg ) {
	var currentClicks = Session.get('clicks');
	currentClicks.push( msg );
	Session.set('clicks', currentClicks );
};

// The events.
Template.hello.events({
	'click .btn-cool': function ( e ) {
		e.stopImmediatePropagation();
		addClick('click on BUTTON for: ' + this.name);
	},
	'click .span-name': function ( e ) {
		e.stopImmediatePropagation();
		addClick('click on NAME for: ' + this.name);
	}
});