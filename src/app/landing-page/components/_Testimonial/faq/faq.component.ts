import { Component, OnInit } from '@angular/core';
import { matExpansionAnimations, MatExpansionPanelState } from '@angular/material';
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  animations: [matExpansionAnimations.bodyExpansion],
})
export class FaqComponent implements OnInit {
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  items = [
    { title: ' What’s the difference between a college and a university? ', body: ' Colleges offer only undergraduate degrees while universities offer graduate degrees as well, but the terms are often used interchangeably. ' },
    { title: ' What are the different types of undergraduate degrees? ', body: ' Associate: a two-year program that either leads to a specific vocation or transitions to a bachelor program. Bachelor: a four or five-year program where students earn credits in a wide variety of courses. ' },
    { title: 'What are the different types of graduate degrees?', body: ' Masters: two-year degree providing additional specialization. Doctorate: five to eight-year program certifying the student as a trained research scholar and/or professor. ' },
    { title: ' Can you work while studying in the United States? ', body: ' With permission of the International Student Office, international students may work on campus up to 20 hours/week their first year and can apply to work off-campus in subsequent years. ' },
    { title: ' What is distance education? ', body: ' Distance education occurs when a student and an instructor are in different places. Learning occurs by mail, telephone, internet, or by other means. ' }];
  expandedIndex = 0;

  constructor() { }

  ngOnInit() {
  }

}
