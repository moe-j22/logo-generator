class Circle {
    constructor(radius, color) {
      this.radius = radius;
      this.color = color;
    }
  
    generateSVG() {
      // Generate SVG code for a circle
    return `<circle cx="150" cy="100" r="${this.radius}" fill="${this.color}" />`;
    }
  }
  
class Triangle {
    constructor(sideLength, color) {
      this.sideLength = sideLength;
      this.color = color;
    }
  
    generateSVG() {
      // Generate SVG code for a triangle
      const height = (Math.sqrt(3) / 2) * this.sideLength;
      const x1 = 150;
      const y1 = 100 - height / 2;
      const x2 = 150 - this.sideLength / 2;
      const y2 = 100 + height / 2;
      const x3 = 150 + this.sideLength / 2;
      const y3 = 100 + height / 2;
  
      return `<polygon points="${x1},${y1} ${x2},${y2} ${x3},${y3}" fill="${this.color}" />`;
    }
  }
  
class Square {
    constructor(sideLength, color) {
      this.sideLength = sideLength;
      this.color = color;
    }
  
    generateSVG() {
      // Generate SVG code for a square
      const x = 150 - this.sideLength / 2;
      const y = 100 - this.sideLength / 2;
  
      return `<rect x="${x}" y="${y}" width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />`;
    }
  }
  
  module.exports = { Circle,  Triangle, Square};
  