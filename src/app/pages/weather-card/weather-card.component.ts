import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styles: []
})
export class WeatherCardComponent implements OnInit {

  @Input() currentWeather:any;
  @Input() isLoading:boolean;

  constructor() {
    
   }

  ngOnInit() {
    console.log(this.currentWeather);
  }

}
