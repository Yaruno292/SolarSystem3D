let width = window.innerWidth;
let height = window.innerHeight;

let scene, camera, renderer, light, texture;

let sun = {};
let mercury = {};
let venus = {};
let earth = {};
let moon = {};
let mars = {};
let jupiter = {};
let saturn = {};

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(45,width/height,1,1000);
  camera.position.z = 40;
  camera.position.y = 10;
  camera.lookAt(0,0,0);
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(width,height);
  document.body.appendChild(renderer.domElement);

  //SUN
  sun.geometry = new THREE.SphereGeometry(2 /*16*/,32,32);
  sun.texture = new THREE.TextureLoader().load('../../textures/sunmap.jpg');
  sun.material = new THREE.MeshBasicMaterial({color:0xffff00,map:sun.texture});
  //sun.material = new THREE.MeshToonMaterial({color:0xffff00, wireframe:true});
  sun.mesh = new THREE.Mesh(sun.geometry,sun.material);

  //MERCURY
  mercury.geometry = new THREE.SphereGeometry(0.5,32,32);
  mercury.texture = new THREE.TextureLoader().load('../../textures/mercurymap.jpg');
  mercury.material = new THREE.MeshBasicMaterial({color:0xeeeeee,map:mercury.texture});
  //mercury.material = new THREE.MeshToonMaterial({color:0x5555ff, wireframe:true});
  mercury.mesh = new THREE.Mesh(mercury.geometry,mercury.material);
  mercury.mesh.position.set(0,0,0);
  mercury.phi = 0;
  mercury.theta = 0;
  mercury.r = 5;

  //VENUS
  venus.geometry = new THREE.SphereGeometry(1,32,32);
  venus.texture = new THREE.TextureLoader().load('../../textures/venusmap.jpg');
  venus.material = new THREE.MeshBasicMaterial({color:0xeeeeee,map:venus.texture});
  //venus.material = new THREE.MeshToonMaterial({color:0x5555ff, wireframe:true});
  venus.mesh = new THREE.Mesh(venus.geometry,venus.material);
  venus.mesh.position.set(0,0,0);
  venus.phi = 0;
  venus.theta = 0;
  venus.r = 9;


  //EARTH
  earth.geometry = new THREE.SphereGeometry(1,32,32);
  earth.texture = new THREE.TextureLoader().load('../../textures/earthmap1k.jpg');
  earth.material = new THREE.MeshBasicMaterial({color:0xeeeeee,map:earth.texture});
  //earth.material = new THREE.MeshToonMaterial({color:0x5555ff, wireframe:true});
  earth.mesh = new THREE.Mesh(earth.geometry,earth.material);
  earth.mesh.position.set(0,0,0);
  earth.phi = 0;
  earth.theta = 0;
  earth.r = 14;

  //MOON
  moon.geometry = new THREE.SphereGeometry(0.2,32,32);
  moon.texture = new THREE.TextureLoader().load('../../textures/moonmap1k.jpg');
  moon.material = new THREE.MeshBasicMaterial({color:0xeeeeee,map:moon.texture});
  //earth.material = new THREE.MeshToonMaterial({color:0x5555ff, wireframe:true});
  moon.mesh = new THREE.Mesh(moon.geometry,moon.material);
  moon.mesh.position.set(0,0,0);
  moon.phi = 0;
  moon.theta = 0;
  moon.r = 2;

  //MARS
  mars.geometry = new THREE.SphereGeometry(0.7,32,32);
  mars.texture = new THREE.TextureLoader().load('../../textures/mars_1k_color.jpg');
  mars.material = new THREE.MeshBasicMaterial({color:0xeeeeee,map:mars.texture});
  //mars.material = new THREE.MeshToonMaterial({color:0x5555ff, wireframe:true});
  mars.mesh = new THREE.Mesh(mars.geometry,mars.material);
  mars.mesh.position.set(0,0,0);
  mars.phi = 0;
  mars.theta = 0;
  mars.r = 20;

  //JUPITER
  jupiter.geometry = new THREE.SphereGeometry(3.5,32,32);
  jupiter.texture = new THREE.TextureLoader().load('../../textures/jupitermap.jpg');
  jupiter.material = new THREE.MeshBasicMaterial({color:0xeeeeee,map:jupiter.texture});
  //jupiter.material = new THREE.MeshToonMaterial({color:0x5555ff, wireframe:true});
  jupiter.mesh = new THREE.Mesh(jupiter.geometry,jupiter.material);
  jupiter.mesh.position.set(0,0,0);
  jupiter.phi = 0;
  jupiter.theta = 0;
  jupiter.r = 30;

  //SATURN
  saturn.geometry = new THREE.SphereGeometry(4,32,32);
  saturn.texture = new THREE.TextureLoader().load('../../textures/saturnmap.jpg');
  saturn.material = new THREE.MeshBasicMaterial({color:0xeeeeee,map:saturn.texture});
  //saturn.material = new THREE.MeshToonMaterial({color:0x5555ff, wireframe:true});
  saturn.mesh = new THREE.Mesh(saturn.geometry,saturn.material);
  saturn.mesh.position.set(0,0,0);
  saturn.phi = 0;
  saturn.theta = 0;
  saturn.r = 40;

  //LIGHT
  light = new THREE.PointLight( 0xffffff, 1, 0 );
  light.position.set( 0, 0, 0 );
  scene.add(light);

  //ADD
  scene.add(sun.mesh);
  scene.add(mercury.mesh);
  scene.add(venus.mesh);
  scene.add(earth.mesh);
  scene.add(moon.mesh);
  scene.add(mars.mesh);
  scene.add(jupiter.mesh);
  scene.add(saturn.mesh);

  animate();
}

function animate() {
  requestAnimationFrame(animate);

  //sun
  sun.mesh.rotation.y += 0.01;

  //mercury
  mercury.mesh.position.x = mercury.r*Math.sin(mercury.theta)*Math.cos(mercury.phi);
  mercury.mesh.position.y = mercury.r*Math.sin(mercury.theta)*Math.sin(mercury.phi);
  mercury.mesh.position.z = mercury.r*Math.cos(mercury.theta);
  mercury.theta -= 0.1;
  mercury.mesh.rotation.y += 0.1;

  //venus
  venus.mesh.position.x = venus.r*Math.sin(venus.theta)*Math.cos(venus.phi);
  venus.mesh.position.y = venus.r*Math.sin(venus.theta)*Math.sin(venus.phi);
  venus.mesh.position.z = venus.r*Math.cos(venus.theta);
  venus.theta -= 0.05;
  venus.mesh.rotation.y += 0.05;

  //earth
  earth.mesh.position.x = earth.r*Math.sin(earth.theta)*Math.cos(earth.phi);
  earth.mesh.position.y = earth.r*Math.sin(earth.theta)*Math.sin(earth.phi);
  earth.mesh.position.z = earth.r*Math.cos(earth.theta);
  earth.theta -= 0.025;
  earth.mesh.rotation.y += 0.025;

  //moon
  moon.mesh.position.x = moon.r*Math.sin(moon.theta)*Math.cos(moon.phi) + earth.mesh.position.x;
  moon.mesh.position.y = moon.r*Math.sin(moon.theta)*Math.sin(moon.phi) + earth.mesh.position.y;
  moon.mesh.position.z = moon.r*Math.cos(moon.theta) + earth.mesh.position.z;
  moon.theta -= 0.1;
  moon.phi += 0.01;
  moon.mesh.rotation.y += 0.01;

  //mars
  mars.mesh.position.x = mars.r*Math.sin(mars.theta)*Math.cos(mars.phi);
  mars.mesh.position.y = mars.r*Math.sin(mars.theta)*Math.sin(mars.phi);
  mars.mesh.position.z = mars.r*Math.cos(mars.theta);
  mars.theta -= 0.0125;
  mars.mesh.rotation.y += 0.0125;

  //jupiter
  jupiter.mesh.position.x = jupiter.r*Math.sin(jupiter.theta)*Math.cos(jupiter.phi);
  jupiter.mesh.position.y = jupiter.r*Math.sin(jupiter.theta)*Math.sin(jupiter.phi);
  jupiter.mesh.position.z = jupiter.r*Math.cos(jupiter.theta);
  jupiter.theta -= 0.00625;
  jupiter.mesh.rotation.y += 0.00625;

  //saturn
  saturn.mesh.position.x = saturn.r*Math.sin(saturn.theta)*Math.cos(saturn.phi);
  saturn.mesh.position.y = saturn.r*Math.sin(saturn.theta)*Math.sin(saturn.phi);
  saturn.mesh.position.z = saturn.r*Math.cos(saturn.theta);
  saturn.theta -= 0.003125;
  saturn.mesh.rotation.y += 0.003125;

  camera.lookAt(sun.mesh.position);
  renderer.render(scene,camera);
}

init();
