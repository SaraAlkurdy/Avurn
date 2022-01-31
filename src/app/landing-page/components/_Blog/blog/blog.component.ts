import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { stringify } from 'querystring';
import { SharedDataService } from 'src/app/shared/shared-data.service';

declare var $: any;


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  item: any;
  visiable = false;
  blogImages = [
    {
      image: '../assets/images/blog1.jpg',
      date: '25 Feb, 2020',
      title: 'The most popular new top business apps',
      tag: 'Technology'
    },
    {
      image: '../assets/images/blog2.jpg',
      date: '27 Feb, 2020',
      title: 'The best marketing top use management tools',
      tag: 'Agency'
    },
    {
      image: '../assets/images/blog3.jpg',
      date: '28 Feb, 2020',
      title: '3 wooCommerce plugins to boost sales',
      tag: 'IT'
    },
    {
      image: '../assets/images/blog4.jpg',
      date: '29 Feb, 2020',
      title: 'Top 21 must-read blogs for creative agencies',
      tag: 'Creative'
    },
  ]

  constructor(private router: Router, private sharedDataSrv: SharedDataService) { }

  ngOnInit() {
    $(document).ready(function () {
      $('#blogSlider').owlCarousel({
        loop: true,
        items: 3,
        autoplayHoverPause: true,
        autoplay: true,
        margin: 30,
        width: 352,
        autoWidth: false,
        dots: true,
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
  onBlogDetails(item) {
    localStorage.setItem('item', JSON.stringify(item));

    this.sharedDataSrv.blogDetails.next(item);
    console.log(item);
    this.item = item;
    this.visiable = true;
    this.router.navigate(['/blog-details'])
  }

}
