Template.goalSurface.rendered = function() {

  console.log(FView);

  console.log(this);
  var fview = FView.from(this); 

  console.log(fview);

  fview.surface.setProperties({
    backgroundColor: 'rgb(240, 238, 233)',
    textAlign: 'center',
    padding: '5px',
    border: '2px solid rgb(210, 208, 203)',

  });

  fview.modifier.setSize([200,200]);
};
