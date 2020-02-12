import { AuthService } from './../auth.service';
import { DialogBodyComponent } from './../dialog-body/dialog-body.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private dialog:MatDialog,private auth_service:AuthService) { }

  ngOnInit() {
  }

  open_dialog(message:string){
    const dialogRef = this.dialog.open(DialogBodyComponent,{
      data:{
        message
      },
      width:'550px',
      height:'200px'
    });
    dialogRef.afterClosed().subscribe((confirm:boolean)=>{
      if(confirm){
        this.sign_out();
      }
    })
  }

  sign_out(){
    this.auth_service.logout();
  }

}
