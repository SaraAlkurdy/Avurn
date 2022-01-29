import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  isBottom: boolean;
  urlFragment
  private scrollExecuted: boolean = false;
  activeFragment$: BehaviorSubject<string> = new BehaviorSubject("");
  ActiveSection: any;
  lastUrl = '';

  constructor(
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller,
    private router: Router,
    private renderer: Renderer2) { }

  ngOnInit() {
    // this.activeFragment$.subscribe(arg => {
    //   this.ActiveSection = arg
    //   this.urlFragment = arg
    //   console.log(this.ActiveSection);
    //   console.log(this.urlFragment)
    //   // if (this.urlFragment != this.lastUrl) {
    //   //   this.lastUrl = this.urlFragment
    //   //   this.router.navigate(['/'], { fragment: this.urlFragment })

    //   // }



    // })

    // console.log(this.activeFragment$)
    // this.renderer.listen(window, 'scroll', (event) => {
    //   if (this.isVisible(document.querySelector('#home') as HTMLElement)) {
    //     this.activeFragment$.next('home');
    //   } else if (this.isVisible(document.querySelector('#about') as HTMLElement)) {
    //     this.activeFragment$.next('about');
    //   } else if (this.isVisible(document.querySelector('#services') as HTMLElement)) {
    //     this.activeFragment$.next('services');
    //   } else if (this.isVisible(document.querySelector('#portfolio') as HTMLElement)) {
    //     this.activeFragment$.next('portfolio');
    //   } else if (this.isVisible(document.querySelector('#team') as HTMLElement)) {
    //     this.activeFragment$.next('team');
    //   } else if (this.isVisible(document.querySelector('#pricing') as HTMLElement)) {
    //     this.activeFragment$.next('pricing');
    //   } else if (this.isVisible(document.querySelector('#testimonial') as HTMLElement)) {
    //     this.activeFragment$.next('testimonial');
    //   } else if (this.isVisible(document.querySelector('#blog') as HTMLElement)) {
    //     this.activeFragment$.next('blog');
    //   } else if (this.isVisible(document.querySelector('#contact') as HTMLElement)) {
    //     this.activeFragment$.next('contact');
    //   }

    // });
    //console.log(this.activeFragment$)
    this.route.fragment.subscribe(fragment => {
      this.urlFragment = fragment;
      if (fragment) {
        let element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView()
        }
        this.scrollExecuted = true;
      }
    })
  }

  // isVisible(elem: HTMLElement) {
  //   // console.log(this.activeFragment$)
  //   if (!(elem instanceof Element)) {
  //     throw Error('DomUtil: elem is not an element.');
  //   }

  //   const style = getComputedStyle(elem);

  //   if (style.display === 'none') {
  //     return false;
  //   }

  //   if (style.visibility !== 'visible') {
  //     return false;
  //   }

  //   if (+style.opacity < 0.1) {
  //     return false;
  //   }

  //   if (
  //     elem.offsetWidth +
  //     elem.offsetHeight +
  //     elem.getBoundingClientRect().height +
  //     elem.getBoundingClientRect().width ===
  //     0
  //   ) {
  //     return false;
  //   }

  //   const elemCenter = {
  //     x: elem.getBoundingClientRect().left + elem.offsetWidth / 2,
  //     y: elem.getBoundingClientRect().top + elem.offsetHeight / 2,
  //   };

  //   if (elemCenter.x < 0) {
  //     return false;
  //   }

  //   if (elemCenter.x > (document.documentElement.clientWidth || window.innerWidth)) {
  //     return false;
  //   }

  //   if (elemCenter.y < 0) {
  //     return false;
  //   }

  //   if (elemCenter.y > (document.documentElement.clientHeight || window.innerHeight)) {
  //     return false;
  //   }

  //   let pointContainer: any = document.elementFromPoint(elemCenter.x, elemCenter.y);
  //   //pointContainer.hasOwnProperty('parentNode')
  //   if (pointContainer.parentNode !== null && pointContainer.parentNode !== undefined) {
  //     do {
  //       if (pointContainer === elem) {
  //         return true;
  //       }
  //     } while ((pointContainer = pointContainer.parentNode));
  //   }


  //   return false;
  // }

  ngAfterViewInit(): void {
    // this.route.fragment.subscribe(fragment => {
    //   this.urlFragment = fragment;
    //   // setTimeout(() => this.scrollToAnchor(), 10);
    // });
  }

  // scrollToAnchor(): void {
  //   try {
  //     if (this.urlFragment) {
  //       document.querySelector('#' + this.urlFragment).scrollIntoView();
  //     }
  //   } catch (e) { }
  // }

  @HostListener('window:scroll', ['$event'])

  onWindowScroll() {
    let element = document.querySelector('.navbar') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-inverse');
      this.isBottom = true
    } else {
      element.classList.remove('navbar-inverse');
      this.isBottom = false;
    }
  }

}
