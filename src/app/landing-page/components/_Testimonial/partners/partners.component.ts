import { Component, OnInit } from '@angular/core'; 4

declare var $: any;

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {

  partnersImages = [
    "../assets/images/partner1.png",
    "../assets/images/partner2.png",
    "../assets/images/partner3.png",
    "../assets/images/partner4.png",
    "../assets/images/partner5.png",
    "../assets/images/partner6.png",
  ]

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      $('#partners-slides').owlCarousel({
        loop: true,
        items: 5,
        autoplay: true,
        autoplayHoverPause: true,
        margin: 30,
        width: 352,
        autoWidth: false,
        dots: false,
        nav: false,
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
            items: 2
          },
          740: {
            items: 5
          },

        },
      }
      );
    });
  }

}
