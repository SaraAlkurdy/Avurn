import { Component, OnInit } from '@angular/core';
import counterUp from 'counterup2'

@Component({
  selector: 'app-number-speaks',
  templateUrl: './number-speaks.component.html',
  styleUrls: ['./number-speaks.component.scss']
})
export class NumberSpeaksComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {

    const el1 = document.querySelector('.counter');
    const el2 = document.querySelector('.counter2');
    const el3 = document.querySelector('.counter3');
    console.log(el1);
    counterUp(el1, {
      duration: 10000,
      delay: 20,
    });
    counterUp(el2, {
      duration: 10000,
      delay: 20,
    });
    counterUp(el3, {
      duration: 10000,
      delay: 20,
    });
  }
}
