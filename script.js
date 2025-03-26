const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('three-container').appendChild(renderer.domElement);

camera.position.z = 5;

// Doors
const doorGeometry = new THREE.BoxGeometry(1.5, 3, 0.1);
const leftDoorMaterial = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('wood-texture.jpg') });
const rightDoorMaterial = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('wood-texture.jpg') });

const leftDoor = new THREE.Mesh(doorGeometry, leftDoorMaterial);
const rightDoor = new THREE.Mesh(doorGeometry, rightDoorMaterial);

leftDoor.position.x = -0.85;
rightDoor.position.x = 0.85;
scene.add(leftDoor, rightDoor);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

// Button interaction
document.getElementById('openDoors').addEventListener('click', () => {
  let frame = 0;
  const interval = setInterval(() => {
    if (frame < 100) {
      leftDoor.position.x -= 0.02;
      rightDoor.position.x += 0.02;
      frame++;
    } else {
      clearInterval(interval);
      document.getElementById('details').classList.remove('hidden');
      document.querySelector('.button-container').style.display = 'none';
    }
  }, 16);
});