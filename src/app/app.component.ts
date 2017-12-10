import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'recipes';

  onNavigate(featureSelected) {
    console.log(featureSelected);
    this.loadedFeature = featureSelected;
  }
}
