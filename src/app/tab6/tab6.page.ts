import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab6',
  templateUrl: './tab6.page.html',
  styleUrls: ['./tab6.page.scss'],
})
export class Tab6Page{

  img ="https://ionicframework.com/docs/demos/api/avatar/avatar.svg";
  constructor(public modalController: ModalController, public route: Router) {}

  async onSetting() {
    return this.route.navigateByUrl('/setting');
  }

  async onPicture() {
    return this.route.navigateByUrl('/picture');
  }

  async onEdit() {
   return this.route.navigateByUrl('/edit');

  }


}
