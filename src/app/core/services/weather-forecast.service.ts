import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Weather } from '../models/Weather';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastService {

  private weatherApiUrl: string;

  constructor(private httpClient: HttpClient) {
    this.weatherApiUrl = environment.apiUrl + '/api/weatherForecast';
  }

  getWeatherForecast(): Observable<Weather[]> {
    return this.httpClient.get<Weather[]>(this.weatherApiUrl);
  }
}
