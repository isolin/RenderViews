function PhotorealisticRenderer(domQuery) {

// definition of my class PhotorealisticRenderer


    var self = BasicThreeRenderer(domQuery);
    
    self.initCalls.push( function (){
        this.projector = new THREE.Projector();

    })
        
  // set the renderer
    self.renderer.setClearColorHex(0xffffff, 1); //white
    self.renderer.shadowMapEnabled = true;      

    //Camera initialization
      self.camera = new THREE.PerspectiveCamera(50, self.camera.innerWidth() / self.camera.innerHeight(), 0.1, 1000); //field of view angle, aspect ratio, near clipping plane, far clipping plane
      //position of the camera
      self.camera.position.y = 5;
	  self.camera.position.z = 4;
	  self.camera.rotation.x = 45 * (Math.PI / 180);

    //Our main scene
      self.scene = new THREE.Scene();

      //Plane for testing in case there are some problems receiving or processing the server data
         var plane = new THREE.Mesh(new THREE.PlaneGeometry(10, 10), new THREE.MeshNormalMaterial());
       	 plane.position.z = -100;
         plane.position.y = -100;
         plane.overdraw = true;
         self.scene.add(plane);
            
    	var light = THREE.Ambientlight(0xffffff);
    	self.scene.add(light);

    self.renderCalls.push(function () {
        this.renderer.render(this.scene, this.camera);
    });
}