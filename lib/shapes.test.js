// lib/shapes.test.js

const { Circle, Triangle, Square } = require('./shapes');

test('Circle generates correct SVG', () => {
  const circle = new Circle(50, 'blue');
  const svg = circle.generateSVG();
  // Add assertions to check if the generated SVG is correct
  expect(svg).toContain('<circle');
  expect(svg).toContain('fill="blue"');
  expect(svg).toContain('r="50"');
});

test('Triangle generates correct SVG', () => {
  const triangle = new Triangle(60, 'red');
  const svg = triangle.generateSVG();
  // Add assertions to check if the generated SVG is correct
  expect(svg).toContain('<polygon');
  expect(svg).toContain('fill="red"');
  expect(svg).toContain('points="');
});

test('Square generates correct SVG', () => {
  const square = new Square(70, 'green');
  const svg = square.generateSVG();
  // Add assertions to check if the generated SVG is correct
  expect(svg).toContain('<rect');
  expect(svg).toContain('fill="green"');
  expect(svg).toContain('width="70"');
  expect(svg).toContain('height="70"');
});
