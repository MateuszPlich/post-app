import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';

const WATHER_ENDPOINT = '/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private http: HttpClient
  ) {
  }

  public getWeatherByCityName(cityName: string): any {
    const params = new HttpParams()
      .set('q', cityName)
      .set('units', 'metric')
      .set('appid', environment.WATHER_API_KEY);

    return this.http.get(
      `${environment.WEATHER_API_BASE}${WATHER_ENDPOINT}`,
      {params}
      );
  }

}
