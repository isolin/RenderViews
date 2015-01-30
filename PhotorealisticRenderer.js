function PhotorealisticRenderer(domQuery) {

// definition of my class PhotorealisticRenderer


    var self = BasicThreeRenderer(domQuery);
        
    self.shadowMapEnabled = true;
        

    //Plane for testing in case there are some problems receiving or processing the server data
       var plane = new THREE.Mesh(new THREE.PlaneGeometry(10, 10), new THREE.MeshNormalMaterial());
       plane.position.z = -100;
       plane.position.y = -100;
       plane.overdraw = true;
       self.scene.add(plane);
            
            
    THREE.AmbientLight = function ( color ) {
	   THREE.Light.call( self, color );
	   self.type = 'AmbientLight';
    };

    THREE.AmbientLight.prototype = Object.create( THREE.Light.prototype );
       THREE.AmbientLight.prototype.clone = function () {
       var light = new THREE.AmbientLight();
       THREE.Light.prototype.clone.call( self, light );
       return light;
     };
  return self;
}