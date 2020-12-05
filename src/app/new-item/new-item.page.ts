import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.page.html',
  styleUrls: ['./new-item.page.scss'],
})
export class NewItemPage implements OnInit {

  constructor (
    private toastCtrl: ToastController,
    private route: Router,
    private apiService: ApiService
  ) { }

	formData = {
		title: '',
    value: '0',
  }
  
  public image: File;

  async presentToast() {
    let toast = await this.toastCtrl.create({
      message: `${this.formData.title} foi adicionada a lista de músicas!`,
      duration: 2000,
      position: 'middle'
    });

    this.route.navigate(['/musics'])

    toast.present();
  }

  async formSubmit(){
    await this.apiService.sendItemRequest(this.formData, this.image).subscribe((data)=>{
      console.log(this.formData.title);
    }, error => {
      console.log(error);
    });
    await this.presentToast()
  }
  
  ngOnInit() {
  }
}
