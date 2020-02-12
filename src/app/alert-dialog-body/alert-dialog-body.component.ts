import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';




@Component({
  selector: 'app-alert-dialog-body',
  templateUrl: './alert-dialog-body.component.html',
  styleUrls: ['./alert-dialog-body.component.css']
})
export class AlertDialogBodyComponent{
  message:string;
  constructor(public dialogRef:MatDialogRef<AlertDialogBodyComponent>, 
    @Inject(MAT_DIALOG_DATA) public data:any) {
      if(data){
        this.message = data.message;
      }
    }


}
