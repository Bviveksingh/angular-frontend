import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';
import { HomepageComponent } from './homepage/homepage.component';
import { UpdateBlogComponent } from './admin/update-blog/update-blog.component';
import { AddBlogComponent } from './admin/add-blog/add-blog.component';
import { AllBlogsComponent } from './admin/all-blogs/all-blogs.component';
import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogDetailsComponent } from './blog-details/blog-details.component';

const routes: Routes = [
  {path:'', component:HomepageComponent},
  {path:'blog/:id',component:BlogDetailsComponent},
  {path:'admin', component:AdminComponent,
    canActivate:[AuthGuardService],
    children:[
      {path:'all-blogs', component:AllBlogsComponent},
      {path:'add-blog', component:AddBlogComponent},
      {path:'update-blog/:id',component:UpdateBlogComponent}
    ]
  },
  {path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
