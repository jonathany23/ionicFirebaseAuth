import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(private afAuth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  /* ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  } */

  async login(user:User){
    try{
      const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
        .then(resp => {
          if(resp){
            this.navCtrl.setRoot("HomePage");
          }
        }).catch(error => {
          console.error("ERROR signInWithEmailAndPassword "+error);
        });      
    } catch(e){
      console.error("login "+e);
    }
  }

  register(){
    this.navCtrl.push("RegisterPage");
  }

}
