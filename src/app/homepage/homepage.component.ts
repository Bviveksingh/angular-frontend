import { BlogService } from './../api-calls/blog.service';
import { Component, OnInit } from '@angular/core';

interface Blog{
  title:string,
  feature_image:string,
  created_at:string,
  content:string
}

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  private all_blogs: Blog[] = [];
  constructor(private blog_service:BlogService) { }

  ngOnInit() {
    this.load_all_blogs();
  }

  load_all_blogs(){
    this.blog_service.get_all_blogs().subscribe((response:any)=>{
      response.all_blogs.forEach((element:any) => {
        this.all_blogs.push(element);
      });
    })
  }

}
