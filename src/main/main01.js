import * as THREE from 'three';

/****使用控制器查看3D物体 */

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
//将几何体添加到场景中
scene.add(cube);

//初始化渲染器
const renderer = new THREE.WebGLRenderer();

//设置渲染的尺寸大小
renderer.setSize(window.innerWidth, window.innerHeight);

//将webgl渲染的canvas内容添加到body
document.body.appendChild(renderer.domElement);

//使用渲染器，通过相机将场景渲染进来
renderer.render(scene, camera);
