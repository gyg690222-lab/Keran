class Face {
    constructor() {
        this.group = new THREE.Group();
        this.mouthOpenValue = 0;
        this.headRotation = 0;
        
        this.createHead();
        this.createFace();
        this.createEyes();
        this.createNose();
        this.createMouth();
        this.createEars();
    }

    createHead() {
        // Main head sphere
        const headGeometry = new THREE.SphereGeometry(2, 32, 32);
        const headMaterial = new THREE.MeshPhongMaterial({
            color: 0xf4a460,
            shininess: 100
        });
        this.head = new THREE.Mesh(headGeometry, headMaterial);
        this.head.castShadow = true;
        this.head.receiveShadow = true;
        this.group.add(this.head);
    }

    createFace() {
        // Face texture/plane (optional enhancement)
        const faceGeometry = new THREE.SphereGeometry(1.98, 32, 32);
        const faceMaterial = new THREE.MeshPhongMaterial({
            color: 0xf9d5b8,
            emissive: 0x200000,
        });
    }

    createEyes() {
        const eyeGeometry = new THREE.SphereGeometry(0.3, 16, 16);
        const eyeMaterial = new THREE.MeshPhongMaterial({
            color: 0xffffff,
            shininess: 100
        });

        // Left eye
        this.leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
        this.leftEye.position.set(-0.8, 0.6, 1.8);
        this.group.add(this.leftEye);

        // Right eye
        this.rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
        this.rightEye.position.set(0.8, 0.6, 1.8);
        this.group.add(this.rightEye);

        // Iris
        const irisGeometry = new THREE.SphereGeometry(0.15, 16, 16);
        const irisMaterial = new THREE.MeshPhongMaterial({
            color: 0x4a90e2,
            shininess: 200
        });

        this.leftIris = new THREE.Mesh(irisGeometry, irisMaterial);
        this.leftIris.position.set(-0.8, 0.6, 2.05);
        this.group.add(this.leftIris);

        this.rightIris = new THREE.Mesh(irisGeometry, irisMaterial);
        this.rightIris.position.set(0.8, 0.6, 2.05);
        this.group.add(this.rightIris);

        // Pupils
        const pupilGeometry = new THREE.SphereGeometry(0.08, 16, 16);
        const pupilMaterial = new THREE.MeshPhongMaterial({
            color: 0x000000
        });

        this.leftPupil = new THREE.Mesh(pupilGeometry, pupilMaterial);
        this.leftPupil.position.set(-0.8, 0.6, 2.15);
        this.group.add(this.leftPupil);

        this.rightPupil = new THREE.Mesh(pupilGeometry, pupilMaterial);
        this.rightPupil.position.set(0.8, 0.6, 2.15);
        this.group.add(this.rightPupil);
    }

    createNose() {
        const noseGeometry = new THREE.ConeGeometry(0.3, 0.8, 8);
        const noseMaterial = new THREE.MeshPhongMaterial({
            color: 0xe8b8a0
        });
        this.nose = new THREE.Mesh(noseGeometry, noseMaterial);
        this.nose.position.set(0, 0.2, 1.8);
        this.nose.rotation.x = Math.PI / 2;
        this.group.add(this.nose);
    }

    createMouth() {
        // Mouth container
        this.mouthGroup = new THREE.Group();
        
        // Upper lip
        const upperLipGeometry = new THREE.BoxGeometry(0.8, 0.15, 0.2);
        const lipMaterial = new THREE.MeshPhongMaterial({
            color: 0xd84a4a
        });
        this.upperLip = new THREE.Mesh(upperLipGeometry, lipMaterial);
        this.upperLip.position.set(0, -0.3, 1.7);
        this.mouthGroup.add(this.upperLip);

        // Lower lip
        this.lowerLip = new THREE.Mesh(upperLipGeometry, lipMaterial);
        this.lowerLip.position.set(0, -0.6, 1.7);
        this.mouthGroup.add(this.lowerLip);

        // Mouth interior (tongue/cavity)
        const mouthInteriorGeometry = new THREE.BoxGeometry(0.6, 0.3, 0.3);
        const mouthInteriorMaterial = new THREE.MeshPhongMaterial({
            color: 0x8b0000
        });
        this.mouthInterior = new THREE.Mesh(mouthInteriorGeometry, mouthInteriorMaterial);
        this.mouthInterior.position.set(0, -0.45, 1.85);
        this.mouthGroup.add(this.mouthInterior);

        this.group.add(this.mouthGroup);
    }

    createEars() {
        const earGeometry = new THREE.SphereGeometry(0.5, 16, 16);
        const earMaterial = new THREE.MeshPhongMaterial({
            color: 0xf4a460
        });

        // Left ear
        this.leftEar = new THREE.Mesh(earGeometry, earMaterial);
        this.leftEar.position.set(-2, 0.2, 0);
        this.leftEar.scale.set(0.8, 1.2, 0.6);
        this.group.add(this.leftEar);

        // Right ear
        this.rightEar = new THREE.Mesh(earGeometry, earMaterial);
        this.rightEar.position.set(2, 0.2, 0);
        this.rightEar.scale.set(0.8, 1.2, 0.6);
        this.group.add(this.rightEar);
    }

    setMouthOpen(value) {
        this.mouthOpenValue = value;
        // Lower lip moves down when mouth opens
        this.lowerLip.position.y = -0.6 - (value * 0.8);
        // Mouth interior becomes more visible
        this.mouthInterior.position.y = -0.45 - (value * 0.3);
        this.mouthInterior.scale.y = 1 + value;
    }

    setHeadRotation(value) {
        this.headRotation = value;
        // Rotate entire head group
        this.group.rotation.y = value * 0.5; // 0.5 radians max rotation
    }
}