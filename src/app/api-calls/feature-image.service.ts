import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeatureImageService {
  private imgur_url:string = 'https://api.imgur.com/3/image';
  private client_id:string = 'YOUR_CLIENT_ID';
  constructor(private http:HttpClient) { }

  upload_image(image_file:File){
    let formData = new FormData();
    formData.append('image',image_file, image_file.name);


    let headers = new HttpHeaders({
      "authorization": 'Client-ID '+this.client_id
    });

    return this.http.post(this.imgur_url , formData, {headers:headers});
  }
}
