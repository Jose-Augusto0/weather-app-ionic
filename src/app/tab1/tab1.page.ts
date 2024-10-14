import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  objWeather!: any;
  currentHour!: Date;

  constructor(private service: ServicesService) {
    this.getCurrentHour();
  }

  ngOnInit(): void {
    this.service
      .getWeather('São paulo')
      .pipe(
        map((el) => {
          el.main.temp = el.main.temp.toFixed(0);
          el.main.temp_min = el.main.temp_min.toFixed(0);
          el.main.temp_max = el.main.temp_max.toFixed(0);
          el.weather[0].iconURL = `http://openweathermap.org/img/wn/${el.weather[0].icon}.png`;
          el.weather[0].description = this.transformDescription(el.weather[0].description);
          return el;
        })
      )
      .subscribe((resp) => (this.objWeather = resp));
  }

  transformDescription(description: string): string {
    return (
      description[0].toUpperCase() + description.slice(1, description.length)
    );
  }

  getCurrentHour() {
    setInterval(() => {
      this.currentHour = new Date();
    }, 1000);
  }
}
