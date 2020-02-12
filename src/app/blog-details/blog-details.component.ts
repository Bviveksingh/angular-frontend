import { ActivatedRoute } from '@angular/router';
import { BlogService } from './../api-calls/blog.service';
import { Component, OnInit } from '@angular/core';

interface Blog{
  title:string,
  content:string,
  feature_image:string,
  tags: string[],
  created_at: string
}

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  private blog_id:string;
  private blog_props : Blog = {
    title: "",
    content:"",
    feature_image: "",
    tags: [],
    created_at:""
  };
  constructor(private blog_service:BlogService, private active_route:ActivatedRoute) { }

  ngOnInit() {
    this.active_route.params.subscribe((response)=>{
      this.blog_id = response.id;
      this.get_blog_details();
    })
    
  }

  get_blog_details(){
    this.blog_service.get_single_blog(this.blog_id).subscribe((response:any)=>{
      this.blog_props.title = response.single_blog.title;
      this.blog_props.content = response.single_blog.content;
      this.blog_props.feature_image = response.single_blog.feature_image;
      this.blog_props.created_at = response.single_blog.created_at;
      response.single_blog.tags.foreach((element:any)=>{
        this.blog_props.tags.push(element);
      });
    });
  }

}
