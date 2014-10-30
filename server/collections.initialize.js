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
});