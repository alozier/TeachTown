import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LaunchTableExpandComponent} from './launch-table-expand/launch-table-expand.component';

@Component({
  selector: 'app-root',
  imports: [ LaunchTableExpandComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'spacexlaunch';
}
