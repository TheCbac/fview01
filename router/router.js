Router.configure({
	notFoundTemplate: 'notFoundPage'
});


// ----------------------------------
// Root route

Router.route('landingPageRoute', {
	path:'/',
	template: 'landingPage'
})
