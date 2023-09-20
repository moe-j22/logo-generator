import { createPromptModule } from 'inquirer';
import fs from 'fs';
import { Circle, Triangle, Square } from './lib/shapes';

const inquirer = createPromptModule();

async function generateLogo() {
  const userInput = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the text:',
      validate: (value) => value.length <= 3,
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color (keyword or hex):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape:',
      choices: ['Circle', 'Triangle', 'Square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color (keyword or hex):',
    },
  ]);

  let shape;
  switch (userInput.shape) {
    case 'Circle':
      shape = new Circle(100, userInput.shapeColor);
      break;
    case 'Triangle':
      shape = new Triangle(100, userInput.shapeColor);
      break;
    case 'Square':
      shape = new Square(100, userInput.shapeColor);
      break;
    default:
      console.error('Invalid shape selection');
      return;
  }

  const svg = `
    <svg width="300" height="200">
      ${shape.generateSVG()}
      <text x="10" y="30" fill="${userInput.textColor}">${userInput.text}</text>
    </svg>
  `;

  fs.writeFileSync('logo.svg', svg);
  console.log('Generated logo.svg');
}

generateLogo();
