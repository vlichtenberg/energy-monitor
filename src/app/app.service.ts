import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import * as moment from 'moment';
import {Observable} from "rxjs";


type TimeUnit = 'QUARTER_OF_AN_HOUR' | 'HOUR' | 'DAY' | 'WEEK' | 'MONTH' | 'YEAR';
type Meter = 'Production' | 'Consumption' | 'FeedIn' | 'Purchased';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  solarEdgeApiKey: string = 'H097X7R5ICE9GI2GHD76FQ8FSQU9GSYE';
  solarEdgeApiURL: string = 'https://monitoringapi.solaredge.com';
  solarEdgeSiteID: string = '3246083';

  constructor(private http: HttpClient) {}

  getDataPeriod(): Observable<any> {
    const url = `${this.solarEdgeApiURL}/site/${this.solarEdgeSiteID}/dataPeriod?api_key=${this.solarEdgeApiKey}`;
    return this.http.get<any>(url);
  }

  getSolarEdgeSiteDetails(): Observable<any> {
    const url = `${this.solarEdgeApiURL}/site/${this.solarEdgeSiteID}/details?api_key=${this.solarEdgeApiKey}`;
    return this.http.get<any>(url);
  }

  getEnergyToday(): Observable<any> {
    const start = moment().startOf('day').format("yyyy-MM-DD");
    const end = moment().endOf('day').format("yyyy-MM-DD");
    const timeUnit: TimeUnit = 'HOUR';
    const url = `${this.solarEdgeApiURL}/site/${this.solarEdgeSiteID}/energy?timeUnit=${timeUnit}&startDate=${start}&endDate=${end}&api_key=${this.solarEdgeApiKey}`;
    return this.http.get<any>(url);
  }

  getEnergyYesterday(): Observable<any> {
    const start = moment().subtract(1, 'day').startOf('day').format("yyyy-MM-DD");
    const end = moment().subtract(1, 'day').endOf('day').format("yyyy-MM-DD");
    const timeUnit: TimeUnit = 'HOUR';
    const url = `${this.solarEdgeApiURL}/site/${this.solarEdgeSiteID}/energy?timeUnit=${timeUnit}&startDate=${start}&endDate=${end}&api_key=${this.solarEdgeApiKey}`;
    return this.http.get<any>(url);
  }

  //cant get these to work, dont know why
  getMetersToday(): Observable<any> {
    const start = moment().startOf('day').format("yyyy-MM-DD HH:mm:ss");
    const end = moment().endOf('day').format("yyyy-MM-DD HH:mm:ss");
    const meters: Meter[] = ['Production', 'Consumption', 'FeedIn', 'Purchased'];

    const url = `${this.solarEdgeApiURL}/site/${this.solarEdgeSiteID}/meters?meters=${meters.join(',')}&startTime=${start}&endTime=${end}&api_key=${this.solarEdgeApiKey}`;

    return this.http.get<any>(url);
  }

}
