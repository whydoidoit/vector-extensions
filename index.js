

pc.Vec3.prototype.noY = function() {
    this.data[1] = 0
    return this
}

pc.Vec3.prototype.Y = function (v) {
    this.data[1] = v
    return this
}
pc.Vec3.prototype.X = function (v) {
    this.data[0] = v
    return this
}
pc.Vec3.prototype.Z = function (v) {
    this.data[2] = v
    return this
}


pc.Vec3.prototype.addY = function (v) {
    this.data[1] += v
    return this
}
pc.Vec3.prototype.addX = function (v) {
    this.data[0] += v
    return this
}
pc.Vec3.prototype.addZ = function (v) {
    this.data[2] += v
    return this
}
