import * as THREE from 'three';
//导入轨道控制器
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

/****使用控制器查看3D物体 */

//目标：控制3D物体缩放

//1、创建场景
const scene = new THREE.Scene();

//2、创建相机  //threejs.org/examples/?q=camera#webgl_camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / innerHeight,
  0.1,
  1000
);

//设置相机位置
camera.position.set(0, 0, 10);

scene.add(camera);

//添加物体
//创建几何体
const cubeGeometry = new THREE.BoxGeometry();
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
//根据几何体和材质创建物体
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

//修改物体的位置
// cube.position.set(5, 0, 0);
// cube.position.x=5

//缩放
// cube.scale.set(3, 2, 1);
//cube.scale.x = 5;

//旋转
cube.rotation.set(Math.PI / 4, 0, 0, 'XZY');

//将几何体添加到场景中
scene.add(cube);

//初始化渲染器
const renderer = new THREE.WebGLRenderer();

//设置渲染的尺寸大小
renderer.setSize(window.innerWidth, window.innerHeight);

//将webgl渲染的canvas内容添加到body
document.body.appendChild(renderer.domElement);

//使用渲染器，通过相机将场景渲染进来
// renderer.render(scene, camera);

//创建轨道控制器
const controls = new OrbitControls(camera, renderer.domElement);

//
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

function render(time) {
  // cube.position.x += 0.01;
  // cube.rotation.x += 0.01;
  // if (cube.position.x > 5) {
  //   cube.position.x = 0;
  // }

  //较合理
  let t = (time / 1000) % 5;
  cube.position.x = t * 1;

  renderer.render(scene, camera);
  requestAnimationFrame(render);
}

render();
