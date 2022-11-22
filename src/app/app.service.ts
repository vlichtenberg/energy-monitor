import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map, Observable, of} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AppService {
  solarEdgeApiKey: string = 'H097X7R5ICE9GI2GHD76FQ8FSQU9GSYE';
  solarEdgeApiURL: string = 'https://monitoringapi.solaredge.com';
  solarEdgeSiteID: string = '3246083';

  constructor(private http: HttpClient) {}

  getSolarEdgeSiteDetails(): Observable<any> {
    const url = `${this.solarEdgeApiURL}/site/${this.solarEdgeSiteID}/details?api_key=${this.solarEdgeApiKey}`;

    return this.http.get<any>(url);
  }

  getDataFromSolarEdge(): Observable<any> {
    const url = this.solarEdgeApiURL;

    return this.http.get<any>(url);
  }


}
