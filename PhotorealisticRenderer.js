function PhotorealisticRenderer(domQuery) {

// definition of my class PhotorealisticRenderer


    var self = BasicThreeRenderer(domQuery);
        
    self.scene = null;
    self.camera = null;
    self.shadowMapEnabled = true;
        
 

    //Camera initialization
      self.camera = new THREE.PerspectiveCamera(50, window.innerWidth() / window.innerHeight(), 0.1, 1000); //field of view angle, aspect ratio, near clipping plane, far clipping plane
      //position of the camera
      self.camera.position.y = 5;
	  self.camera.position.z = 4;
	  self.camera.rotation.x = 45 * (Math.PI / 180);


      //Background of the canvas
        self.renderer.setClearColorHex(0xffffff, 1); //white
        //Our main scene
        self.scene = new THREE.Scene();

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