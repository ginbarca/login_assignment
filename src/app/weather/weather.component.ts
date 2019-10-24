import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
	selector: 'app-weather',
	templateUrl: './weather.component.html',
	styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

	temp: any;
	@ViewChild('cityName') cityName: ElementRef;
	constructor(private weatherService: WeatherService) { }

	ngOnInit() {

	}

	getTemp(cityName: string) {
		this.weatherService.getTemp(cityName).subscribe(res => {
			this.temp = res.main.temp;
		});
	}
}
