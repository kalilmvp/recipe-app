import * as firebase from "firebase";
import {Injectable, OnInit} from "@angular/core";

@Injectable()
export class AuthService implements OnInit {
  constructor(){}

  ngOnInit(){}

  signUpUser(email:string, password:string) {
    console.log(email + ' : ' + password);

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => console.log(error)
      )
    ;
  }
}
