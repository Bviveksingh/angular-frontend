import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AddBlogComponent } from './admin/add-blog/add-blog.component';
import { AllBlogsComponent } from './admin/all-blogs/all-blogs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { TagComponent } from './material-components/tag/tag.component';
import { DialogBodyComponent } from './dialog-body/dialog-body.component';
import { AlertDialogBodyComponent } from './alert-dialog-body/alert-dialog-body.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateBlogComponent } from './admin/update-blog/update-blog.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';

import { LoginComponent } from './login/login.component';
import { JwtModule } from '@auth0/angular-jwt';




@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AddBlogComponent,
    AllBlogsComponent,
    TagComponent,
    DialogBodyComponent,
    AlertDialogBodyComponent,
    UpdateBlogComponent,
    HomepageComponent,
    BlogDetailsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    RichTextEditorAllModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: function  tokenGetter() {
             return localStorage.getItem('auth_token');},
        whitelistedDomains: ['localhost:5000'],
        blacklistedRoutes: ['http://localhost:5000/login']
      }
    })
  ],
  providers: [],
  entryComponents: [DialogBodyComponent,AlertDialogBodyComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
