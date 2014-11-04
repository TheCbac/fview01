FView.registerModifier('Draggable',famous.modifiers.Draggable);


Template.dragPage.rendered = function() {
	fview = FView.from(this);

	
};


Template.dragSquare.rendered =function() {
	
	
	fview = FView.from(this);
	
	// console.log(wid);
	fview.modifier.setOptions({
		// snapX:1,
		// snapY:1,
		  xRange: [0,900],
		  yRange: [0,300]
	});


	fview.modifier.subscribe(fview.surface);

	fview.surface.setProperties({
		 backgroundColor:"yellow",
		border:"2px solid black",
		cursor: 'pointer',
		textAlign: 'center'
	});

};


