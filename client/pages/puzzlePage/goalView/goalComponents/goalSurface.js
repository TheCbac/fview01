Template.goalSurface.rendered = function() {

  var fview = FView.from(this); 

  fview.surface.setProperties({
    //backgroundColor: 'rgb(240, 238, 233)',
    backgroundColor:this.data.name,
    textAlign: 'center',
    padding: '5px',
    border: '2px solid rgb(210, 208, 203)',
    //opacity:"0.3"

  });

  fview.modifier.setSize([100,100]);
  fview.modifier.setOrigin([0.5,0.5]);
  fview.modifier.setAlign([0.5,0.5]);
 //fview.modifier.setDraggable(true);
};
