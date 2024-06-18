# Toy Robot Simulator

A simple Angular application simulating a toy robot moving on a tabletop.

## Setup and Run

### Prerequisites
#### Node.js
- Ensure you have Node.js installed on your machine. You can download it from [Node.js official website](https://nodejs.org/).
- Recommended version: 20.14.0.
#### npm (Node Package Manager)
- The project uses npm for managing dependencies. Verify that npm is installed with your Node.js installation.
#### Angular CLI
- The project uses Angular for the frontend. Install Angular CLI globally by running: `npm install -g @angular/cli`
- Recommended version: 18.0.4.

### Installation
1. Clone the repository: `git clone https://github.com/chiarazetaa/toy-robot-simulator.git`
2. Navigate to the project directory: `cd toy-robot-simulator`
3. Install dependencies: `npm install`

### Run the Application
1. Start the Angular frontend:
   - Run the Angular development server: `ng serve`
   - Open your web browser and go to [http://localhost:4200/](http://localhost:4200/)

## Features

- Place the toy robot on the tabletop at a specified position (X, Y) and facing a direction (NORTH, SOUTH, EAST, WEST).
- Move the robot one unit forward in the direction it is currently facing.
- Rotate the robot 90 degrees to the left or right without changing its position.
- Display the current position (X, Y) and facing direction of the robot.

### How to Interact
- Use the input fields to specify the X and Y coordinates, and select the facing direction from the dropdown.
- Click on "Place Robot" to place the robot on the tabletop.
- Use the buttons "Move Robot", "Turn Left", and "Turn Right" to move and rotate the robot.
- Click on "Report" to display the current position and facing direction of the robot.
- Alternatively, use the arrow keys on your keyboard to move the robot (Arrow Up: NORTH, Arrow Left: WEST, Arrow Right: EAST, Arrow Down: SOUTH).

## Technologies Used
- Angular: Frontend framework for building interactive web applications.
- HTML/CSS: Markup and styling languages for building web interfaces.

## Contact Information
Your Name
- Email: chiara.zuffi19@gmail.com
- GitHub: [https://github.com/chiarazetaa/](https://github.com/chiarazetaa/)