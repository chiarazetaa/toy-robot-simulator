import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-robot-control',
  templateUrl: './robot-control.component.html',
  styleUrls: ['./robot-control.component.css']
})
export class RobotControlComponent {
  public x: number = 0;
  public y: number = 0;
  public direction: string = '';
  public report: any;
  public robotPlaced: boolean = false;

  constructor(private http: HttpClient) { }

  placeRobot() {
    this.http.post('http://localhost:3000/place', { x: this.x, y: this.y, direction: this.direction }, { responseType: 'text' }).subscribe({
      next: () => {
        console.log('Robot placed successfully');
        this.robotPlaced = true; // Set robotPlaced to true after placing the robot
      },
      error: (error) => {
        console.error('Errore HTTP: ' + JSON.stringify(error));
        throw new Error(error);
      }
    });
  }

  moveRobot() {
    this.http.post('http://localhost:3000/move', {}, { responseType: 'text' }).subscribe({
      next: () => {
        console.log('Robot moved successfully');
        // Update the robot's position based on the direction
        switch (this.direction) {
          case 'NORTH':
            this.y++;
            break;
          case 'SOUTH':
            this.y--;
            break;
          case 'EAST':
            this.x++;
            break;
          case 'WEST':
            this.x--;
            break;
          default:
            console.error('Invalid direction');
            break;
        }
      },
      error: (error) => {
        console.error('Errore HTTP: ' + JSON.stringify(error));
        throw new Error(error);
      }
    });
  }

  turnLeft() {
    this.http.post('http://localhost:3000/left', {}, { responseType: 'text' }).subscribe({
      next: () => {
        console.log('Robot turned left successfully');
      },
      error: (error) => {
        console.error('Errore HTTP: ' + JSON.stringify(error));
        throw new Error(error);
      }
    });
  }

  turnRight() {
    this.http.post('http://localhost:3000/right', {}, { responseType: 'text' }).subscribe({
      next: () => {
        console.log('Robot turned right successfully');
      },
      error: (error) => {
        console.error('Errore HTTP: ' + JSON.stringify(error));
        throw new Error(error);
      }
    });
  }

  getReport() {
    this.http.get('http://localhost:3000/report').subscribe({
      next: (data) => {
        this.report = data;
        console.log('Robot report:', this.report);
      },
      error: (error) => {
        console.error('Errore HTTP: ' + JSON.stringify(error));
        throw new Error(error);
      }
    });
  }
}
