import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RobotControlComponent } from './robot-control/robot-control.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RobotControlComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'toy-robot-simulator';
}
