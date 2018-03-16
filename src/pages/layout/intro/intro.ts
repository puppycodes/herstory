import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html'
})
export class IntroPage {

  slides = [
    {
      title: "",
      description: "",
      image: "./assets/slide1.png",
      color: "#00FFFF"
    },
    {
      title: "",
      description: "",
      image: "./assets/slide2.png",
      color: "#00FFFF"
    }
  ];


  constructor(public navCtrl: NavController) {
  }

  loginWithEmail(){
    this.navCtrl.push('LoginPage');
  }

}
