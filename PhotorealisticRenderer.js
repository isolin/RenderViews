function PhotorealisticRenderer(domQuery) {

// definition of my class PhotorealisticRenderer


    var self = BasicThreeRenderer(domQuery);
        
    self.renderer = null;
    self.scene = null;
    self.camera = null;
    self.shadowMapEnabled = true;
        
 

    //Sets the renderer window size to the size of the container where it will be attached
      this.renderer.setSize(this.container.innerWidth(), this.container.innerHeight());
      this.container.append(this.renderer.domElement); //attaches the <canvas> tag for the renderer as a child to the container element

    //Camera initialization
      this.camera = new THREE.PerspectiveCamera(50, this.container.innerWidth() / this.container.innerHeight(), 0.1, 1000); //field of view angle, aspect ratio, near clipping plane, far clipping plane
      //position of the camera
      this.camera.position.y = 5;
	  this.camera.position.z = 4;
	  this.camera.rotation.x = 45 * (Math.PI / 180);


      //Background of the canvas
        this.renderer.setClearColorHex(0xffffff, 1); //white
        //Our main scene
        this.scene = new THREE.Scene();

      //Plane for testing in case there are some problems receiving or processing the server data
         var plane = new THREE.Mesh(new THREE.PlaneGeometry(10, 10), new THREE.MeshNormalMaterial());
       	 plane.position.z = -100;
         plane.position.y = -100;
         plane.overdraw = true;
         this.scene.add(plane);
            
            
      THREE.AmbientLight = function ( color ) {
	     THREE.Light.call( this, color );
	     this.type = 'AmbientLight';
      };

      THREE.AmbientLight.prototype = Object.create( THREE.Light.prototype );
         THREE.AmbientLight.prototype.clone = function () {
         var light = new THREE.AmbientLight();
         THREE.Light.prototype.clone.call( this, light );
         return light;
        }
    return self;
}