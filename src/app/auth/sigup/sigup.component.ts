import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-sigup',
  templateUrl: './sigup.component.html',
  styleUrls: ['./sigup.component.css']
})
export class SigupComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  onSignUp(form:NgForm){
    this.authService.signUpUser(form.value.email, form.value.password);
  }
}
