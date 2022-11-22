import { Component } from '@angular/core';
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'energy-monitor';

  constructor(appService: AppService) {
    appService.getSolarEdgeSiteDetails().subscribe(data => console.log(data))
  }
}
