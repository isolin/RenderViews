function PhotorealisticRenderer(domQuery) {

// definition of my class PhotorealisticRenderer


    var self = BasicThreeRenderer(domQuery);
    
    self.initCalls.push( function (){
        this.projector = new THREE.Projector();

      });        
    // set the renderer
        self.renderer = new THREE.WebGLRenderer();
        self.renderer.setClearColor(0xffffff, 1); //white
        self.renderer.shadowMapEnabled = true;      

        //Camera initialization
        self.camera = new THREE.PerspectiveCamera(50, 1200 / 1200, 0.1, 1000); //field of view angle, aspect ratio, near clipping plane, far clipping plane
        //position of the camera
        self.camera.position.y = 5;
	      self.camera.position.z = 4;
	      self.camera.rotation.x = 45 * (Math.PI / 180);

        //Our main scene
        self.scene = new THREE.Scene();

        // Plane for testing in case there are some problems receiving or processing the server data
        var plane = new THREE.Mesh(new THREE.PlaneGeometry(100, 100), new THREE.MeshNormalMaterial());
       	plane.position.z = -100;
        plane.position.y = -100;
        plane.overdraw = true;

            
    	  var light = new THREE.AmbientLight(0x404040);


    self.updateCalls.push(function () {
        self.scene.add(light);
        self.scene.add(plane);
        //this.renderer.render(this.scene, this.camera);
    });

    return self;
}