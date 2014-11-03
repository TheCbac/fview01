// Routes

Router.route("puzzlePage",{
	path: "/puzzlePage",
	template:"puzzlePage"
});

Router.route("draggable",{
	path:"/drag",
	template:"dragPage"
});

Router.route("404Route", {
	path:'/page-not-found',
	template: "notFoundPage"
});

