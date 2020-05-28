import * as SceneSetup from './js/sceneSetup';
import * as Mesh from './js/box/mesh';

/* Define variables */
let camera, scene, mesh, renderer;

const init = () => {
    /* Define camera */
    camera = SceneSetup.camera(window);

    /* Configurate camera */
    camera.position.z = 1;

    /* Define scene */
    scene = SceneSetup.scene();

    /* Define mesh */
    mesh = Mesh.mesh();

    /* Add mesh to scene */
    scene.add(mesh);

    /* Define renderer */
    renderer = SceneSetup.renderer();

    /* Configurate renderer */
    renderer.setSize(window.innerWidth, window.innerHeight);

    /* Append element */
    document.body.appendChild(renderer.domElement);
};

const animate = () => {
    requestAnimationFrame(animate);

    /* Configurate rotation of mesh for each tick */
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;

    /* Render Three scene */
    renderer.render(scene, camera);
};

init();
animate();
/* import { MyScene } from './js/MyScene';
import WebpackLogo from './images/webpack-logo.svg';
import './styles/index.scss';

// Create SVG logo node
const logo = document.createElement('img');
logo.src = WebpackLogo;

// Create heading node
const greeting = document.createElement('h1');
greeting.textContent = MyScene();

// Append SVG and heading nodes to the DOM
const app = document.querySelector('#root');
app.append(logo, greeting);
 */
