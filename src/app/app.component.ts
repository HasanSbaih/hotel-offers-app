import { Component } from '@angular/core';
import { Http ,Headers, RequestOptions} from '@angular/http';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  spaceScreens : Array<any>;
  public loginForm = this.fb.group({
    destinationName: ["", Validators.required],
    destinationCity: ["", Validators.required],
    regionIds: ["", Validators.required],
    minTripStartDate: ["", Validators.required],
    maxTripStartDate: ["", Validators.required],
    lengthOfStay: ["", Validators.required],
    minStarRating:["",Validators.required],
    maxStarRating:["",Validators.required],
    minGuestRating:["",Validators.required],
    maxGuestRating:["",Validators.required],
    minTotalRate:["",Validators.required],
    maxTotalRate:["",Validators.required]
});
 
 constructor(private http:Http,public fb: FormBuilder){
    this.http.get('https://hoteloffers.herokuapp.com/search/')
      .map(response => response.json().offers)
      .subscribe(res => this.spaceScreens=res)
      
  }
   doLogin(event) {
   let body = JSON.stringify( this.loginForm.value );
   
    let headers = new Headers({ 'Content-Type': 'application/json' });
  let options = new RequestOptions({ headers: headers});


   this.http.post('https://hoteloffers.herokuapp.com/search/',body,options)
      .map(response => response.json().offers)
      .subscribe(res => this.spaceScreens=res)
}
}
 
