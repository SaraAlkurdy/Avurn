import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

const style1 = style({
  opacity: 1,
  transform: 'translateX(0)',
});

const style2 = style({
  opacity: 0,
  transform: 'translateX(-100%)',
});

const incr = 1;
declare var $: any;

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  // animations: [
  //   trigger('foobar', [
  //     state('show', style1),
  //     state('hide', style2),
  //     transition('show => hide', animate('700ms ease-out')),
  //     transition('hide => show', animate('700ms ease-in')),
  //   ]),
  // ],
})
export class SkillsComponent implements OnInit {
  state = 'hide';
  progress1 = 0;
  progress2 = 0;
  progress3 = 0;

  constructor(public el: ElementRef) { }

  ngOnInit() {
  }

  manageProgress() {
    if (this.progress1 === 95) {
      this.progress1 = 95;
    } else {
      this.progress1 = this.progress1 + incr;
    }

    if (this.progress2 === 90) {
      this.progress2 = 90
    } else {
      this.progress2 = this.progress2 + incr
    }

    if (this.progress3 === 93) {
      this.progress3 = 93
    } else {
      this.progress3 = this.progress3 + incr
    }
  }


  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset;
    // console.log(componentPosition);
    // console.log(scrollPosition);
    if (scrollPosition >= componentPosition - 250) {
      this.state = 'show';
      setInterval(() => this.manageProgress(), 200)
    }
    // else {
    //   this.state = 'hide';
    // }
  }


}
