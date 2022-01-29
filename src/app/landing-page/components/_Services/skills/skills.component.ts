import { Component, OnInit } from '@angular/core';

const incr = 1;

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  progress1 = 0;
  progress2 = 0;
  progress3 = 0;


  constructor() { }

  ngOnInit() {
    setInterval(() => this.manageProgress(), 10)
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


}
