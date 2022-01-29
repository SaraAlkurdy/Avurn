import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { VideoDialogComponent } from 'src/app/shared/video-dialog/video-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openVideoDialog() {
    const dialogRef = this.dialog.open(VideoDialogComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '80%',
      panelClass: 'full-screen-modal',
      backdropClass: 'backdropBackground'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
