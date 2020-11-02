import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotifierService {

  constructor(private snackBar : MatSnackBar) { }
  showNotification(){
    this.snackBar.open('Notification Message', 'Button Text', {
      duration: 5000,
      horizontalPosition: "center",
      verticalPosition: "bottom",
    })
  }
}
