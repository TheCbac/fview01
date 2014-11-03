FView.registerModifier('Draggable',famous.modifiers.Draggable);

Template.dragSquare.rendered =function() {
	

	fview = FView.from(this);


	fview.modifier.setOptions({
		// snapX:1,
		// snapY:1,
		// xRange: [-300,300],
		// yRange: [-300,300]
	});


	fview.modifier.subscribe(fview.surface);

	fview.surface.setProperties({
		backgroundColor:"yellow",
		border:"2px solid black",
		cursor: 'pointer',
		textAlign: 'center'
	});
};
