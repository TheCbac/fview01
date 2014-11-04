Template.footerContent.rendered = function () {
	var fview = FView.from(this);
	fview.surface.setProperties({
		backgroundColor:"blue",
		textAlign: 'center'
	});
};

