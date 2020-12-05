import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-musics',
  templateUrl: './musics.page.html',
  styleUrls: ['./musics.page.scss'],
})
export class MusicsPage implements OnInit {
  public musics = [];

  constructor (
    private apiService: ApiService
  ) {
    this.apiService.getItems().subscribe((data:any) => {
      this.musics = data;
    })
  }

  ngOnInit() {
  }
}
