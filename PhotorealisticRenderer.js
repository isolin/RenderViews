  function PhotorealisticRenderer(domQuery) {

// definition of my class PhotorealisticRenderer


    var self = BasicThreeRenderer(domQuery);
        
    self.renderer = null;
    self.scene = null;
    self.camera = null;

    var DirLight, SpotLight, stats;
    var cube;
      
    init();
    animate();  
 
    function init() {
          //Sets the renderer window size to the size of the container where it will be attached
          this.renderer.setSize(this.container.innerWidth(), this.container.innerHeight());
          this.container.append(this.renderer.domElement); //attaches the <canvas> tag for the renderer as a child to the container element

          //Camera initialization
          this.camera = new THREE.PerspectiveCamera(50, this.container.innerWidth() / this.container.innerHeight(), 0.1, 1000); //field of view angle, aspect ratio, near clipping plane, far clipping plane
          //position of the camera
          this.camera.position.set( 0, 15, 35 );


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

          //LIGHTS
            
          var ambient = new THREE.AmbientLightt( 0x404040 );
          this.scene.add( ambient );

          spotLight = new THREE.SpotLight( 0xffffff );
          spotLight.position.set( 10, 10, 5 );
          spotLight.castShadow = true;
          spotLight.shadowCameraNear = 8;
          spotLight.shadowCameraFar = 30;
          spotLight.shadowDarkness = 0.5;
          spotLight.shadowCameraVisible = true;
          spotLight.shadowMapWidth = 1024;
          spotLight.shadowMapHeight = 1024;
          spotLight.name = 'Spot Light';
          this.scene.add( spotLight );

          dirLight = new THREE.DirectionalLight( 0xffffff, 1 );
          dirLight.position.set( 0, 10, 0 );
          dirLight.castShadow = true;
          dirLight.shadowCameraNear = 0.01;
          dirLight.shadowCameraFar = 10;
          dirLight.shadowCameraRight = 15;
          dirLight.shadowCameraLeft = -15;
          dirLight.shadowCameraTop  = 15;
          dirLight.shadowCameraBottom = -15;
          dirLight.shadowDarkness = 0.5;
          dirLight.shadowCameraVisible = true;
          dirLight.shadowMapWidth = 1024;
          dirLight.shadowMapHeight = 1024;
          dirLight.name = 'Dir. Light';
          this.scene.add( dirLight );



          var geometry = new THREE.BoxGeometry( 3, 3, 3 );

          var material = new THREE.MeshPhongMaterial( {
            color: 0xff0000,
            shininess: 150,
            specular: 0x222222,
            shading: THREE.SmoothShading,
          } );

          cube = new THREE.Mesh( geometry, material );
          cube.position.set( 8, 3, 8 );
          cube.castShadow = true;
          cube.receiveShadow = true;
          this.scene.add( cube );

          var geometry = new THREE.BoxGeometry( 10, 0.15, 10 );

          var material = new THREE.MeshPhongMaterial( {
              color: 0xa0adaf,
              shininess: 150,
              specular: 0xffffff,
              shading: THREE.SmoothShading
          } );

          var ground = new THREE.Mesh( geometry, material );
          ground.scale.multiplyScalar( 3 );
          ground.castShadow = false;
          ground.receiveShadow = true;
          this.scene.add( ground );

    }
          
    function animate() {

        requestAnimationFrame( animate );
        render();

    }

    function render() {
          var time = Date.now() * 0.0005;

          if ( mesh ) mesh.rotation.y -= 0.01;


          renderer.render( scene, camera );

    }
    return self
}
