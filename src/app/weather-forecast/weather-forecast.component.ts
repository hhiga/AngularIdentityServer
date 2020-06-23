import { Component, OnInit } from '@angular/core';
import { WeatherForecastService } from '../core/services/weather-forecast.service';
import { Weather } from '../core/models/Weather';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent implements OnInit {

  weatherForecast: Weather[];

  constructor(private weatherForecastService: WeatherForecastService) { }

  ngOnInit() {
    this.weatherForecastService.getWeatherForecast().subscribe(weatherForecast => this.weatherForecast = weatherForecast);
  }

}
