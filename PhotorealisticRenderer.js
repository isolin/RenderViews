function PhotorealisticRenderer(domQuery) {

// definition of my class PhotorealisticRenderer


    var self = BasicThreeRenderer(domQuery);
        
    self.shadowMapEnabled = true;
    self.scene = null;


    var self.scene = new THREE.Scene();    

    //Plane for testing in case there are some problems receiving or processing the server data
       var plane = new THREE.Mesh(new THREE.PlaneGeometry(100, 100), new THREE.MeshNormalMaterial());
       plane.position.z = -100;
       plane.position.y = -100;
       plane.overdraw = true;
       self.scene.add(plane);
            
    var ambientLight = new THREE.AmbientLight(0x0c0c0c);
    	self.scene.add(ambientLight);

    var spotLight = new THREE.SpotLight (0xffffff);
    	self.scene.add( spotLight);     

  return self;
}