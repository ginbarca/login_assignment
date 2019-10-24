import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class WeatherService {

	constructor(private http: HttpClient) { }

	getTemp(cityName: string): Observable<any> {
		return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=ff3587399b13fdeee5cb270d4ef696d3&units=metric');
	}
}
