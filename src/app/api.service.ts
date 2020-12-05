import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface IItemData {
  title: string
  value: string
}

interface IContactData {
  name: string
  email: string
  message: string
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getItems(){
    return this.httpClient.get("http://localhost:3333/api/public/items");
  }

  sendItemRequest(data: IItemData, image: File) {
    const formData = new FormData();
    formData.append('title' , data.title);
    formData.append('value' , data.value);
    formData.append('image' , image);

    const httpOptions = {
      headers: new HttpHeaders({
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        })
    };

    return this.httpClient.post("http://localhost:3333/api/public/items", formData, httpOptions);
  }

  sendContactRequest(data: IContactData) {

    const httpOptions = {
      headers: new HttpHeaders({
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        })
    };

    return this.httpClient.post("http://localhost:3333/api/public/contacts", data, httpOptions);
  }
}
