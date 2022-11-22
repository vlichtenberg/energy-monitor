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
    appService.getDataPeriod().subscribe(data => console.log(data))
    appService.getSolarEdgeSiteDetails().subscribe(data => console.log(data))
    appService.getEnergyToday().subscribe(data => console.log(data))
    appService.getEnergyYesterday().subscribe(data => console.log(data))
  }
}
