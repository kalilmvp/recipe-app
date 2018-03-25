import * as firebase from "firebase";
import {Injectable, OnInit} from "@angular/core";
import {Router} from "@angular/router";

@Injectable()
export class AuthService implements OnInit {
  token:string;

  constructor(private router:Router){}

  ngOnInit(){}

  signUpUser(email:string, password:string) {
    console.log(email + ' : ' + password);

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => console.log(error)
      )
    ;
  }

  login(email:string, password:string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate([""]);
          firebase.auth().currentUser.getToken()
            .then(
              (token:string) => this.token = token
            );
        }

      )
      .catch(
        error => console.log(error)
      )
  }

  logout(){
    firebase.auth().signOut();
    this.token = null;
  }

  getToken() {
    firebase.auth().currentUser.getToken()
      .then(
        (token:string) => this.token = token
      );

    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }
}
