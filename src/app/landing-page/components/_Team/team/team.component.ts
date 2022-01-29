import { Component, OnInit } from '@angular/core';

declare var $: any;


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  teamImages = [
    {
      image: '../assets/images/team-img1.jpg',
      thumbImage: '../assets/images/team-img1.jpg',
      name: 'Steven Smitn',
      position: 'Web Developer'
    },
    {
      image: '../assets/images/team-img2.jpg',
      thumbImage: '../assets/images/team-img2.jpg',
      name: 'Alina Eva',
      position: 'UI/UX Designer'
    },
    {
      image: '../assets/images/team-img3.jpg',
      thumbImage: '../assets/images/team-img3.jpg',
      name: 'James Anderson',
      position: 'Photographer'
    },
    {
      image: '../assets/images/team-img4.jpg',
      thumbImage: '../assets/images/team-img4.jpg',
      name: 'Eva Lucy',
      position: 'Web Designer'
    }
  ]

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      $('#teamSlider').owlCarousel({
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
    // $('.owl-carousel').owlCarousel({
    //   loop: true,
    //   items: 3,
    //   autoplay: true,
    //   margin: 30,
    //   width: 352,
    //   autoWidth: false,
    //   dots: false,
    //   nav: true,
    //   navigation: true,
    //   navigationText: [
    //     "<i class='fa fa-chevron-left'></i>",
    //     "<i class='fa fa-chevron-right'></i>"
    //   ],
    //   // responsive: {
    //   //   0: {
    //   //     items: 1
    //   //   },
    //   //   600: {
    //   //     items: 3
    //   //   },
    //   //   1000: {
    //   //     items: 5
    //   //   }
    //   // }
    // })
  }

}
