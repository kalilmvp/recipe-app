import {Component, OnInit} from '@angular/core';
import * as firebase from "firebase";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipes';

  onNavigate(featureSelected) {
    this.loadedFeature = featureSelected;
  }

  ngOnInit(){
    var config = {
      apiKey: "AIzaSyBJEIWQlhPspRZV2VIfEeVD0uO700guVaY",
      authDomain: "ng-recipe-book-a1355.firebaseapp.com"
    };
    firebase.initializeApp(config);
  }
}
