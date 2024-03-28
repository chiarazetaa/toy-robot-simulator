import { Component } from '@angular/core';

@Component({
  selector: 'app-robot-control',
  templateUrl: './robot-control.component.html',
  styleUrls: ['./robot-control.component.css']
})
export class RobotControlComponent {
  public x: number = 0;
  public y: number = 0;
  public direction: string = 'NORTH';
  public report: any;
  public robotPlaced: boolean = false;

  constructor() { }

  placeRobot() {
    // place the robot in the first position (0, 0, NORTH) 
    let position = { x: this.x, y: this.y, direction: this.direction };
    console.log('Robot placed successfully', position);
    this.robotPlaced = true;
  }

  moveRobot() {
    // check if the move will cause the robot to go out of bounds
    if (this.direction === 'NORTH' && this.y < 4) {
      this.y++;
    } else if (this.direction === 'SOUTH' && this.y > 0) {
      this.y--;
    } else if (this.direction === 'EAST' && this.x < 4) {
      this.x++;
    } else if (this.direction === 'WEST' && this.x > 0) {
      this.x--;
    } else {
      console.log('Move ignored: Robot will go out of bounds');
    }
  }

  turnLeft() {
    switch (this.direction) {
      case 'NORTH':
        this.direction = 'WEST';
        break;
      case 'SOUTH':
        this.direction = 'EAST';
        break;
      case 'EAST':
        this.direction = 'NORTH';
        break;
      case 'WEST':
        this.direction = 'SOUTH';
        break;
      default:
        console.error('Invalid direction');
        break;
    }
  }

  turnRight() {
    switch (this.direction) {
      case 'NORTH':
        this.direction = 'EAST';
        break;
      case 'SOUTH':
        this.direction = 'WEST';
        break;
      case 'EAST':
        this.direction = 'SOUTH';
        break;
      case 'WEST':
        this.direction = 'NORTH';
        break;
      default:
        console.error('Invalid direction');
        break;
    }
  }

  getReport(x: number, y: number, direction: string) {
    this.report = { x: x, y: y, direction: direction };
    console.log('Robot Position: ', this.report);
  }
}
