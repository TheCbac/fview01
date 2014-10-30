
FView.registerView('GridLayout', require("famous/views/GridLayout"));

Template.goalView.rendered = function () {
	var fview= FView.from(this);

	//fview.modifier.setSize([500,500]);
};

Template.goalView.helpers({
	puzzleSpots: function () {
		return PuzzleSpot.find({});
	}
});

