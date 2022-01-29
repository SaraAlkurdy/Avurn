import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material'
declare var $: any;

@Component({
  selector: 'app-carousel-dialog',
  templateUrl: './carousel-dialog.component.html',
  styleUrls: ['./carousel-dialog.component.scss']
})
export class CarouselDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log(this.data);

    $(document).ready(function () {
      $('#dialogSlider').owlCarousel({
        loop: true,
        items: 3,
        autoplay: true,
        margin: 30,
        width: 352,
        autoWidth: false,
        dots: false,
        nav: true,
        navigation: true,
        navigationText: [
          "<i class='fa fa-chevron-left'></i>",
          "<i class='fa fa-chevron-right'></i>"
        ],
        responsive: {
          0: {
            items: 1
          },
          400: {
            items: 1
          },
          740: {
            items: 3
          },

        },
      }
      );
    });
  }

}
