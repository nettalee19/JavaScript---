

function Square(a, b, c, d){
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
}

Square.prototype.isSquare = function () {
  if(this.a === this.b && this.c === this.d){
    return true;
  }
  return false;
}

const sq = new Square(4,3,4,4);
console.log(sq)
console.log(sq.isSquare())
