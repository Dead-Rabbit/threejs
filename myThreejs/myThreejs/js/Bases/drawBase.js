/*
作为基础物体的绘制的基类
 */
function drawBase(){
    this.position;
    this.core;
    this.geometry;
    this.meterial;
}
drawBase.prototype.setPosition = function(position) {
    this.position = position;
};
drawBase.prototype.getCore = function() {
    return this.core;
};
drawBase.prototype.getPosition = function(){
    return this.position;
}