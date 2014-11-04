Template.dragSideBarContent.helpers({
	drags: function() {
		return DraggableBlocks.find({});
	},

	testes: function() {
		console.log('leo');
		return [1,2,3];

	}
});

Template.button1.rendered = function() {
	fview = FView.from(this);

	fview.surface.setProperties({
		backgroundColor: "gray",
		border:"2px solid black",
		cursor:"pointer",
	});
};

Session.setDefault("number",1);

Template.button1.events({
	'click': function(event, template){
		fview=FView.from(template);
		// var num = Session.get("number");
		// DraggableBlocks.insert({"name":num});
		// Session.set("number",num+1);
		// fview.modifier.setPosition([0,0], { duration: 1000, curve: 'easeOut' },
		// 							function() {
		// 								console.log("done");
		// 							});
		alert("You pressed me");
		

	}
});




Template.blah.rendered = function() {
	fview = FView.from(this);

	
	fview.modifier.setOptions({
		  xRange: [-900,900],
		  yRange: [-400,400]
	});



	fview.modifier.subscribe(fview.surface);

	//define sync
	var sync = new famous.inputs.MouseSync();
	var position = new famous.transitions.Transitionable([0,0]);
	
	fview.surface.pipe(sync);


	sync.on('update', function(data){
		
		// var currentPosition = position.get();
  //   	position.set([
  //       	currentPosition[0] + data.delta[0],
  //       	currentPosition[1] + data.delta[1]
  //   	]);

  //   	console.log(currentPosition);
	});

	sync.on('end',  function(data){
		// position.set([0,0],{
		// 	method : 'spring',
  //       	period : 150,
  //       	});
	position.set([0,0]);
	console.log('done');

	});



	fview.surface.setContent(
		this.data.name
	);

	// fview.modifier.setPosition([100,100, 'inOut'])

	fview.surface.setProperties({
		backgroundColor: "green",
		border:"2px solid black",
		cursor:'pointer',
		textAlign:"center",
		lineHeight:'75px',
	});
};

