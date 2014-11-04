Meteor.startup(function(){
	if (PuzzleSpot.find().count() === 0) {
		redId = PuzzleSpot.insert({
			name:"red"
		});

		blueId = PuzzleSpot.insert({
			name:"blue"
		});

		greenId = PuzzleSpot.insert({
			name:"green"
		});

	}

	if(DraggableBlocks.find().count() ===0) {
		commMod = DraggableBlocks.insert({
			name:"Communications"
		});

		eneryMod = DraggableBlocks.insert({
			name:"Energy"
		});

		controlMod = DraggableBlocks.insert({
			name:"Controls"
		});

		sensorMod = DraggableBlocks.insert({
			name:"Sensor"
		});

		actuationMod = DraggableBlocks.insert({
			name:"Actuation"
		});

		powerMod = DraggableBlocks.insert({
			name:"Power"
		});

	}
});