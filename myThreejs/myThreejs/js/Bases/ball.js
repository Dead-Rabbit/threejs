function ball(){
    drawBase.call(this);

    this.id = "";
    this.name = "";
    this.color = "";
    this.position = new position(20,0,0);//当前position
    this.nextPosition ;
    this.radius = 4;
}
(function(){
    var Super = function(){};
    Super.prototype = drawBase.prototype;
    ball.prototype = new Super();
})();
ball.prototype.getPosition = function() {
    return this.position;
};
ball.prototype.setPosition = function(position) {
    this.position = position;
};
ball.prototype.setRadius = function(radius) {
    this.radius = radius;
};
//更新服务器接收位置
ball.prototype.setNextPosition = function(position) {
    this.nextPosition = position;
};
//添加到scene
ball.prototype.draw = function(scene) {
    this.geometry = new THREE.SphereGeometry(this.radius, 100, 100);
    this.material = new THREE.MeshPhongMaterial({color: 0xa9a9a9});
    this.core = new THREE.Mesh(this.geometry,this.material);
    this.core.position.x = this.position.getX();
    this.core.position.y = this.position.getY();
    this.core.position.z = this.position.getZ();
    this.core.castShadow = true;
    scene.add(this.core);
};