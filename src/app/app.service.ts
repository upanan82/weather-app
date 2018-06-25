import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private secureKey = 'ccceef811955b8382cd92c367c1a77bb';

  constructor(private http: HttpClient) { }

  getApiData(city: string): Observable<any> {
    const api = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${this.secureKey}`;
    return this.http.get<any>(api);
  }

}
