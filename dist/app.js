var camera, scene, renderer, gui, composer, group, models = ["apple", "starfruit"],
    geomData = [],
    matData = [],
    mouse = new THREE.Vector2,
    rotX = 0, rotY = 0, posX = 0, posY = 0;

function resize() {
    camera.aspect = window.innerWidth / window.innerHeight, camera.updateProjectionMatrix(), renderer.setSize(window.innerWidth, window.innerHeight)
}

function init() {
    var e = document.getElementById("container");
    (renderer = new THREE.WebGLRenderer({
        antialias: !0
    })).shadowMap.enabled = !0, renderer.shadowMap.type = THREE.PCSoftShadowMap, renderer.setPixelRatio(window.devicePixelRatio), renderer.setSize(window.innerWidth, window.innerHeight), renderer.setClearColor(`#000000`), e.appendChild(renderer.domElement), (camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 1, 1e3)).position.set(0, 0, 75), scene = new THREE.Scene;
    var t = new THREE.HemisphereLight(16575228, 0, .8),
        a = new THREE.DirectionalLight(16777215, .5);
    a.position.set(150, 75, 150);
    var n = a.clone();
    n.castShadow = !1, n.intensity = .2, n.position.set(-150, 75, -150);
    var o = a.clone();
    o.castShadow = !1, o.intensity = .1, o.position.set(0, 125, 0), scene.add(t), scene.add(a), scene.add(n), scene.add(o), geomData.push(new THREE.SphereGeometry(1, 64, 64)), geomData.push(new THREE.BoxGeometry(1, 1, 1)), geomData.push(new THREE.ConeGeometry(1, 1, 32)), geomData.push(new THREE.TetrahedronGeometry(1)), geomData.push(new THREE.TorusKnotGeometry(1, .4, 64, 64)), matData.push(new THREE.MeshStandardMaterial({
        color: "#ff8a24",
        emissive: "#ffd952",
        metalness: .5,
        flatShading: !1,
        roughness: .06
    })), matData.push(new THREE.MeshStandardMaterial({
        color: 6058235,
        emissive: 1193390,
        roughness: 0,
        flatShading: !1,
        metalness: 0
    })), matData.push(new THREE.MeshStandardMaterial({
        color: "#f24138",
        emissive: "#f255a1",
        roughness: .16,
        flatShading: !1,
        metalness: 0
    })), matData.push(new THREE.MeshStandardMaterial({
        color: "#b660f0",
        emissive: "#5d55f2",
        metalness: .5,
        flatShading: !1,
        roughness: .06
    }));
    group = new THREE.Group;
    for (var r = 0; r < 20; r++) {
        var s = geomData[Math.floor(Math.random() * geomData.length)],
            i = matData[Math.floor(Math.random() * matData.length)],
            d = new THREE.Mesh(s, i),
            m = 4 + 2 * Math.random();
        d.scale.set(m, m, m), d.position.set(5*Math.random(6584) - 2.5, 5*Math.random(1984) - 2.5, 4*Math.random(5468) - 2).normalize(), d.position.multiplyScalar(200 * Math.random()), d.rotation.set(2 * Math.random(), 2 * Math.random(), 2 * Math.random()), group.add(d)
    }
    scene.add(group), window.addEventListener("resize", resize)
    e.addEventListener('mousemove', getRotation)
}

function update() {
    group.rotation.y += .0015+rotX, group.rotation.z += .001+rotY
    group.position.x += posX, group.position.y += posY
}

function animate() {
    update(), renderer.render(scene, camera), window.requestAnimationFrame(animate)
}

function getRotation(e) {
    rotX = e.movementX / 50000
    rotY = e.movementY / 50000
    posX = e.movementX / 100
    posY = -e.movementY / 100
}

THREE.DefaultLoadingManager.onLoad = function() {
    init(), animate()
};
for (var loader = new THREE.JSONLoader, i = 0; i < models.length; i++) {
    var path = "assets/" + models[i] + ".json";
    loader.load(path, function(e, t) {
        geomData.push(e)
    })
}
var projectsPage = document.getElementById("projectsPage"),
    projectsPageOn = 0,
    ui = document.getElementsByClassName("ui"),
    container = document.getElementById("container"),
    about = document.getElementById("about"),
    who = document.getElementById("who"),
    projectsLink = document.getElementById("projectsLink"),
    years = document.getElementsByClassName("year");

function toggleProjectsPage() {
    var e = projectsLink.getElementsByClassName("plus")[0].getElementsByTagName("div");
    projectsPageOn ? (projectsLink.style.color = "#222428", e[0].style.backgroundColor = "#222428", e[1].style.backgroundColor = "#222428", projectsPage.style.left = "-100%", projectsPage.style.opacity = 0, projectsPageOn = 0) : (projectsPage.style.left = 0, projectsPage.style.opacity = 1, projectsPageOn = 1, projectsLink.style.color = "#F8FBFC", e[0].style.backgroundColor = "#F8FBFC", e[1].style.backgroundColor = "#F8FBFC")
}
document.getElementById("projectsLink").addEventListener("mousedown", toggleProjectsPage);