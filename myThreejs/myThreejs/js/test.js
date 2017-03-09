var scene = new THREE.Scene();
var renderer = new THREE.WebGLRenderer({antialias:true});//生成渲染器对象（属性：抗锯齿效果为设置有效）
renderer.setClearColor(new THREE.Color(0xEEEEEE, 1.0));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMapEnabled = true;
/*添加物体*/
//添加球体
var aBall = new ball();
aBall.draw(scene);
//添加坐标轴
var axes = new THREE.AxisHelper(20);
scene.add(axes);
//添加参考中心
var center = new ball();
center.setPosition(new position(0,0,0));
center.setRadius(2);
center.draw(scene);
//添加灯光
var spotLight = new THREE.SpotLight(0xffffff);
spotLight.position.set(0, 60, 0);
spotLight.castShadow = true;
scene.add(spotLight);

// add the output of the renderer to the html element
document.getElementById("WebGL-output").appendChild(renderer.domElement);
var Camera = new camera();
Camera.setLookAt(aBall.getPosition());
renderer.render(scene,Camera.getCamera());