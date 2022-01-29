import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creative-solutions',
  templateUrl: './creative-solutions.component.html',
  styleUrls: ['./creative-solutions.component.scss']
})
export class CreativeSolutionsComponent implements OnInit {
  creativeSolutionsTabs = []

  constructor() { }

  ngOnInit() {
    this.creativeSolutionsTabs = [
      {
        title: "Speed , Flexibility",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
        image: "../assets/images/why-we-different1.jpg"
      },
      {
        title: "Profeesional Work",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
        image: "../assets/images/why-we-different2.jpg"
      },
      {
        title: "Experience Staff",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
        image: "../assets/images/why-we-different3.jpg"
      },
      {
        title: " Customer support",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
        image: "../assets/images/why-we-different4.jpg"
      }
    ]
  }

}
