import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as THREE from 'three';


class Header extends Component {
  constructor(props) {
  super(props)

  this.Material = this.Material.bind(this)
  this.renderScene = this.renderScene.bind(this)
  this.animate = this.animate.bind(this)
  }

  componentDidMount(){

        const Colors = {
      	red:0xf25346,
      	yellow:0xedeb27,
      	white:0xd8d0d1,
      	brown:0x59332e,
      	pink:0xF5986E,
      	brownDark:0x23190f,
      	blue:0x68c3c0,
      	green:0x458248,
      	purple:0x551A8B,
      	lightgreen:0x629265,
        darkgreen:0x3F3F3F,
        grey:0x4F4F4E,
        black:0x000000,
      };

          const height = window.innerHeight;
          const width = window.innerHeight;

          //ADD SCENE
          this.scene = new THREE.Scene()

          //ADD fog
          this.scene.fog = new THREE.Fog(0xf7d9aa, 100, 950);

          //ADD CAMARA
      	   this.camera = new THREE.PerspectiveCamera(
      		 this.fieldOfView = 60,
      		 this.aspectRatio = width/height,
      		 this.nearPlane = 1,
      		 this.farPlane = 10000,
         );

          //Camera posicion
          this.camera.position.x = 0;
      	  this.camera.position.y = 150;
      	  this.camera.position.z = 100;

          //render
          this.renderer = new THREE.WebGLRenderer ({alpha: true,
      		antialias:true
      	});
          this.renderer.aspectRatio (width, height);
          this.renderer.shadowMap.enabled = true;

        }
          componentWillUnmount(){
           ReactDOM.render(<world />, document.getElementById('world'));
           this.mount.removedChild (renderer.domElement)
         }

         change = () => {
        shandleWindowResize.window.addEventListener('resize', handleWindowResize, false);
        }

          thishandleWindowResize() {
        	 this.height = window.innerHeight;
        	 this.width = window.innerWidth;
        	 this.renderer.setSize(width, height);
        	 this.camera.aspect = width / height;
        	 this.camera.updateProjectionMatrix();
         }

      hemispshereLight;
      shadowLight ;

      createLights(){

        // Gradient coloured light - Sky, Ground, Intensity
      	this.hemisphereLight = new THREE.HemisphereLight(0x252525,0x8C8C8A, .2)

      	// Parallel rays
      	this.shadowLight = new THREE.DirectionalLight(0xffffff);

      	this.shadowLight.position.set(0,300, 50);
      	this.shadowLight.castShadow = true;

      	// define the visible area of the projected shadow

        this.shadowLight.shadow.camera.left = -650;
      	this.shadowLight.shadow.camera.right = 650;
      	this.shadowLight.shadow.camera.top = 650;
      	this.shadowLight.shadow.camera.bottom = -650;
      	this.shadowLight.shadow.camera.near = 1;
      	this.shadowLight.shadow.camera.far = 1000;

      	// Shadow map size

      	this.shadowLight.shadow.mapSize.width = 1000;
      	this.shadowLight.shadow.mapSize.height = 2048;

      	// Add the lights to the scene
       scene.add(hemisphereLight);

        scene.add(shadowLight);

      }

    //  animate = () => {
      //   this.renderScene()
         //this.frameId = window.requestAnimationFrame(this.animate)


       //renderScene = () => {
      //  this.renderer.render(this.scene, this.camera)



      	//rotate on the x axis

      land = () => {
      geom.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI/2));
    }
    Land = function(){

    this.mesh = new THREE.Object3D();

    const geom = new THREE.CylinderGeometry(600,600,1700,40,10);
    //create a mesh of the object

      mesh = new THREE.Mesh(geom, mat);

    //receive shadows

      mesh.receiveShadow = true;
}

    render(){
        return(
          <div
      style={{ width: '400px', height: '400px' }}
      ref={(mount) => { this.mount = mount }}
    />
        	//create a material
            //createLand =
            //land = new Land();
            //land.mesh.position.y = offSet;
            //scene.add(this.land.mesh); />


        	  //mat = new THREE.MeshPhongMaterial({
        		//color: Colors.red,
        		//shading:THREE.FlatShading,


        )
      }
}





export default Header;
