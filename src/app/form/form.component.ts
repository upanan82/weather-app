import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Weather } from '../weather';
import { AppService } from '../app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  private city: string;
  private data: Weather;
  private intervals = [5, 30, 60];
  private refreshInterval = this.intervals[0];

  constructor(
    private appService: AppService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getWeather();
    this.city = this.getCity();
    setInterval(() => {
      this.getWeather();
    }, this.refreshInterval * 1000);
  }

  getTempCelsius(temp: number): number {
    return Math.round(temp - 273.15);
  }

  getWeatherIcon(icon: string): string {
    return `http://openweathermap.org/img/w/${icon}.png`;
  }

  getCity(): string {
    return this.route.snapshot.paramMap.get('city');
  }

  getWeatherData({ main, weather, name }): Weather {
    return {
      name,
      temp: this.getTempCelsius(main.temp),
      img : this.getWeatherIcon(weather[0].icon),
      title: weather[0].description
    };
  }

  private getWeather(): void {
    const request = this.appService.getApiData(this.getCity())
      .subscribe(data => {
        request.unsubscribe();
        this.data = this.getWeatherData(data);
      }, err => this.data = null);
  }

  private getInterval(i: string): void {
    this.refreshInterval = +i;
  }

}
