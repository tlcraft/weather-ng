import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  weather: string;
  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      zipCode: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')])
    });
  }

  getCurrentWeather(): void {
    const temp = 75;
    this.weather = `${this.zipCode} is currently ${temp} degrees`;
  }

  get zipCode() {
    return this.form && this.form.get('zipCode').value;
  }
}