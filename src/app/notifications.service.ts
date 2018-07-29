import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material";

@Injectable()
export class NotificationsService {
  
  constructor(public snackBar: MatSnackBar) {}
  
  notify(message: string, action: string) {
    this.snackBar.open(message, action, {
      verticalPosition: 'top',
      horizontalPosition: 'right',
      duration: 2000,
    });
  }
}
