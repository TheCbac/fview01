Template.headerContent.rendered = function () {
	var fview = FView.from(this);

	fview.surface.setProperties({
		backgroundColor:"red",
		textAlign: 'center'
	});
};