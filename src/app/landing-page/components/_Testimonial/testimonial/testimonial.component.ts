import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss'],
})
export class TestimonialComponent implements OnInit {

  testimonialImages = [
    {
      image: '../assets/images/author1.jpg',
      name: 'John Smith',
      position: 'Web Developer'
    },
    {
      image: '../assets/images/author2.jpg',
      name: 'Steven Smith',
      position: 'Product Manager'
    },
    {
      image: '../assets/images/author3.jpg',
      name: 'Alina Eva',
      position: 'Web Designer'
    },
    {
      image: '../assets/images/author4.jpg',
      name: 'Steven Smith',
      position: 'Product Manager'
    }
  ]

  constructor() { }

  ngOnInit() {


    $(document).ready(function () {
      $('#testimonial-slides').owlCarousel({
        loop: true,
        items: 2,
        autoplay: true,
        margin: 30,
        width: 543,
        autoWidth: false,
        dots: true,
        // nav: true,
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
            items: 2
          },

        },
      }
      );
    });
  }

}
