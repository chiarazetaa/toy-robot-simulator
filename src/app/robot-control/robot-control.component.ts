import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-robot-control',
  templateUrl: './robot-control.component.html',
  styleUrls: ['./robot-control.component.css']
})
export class RobotControlComponent {
  x: number = 0;
  y: number = 0;
  direction: string = '';
  report: any;

  constructor(private http: HttpClient) { }

  placeRobot(): void {
    this.http.post<any>('http://localhost:3000/place', { x: this.x, y: this.y, direction: this.direction })
      .subscribe(() => {
        console.log('Robot placed successfully');
      });
  }

  moveRobot(): void {
    this.http.post<any>('http://localhost:3000/move', {})
      .subscribe(() => {
        console.log('Robot moved successfully');
      });
  }

  turnLeft(): void {
    this.http.post<any>('http://localhost:3000/left', {})
      .subscribe(() => {
        console.log('Robot turned left successfully');
      });
  }

  turnRight(): void {
    this.http.post<any>('http://localhost:3000/right', {})
      .subscribe(() => {
        console.log('Robot turned right successfully');
      });
  }

  getReport(): void {
    this.http.get<any>('http://localhost:3000/report')
      .subscribe(data => {
        this.report = data;
        console.log('Robot report:', this.report);
      });
  }
}
