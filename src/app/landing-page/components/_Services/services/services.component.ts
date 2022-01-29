import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  serviceCard = [
    {
      img: "../assets/images/services-img1.jpg",
      icon: 'fa fa-headphones',
      title: "Web Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam finibus velit nec."
    },
    {
      img: "../assets/images/services-img2.jpg",
      icon: "fa fa-anchor",
      title: "Branding Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam finibus velit nec."
    },
    {
      img: "../assets/images/services-img3.jpg",
      icon: "fa fa-puzzle-piece",
      title: "Digital Marketing",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam finibus velit nec."
    },
    {
      img: "../assets/images/services-img4.jpg",
      icon: "fa fa-wrench",
      title: "App Development",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam finibus velit nec."
    },
    {
      img: "../assets/images/services-img5.jpg",
      icon: "fa fa-cogs",
      title: "Easy Customization",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam finibus velit nec."
    },
    {
      img: "../assets/images/services-img6.jpg",
      icon: "fa fa-puzzle-piece",
      title: "Fully Responsive",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam finibus velit nec."
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
