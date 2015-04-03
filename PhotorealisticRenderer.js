function PhotorealisticRenderer(domQuery) {

// definition of my class PhotorealisticRenderer


    var self = BasicThreeRenderer(domQuery);
    
    self.initCalls.push( function (){
        this.projector = new THREE.Projector();

      });    

      var renderer = self.isInitialized();
      renderer.shadowMapEnabled = true;    
    // set the renderer
        //self.renderer = new THREE.WebGLRenderer();
        //self.renderer.setClearColor(0xffffff, 1); //white
        //self.renderer.shadowMapEnabled = true;      

        //Camera initialization
        //self.camera = new THREE.PerspectiveCamera(50, 1920/1080, 0.1, 1000); //field of view angle, aspect ratio, near clipping plane, far clipping plane
        //position of the camera
        //self.camera.position.y = 5;
	      //self.camera.position.z = 4;
	      //self.camera.rotation.x = 15 * (Math.PI / 180);

        //Our main scene
        self.scene = new THREE.Scene();

        // Plane for testing in case there are some problems receiving or processing the server data
        var plane = new THREE.Mesh(new THREE.PlaneGeometry(10, 10), new THREE.MeshNormalMaterial());
       	plane.position.z = -50;
        plane.position.y = -50;
        plane.overdraw = true;

        //var ambiColor = "#0c0c0c";            
    	  var light = new THREE.AmbientLight(0x404040);
        var spotLight = new THREE.SpotLight( 0xffffff );
        spotLight.position.set( -40, 60, -10 );


    self.updateCalls.push(function () {
        self.scene.add( light );
        //self.scene.add(light);
        self.scene.add(plane);
        //self.camera.rotation.x = 15 * (Math.PI / 180);
        //this.renderer.render(this.scene, this.camera);
    });

    return self;
}