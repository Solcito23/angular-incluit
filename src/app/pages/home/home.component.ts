import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from '../../shared/services/weather-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listaClima : any;
  inputBuscar :string = "";
  loading : boolean = false;
  constructor(private weatherService : WeatherServiceService) { 
  
        // this.weatherService.getWeather({}).subscribe(
        //   res => this.listaClima = res,
        //   error => console.log(error)
        // )

  }

  ngOnInit() {
    
  }

  searchCiudad(ciudad:string)
  {
    this.loading = true;
    this.weatherService.getWeather(ciudad).subscribe(
      res=>{
        this.listaClima = res;
        this.loading = false;
      } ,
      error => console.log(error)
    )
  }

}