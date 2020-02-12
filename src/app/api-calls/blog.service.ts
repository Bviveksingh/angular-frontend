import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private add_blog_url:string = 'http://localhost:5000/add_blog';
  private get_all_blogs_url:string = 'http://localhost:5000/blogs';
  private get_single_blog_url:string = 'http://localhost:5000/blog/';
  private delete_blog_url:string = 'http://localhost:5000/delete_blog/';
  private update_blog_url:string = 'http://localhost:5000/update_blog/';
  constructor(private http:HttpClient) { }

  add_blog(blog_props:Object){
    return this.http.post(this.add_blog_url,blog_props);
  }

  get_all_blogs(){
    return this.http.get(this.get_all_blogs_url);
  }

  get_single_blog(blog_id:string){
    return this.http.get(this.get_single_blog_url + blog_id);
  }

  update_blog(blog_props: Object, blog_id:string){
    return this.http.put(this.update_blog_url + blog_id, blog_props);
  }

  delete_blog(id:string){
    return this.http.delete(this.delete_blog_url + id);
  }
}
