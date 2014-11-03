Router.configure({
	notFoundTemplate: 'notFoundPage',
	layoutTemplate: 'headerFooter',
	yieldTemplates:{
		'appHeader': {to: 'header'},
		'appFooter': {to: 'footer'},
		'test' : {to:'content'}
	}
});


// ----------------------------------
// Root route

Router.route('landingPageRoute', {
	path:'/',
	template: 'landingPage'
});


