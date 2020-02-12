import { FeatureImageService } from './../../api-calls/feature-image.service';
import { AlertDialogBodyComponent } from './../../alert-dialog-body/alert-dialog-body.component';
import { DialogBodyComponent } from 'src/app/dialog-body/dialog-body.component';
import { MatDialog } from '@angular/material/dialog';
import { BlogService } from './../../api-calls/blog.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


interface Blog{
  title:string,
  content:string,
  tags:string[],
  feature_image:any
}

@Component({
  selector: 'app-update-blog',
  templateUrl: './update-blog.component.html',
  styleUrls: ['./update-blog.component.css']
})



export class UpdateBlogComponent implements OnInit {
  private blog_id: string;
  private selectedFile:any;
  private show_spinner:boolean = false;
  private blog_props: Blog = {
    title: "",
    content: "",
    tags: [],
    feature_image: ""
  }

  constructor(private active_route:ActivatedRoute, 
              private dialog:MatDialog, 
              private blog_service:BlogService,
              private image_service:FeatureImageService
              ) { } 

  ngOnInit() {
      this.active_route.params.subscribe((response)=>{
      this.blog_id = response.id;
      this.get_blog_info();
      });
      
  }

  processFile(imageInput:any){
    this.selectedFile = imageInput.files[0];
    this.previewImageLoad();
  }

  previewImageLoad(){
    let reader = new FileReader();
    reader.onloadend = e =>{
      this.blog_props.feature_image = reader.result;
    }
    reader.readAsDataURL(this.selectedFile);
  }

  open_dialog(message:string){
    const dialogRef = this.dialog.open(DialogBodyComponent, {
      width: '550px',
      height: '200px',
      data: {
        message
      }
      
    });
    dialogRef.afterClosed().subscribe((confirm:boolean)=>{
      if(confirm){
        this.submit_blog();
      }
    })
    
  }

  open_alert_dialog(message:string){
    let dialogRef = this.dialog.open(AlertDialogBodyComponent,{
      width:'550px',
      height: '200px',
      data:{
        message
      }
    });
  }

  get_blog_info(){
    this.blog_service.get_single_blog(this.blog_id).subscribe((response:any)=>{
      this.blog_props.title = response.single_blog.title;
      this.blog_props.content = response.single_blog.content;
      this.blog_props.feature_image = response.single_blog.feature_image;
      response.single_blog.tags.forEach((element:any) => {
        this.blog_props.tags.push(element);
      });
    });
  }

  async submit_blog(){
    this.show_spinner = true;
    let image_link:any;
    if(this.selectedFile){
      const image_data = await this.image_service.upload_image(this.selectedFile).toPromise();
      image_link = image_data["data"].link;
    }
    else{
      image_link = this.blog_props.feature_image; 
    }
    
    let blog = {
      title: this.blog_props.title,
      content: this.blog_props.content,
      feature_image:image_link,
    }

    this.blog_service.update_blog(blog,this.blog_id).subscribe((response:any)=>{
      this.blog_id = response.blog_id;
      this.show_spinner = false;
      this.open_alert_dialog(`Blog with the id: ${this.blog_id} has been updated`);
    });

  }

}
