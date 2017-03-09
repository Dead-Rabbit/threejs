function position(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
}
position.prototype.getX = function() {
    return this.x;
};
position.prototype.getY = function() {
    return this.y;
};
position.prototype.getZ = function() {
    return this.z;
};
