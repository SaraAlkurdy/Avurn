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
    this.initAnimatedCounts();
  }

 initAnimatedCounts = () => {
  const ease = (n) => {
    return --n * n * n + 1;
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Once this element is in view and starts animating, remove the observer,
        // because it should only animate once per page load.
        observer.unobserve(entry.target);
        const countToString = entry.target.getAttribute('data-countTo');
        const countTo = parseFloat(countToString);
        const duration = parseFloat(entry.target.getAttribute('data-animateDuration'));
        const countToParts = countToString.split('.');
        const precision = countToParts.length === 2 ? countToParts[1].length : 0;
        const startTime = performance.now();
        const step = (currentTime) => {
          const progress = Math.min(ease((currentTime  - startTime) / duration), 1);
          entry.target.textContent = (progress * countTo).toFixed(precision);
          if (progress < 1) {
            animationFrame = window.requestAnimationFrame(step);
          } else {
            window.cancelAnimationFrame(animationFrame);
          }
        };
        let animationFrame = window.requestAnimationFrame(step);
      }
    });
  });
  document.querySelectorAll('[data-animateDuration]').forEach((target) => {
    target.setAttribute('data-countTo', target.textContent);
    target.textContent = '0';
    observer.observe(target);
  });
};
}
