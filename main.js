let scene, camera, renderer, face;

function init() {
    // Scene setup
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x667eea);

    // Camera setup
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / (window.innerHeight * 0.8), 0.1, 1000);
    camera.position.z = 5;

    // Renderer setup
    const container = document.getElementById('canvas-container');
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight * 0.8);
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 7);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0xff6b6b, 0.5);
    pointLight.position.set(-5, 3, 5);
    scene.add(pointLight);

    // Create face
    face = new Face();
    scene.add(face.group);

    // Event listeners
    document.getElementById('mouthSlider').addEventListener('input', (e) => {
        const value = parseFloat(e.target.value);
        face.setMouthOpen(value);
        document.getElementById('mouthValue').textContent = value === 0 ? 'Closed' : `${Math.round(value * 100)}%`;
    });

    document.getElementById('headSlider').addEventListener('input', (e) => {
        const value = parseFloat(e.target.value);
        face.setHeadRotation(value);
        const positions = ['Left', 'Center', 'Right'];
        const index = value < -0.3 ? 0 : value > 0.3 ? 2 : 1;
        document.getElementById('headValue').textContent = positions[index];
    });

    // Handle window resize
    window.addEventListener('resize', onWindowResize);

    // Start animation
    animate();
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / (window.innerHeight * 0.8);
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight * 0.8);
}

init();