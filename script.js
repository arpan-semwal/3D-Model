//// Set up the basic scene, camera, and renderer
//const scene = new THREE.Scene();
//const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//const renderer = new THREE.WebGLRenderer();
//renderer.setSize(window.innerWidth, window.innerHeight);
//document.getElementById('cube-container').appendChild(renderer.domElement);

//// Create the geometry for the cube
//const geometry = new THREE.BoxGeometry();

//// Load textures for each face of the cube
//const textureLoader = new THREE.TextureLoader();
//const materials = [
//    new THREE.MeshBasicMaterial({ map: textureLoader.load('./image/agriculture.jpg') }),
//    new THREE.MeshBasicMaterial({ map: textureLoader.load('./image/air.jpg') }),
//    new THREE.MeshBasicMaterial({ map: textureLoader.load('./image/food.jpg') }),
//    new THREE.MeshBasicMaterial({ map: textureLoader.load('./image/resources.jpg') }),
//    new THREE.MeshBasicMaterial({ map: textureLoader.load('./image/water.jpg') }),
//    new THREE.MeshBasicMaterial({ color: 0xffffff }) // You can replace this with another icon or color
//];

//// Create the cube with the textures applied
//const cube = new THREE.Mesh(geometry, materials);
//scene.add(cube);

//// Position the camera so the cube is visible
//camera.position.z = 5;

//// Animation loop to rotate the cube and render the scene
//function animate() {
//    requestAnimationFrame(animate);

//    cube.rotation.x += 0.01;
//    cube.rotation.y += 0.01;

//    renderer.render(scene, camera);
//}

//// Call the animate function to start the loop
//animate();

//// Add basic interactivity - highlight a face when clicked
//const raycaster = new THREE.Raycaster();
//const mouse = new THREE.Vector2();

//window.addEventListener('click', (event) => {
//    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

//    raycaster.setFromCamera(mouse, camera);

//    // Check if a face of the cube was clicked
//    const intersects = raycaster.intersectObject(cube);
//    if (intersects.length > 0) {
//        intersects[0].object.material.color.set(0xff0000); // Highlight the clicked face in red
//    }
//});

//// Handle window resize to maintain responsiveness
//window.addEventListener('resize', () => {
//    camera.aspect = window.innerWidth / window.innerHeight;
//    camera.updateProjectionMatrix();
//    renderer.setSize(window.innerWidth, window.innerHeight);
//});


// Set up the basic scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('cube-container').appendChild(renderer.domElement);

// Create the geometry for the cube
const geometry = new THREE.BoxGeometry();

// Load textures for each face of the cube
const textureLoader = new THREE.TextureLoader();
const materials = [
    new THREE.MeshBasicMaterial({ map: textureLoader.load('./image/agriculture.jpg') }),
    new THREE.MeshBasicMaterial({ map: textureLoader.load('./image/air.jpg') }),
    new THREE.MeshBasicMaterial({ map: textureLoader.load('./image/food.jpg') }),
   new THREE.MeshBasicMaterial({ map: textureLoader.load('./image/resources.jpg') }),
    new THREE.MeshBasicMaterial({ map: textureLoader.load('./image/water.jpg') }),
    new THREE.MeshBasicMaterial({ color: 0xffffff }) // You can replace this with another icon or color
];

// Create the cube with the textures applied
const cube = new THREE.Mesh(geometry, materials);
scene.add(cube);

// Position the camera so the cube is visible
camera.position.z = 5;

// Add mouse movement event listener
let mouseX = 0, mouseY = 0;

document.addEventListener('mousemove', (event) => {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
});

// Animation loop to rotate the cube based on mouse movement
function animate() {
    requestAnimationFrame(animate);

    // Rotate the cube based on mouse position
    cube.rotation.x = mouseY * Math.PI;
    cube.rotation.y = mouseX * Math.PI;

    renderer.render(scene, camera);
}

// Call the animate function to start the loop
animate();

// Add basic interactivity - highlight a face when clicked
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

window.addEventListener('click', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    // Check if a face of the cube was clicked
    const intersects = raycaster.intersectObject(cube);
    if (intersects.length > 0) {
        intersects[0].object.material.color.set(0xff0000); // Highlight the clicked face in red
    }
});

// Handle window resize to maintain responsiveness
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
