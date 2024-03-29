class Vector2 {
  constructor(dx,dy) {
    this.dx=dx;
    this.dy=dy;
    this._r = Math.sqrt(this.dx*this.dx + this.dy * this.dy);
    this._angle = Math.atan2(this.dy,this.dx);
  }

  get dx(){
    return this._dx;
  }

  get dy(){
    return this._dy;
  }

  set dx(dx_in){
    this._dx = dx_in;
    this._r = Math.sqrt(this.dx*this.dx + this.dy * this.dy);
    this._angle = Math.atan2(this.dy,this.dx);
  }

  set dy(dy_in){
    this._dy = dy_in;
    this._r = Math.sqrt(this.dx*this.dx + this.dy * this.dy);
    this._angle = Math.atan2(this.dy,this.dx);
  }

  get r(){
    return Math.sqrt(this.dx*this.dx + this.dy * this.dy);
  }

  get angle(){
    return Math.atan2(this.dy,this.dx);
  }

  set angle(angle_in){
    this._angle = angle_in;
    this._dx = this._r * Math.cos(this._angle);
    this._dy = this._r * Math.sin(this._angle);
  }

  set r(r_in){
    if(r_in<0){
      this._angle += Math.PI;
    }
    this._r = Math.abs(r_in);
    this._dx = this._r * Math.cos(this._angle);
    this._dy = this._r * Math.sin(this._angle);
  }

  add(vector){
    this._dx += vector.dx;
    this._dy += vector.dy;
  }

  draw(context,x,y,scale){
    context.beginPath();
    context.save();
    context.translate(x,y);
    context.rotate(this._angle);
    context.moveTo(0,0);
    context.lineTo(this._r*scale,0);
    context.stroke();
    context.closePath();
    context.restore();
  }

  sumVector(a, b){
    this.dx = a.dx + b.dx;
    this.dy = a.dy + b.dy;
  }

  difVector(a, b){
    this.dx = a.dx - b.dx;
    this.dy = a.dy - b.dy;
  }

  scalair(num){
    this.dx = this.dx*num;
    this.dy = this.dy*num;
  }

  calcBiSector(diff_bc){
    this.dx = diff_bc.dx/2;
    this.dy = diff_bc.dy/2;
  }

  dot(vector){
    return this.dx * vector.dx + this.dy * vector.dy;
  }
}
