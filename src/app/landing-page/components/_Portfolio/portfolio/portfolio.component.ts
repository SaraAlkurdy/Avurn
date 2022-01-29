import { ChangeDetectionStrategy, Component, HostListener, OnInit } from '@angular/core';
import { HoverContainerAnimations } from './animations'
import { AnimationEvent } from '@angular/animations';
import { MatDialog } from '@angular/material';
import { CarouselDialogComponent } from '../carousel-dialog/carousel-dialog.component';
import { Gallery, GalleryItem, ImageItem, ImageSize, ThumbnailsPosition } from '@ngx-gallery/core';
import { Lightbox } from '@ngx-gallery/lightbox';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: HoverContainerAnimations,
})


export class PortfolioComponent implements OnInit {
  items: GalleryItem[] = [];
  itemsAll: GalleryItem[] = [];
  seo: GalleryItem[] = [];
  portfolioTabs = []
  overlayTabs = []
  state;
  itemsDesign: GalleryItem[] = [];
  brandingItems: GalleryItem[] = [];
  printItems: GalleryItem[] = [];
  videoItems: GalleryItem[] = [];


  imageData = portfolioTabs;

  constructor(public dialog: MatDialog, public gallery: Gallery, public lightbox: Lightbox) { }
  lightboxRef = this.gallery.ref('lightbox');
  ngOnInit() {



    // Add custom gallery config to the lightbox (optional)
    this.lightboxRef.setConfig({
      imageSize: ImageSize.Contain,
      thumbPosition: ThumbnailsPosition.Bottom,
    });
    this.imageData.forEach(item => {
      switch (item.label) {
        case "All":
          item.images.forEach(element => {
            const item = new ImageItem({ src: element.img, thumb: element.img, title: element.title, position: element.position })
            this.itemsAll.push(item);
          });
          break;
        case 'Design':
          item.images.forEach(element => {
            const item = new ImageItem({ src: element.img, title: element.title, position: element.position })
            this.itemsDesign.push(item)
          });
          break;
        case 'SEO':
          item.images.forEach(element => {
            const item = new ImageItem({ src: element.img, title: element.title, position: element.position })
            this.seo.push(item)
          });
          break;
        case 'Branding':
          item.images.forEach(element => {
            const item = new ImageItem({ src: element.img, title: element.title, position: element.position })
            this.brandingItems.push(item)
          });
          break;
        case 'Print':
          item.images.forEach(element => {
            const item = new ImageItem({ src: element.img, title: element.title, position: element.position })
            this.printItems.push(item)
          });
          break;
        case 'Video':
          item.images.forEach(element => {
            const item = new ImageItem({ src: element.img, title: element.title, position: element.position })
            this.videoItems.push(item)
          });
          break;

      }

    })

    console.log(this.itemsAll);
    console.log(this.itemsDesign);
    console.log(this.seo);


    // Load items into the lightbox gallery ref
    // lightboxRef.load(this.itemsAll);



    this.basicLightboxExample()
  }

  basicLightboxExample() {
    this.gallery.ref('lightbox').load(this.itemsAll);
  }

  openLightBox(index, label) {
    switch (label) {
      case 'All':
        {
          this.lightboxRef.reset();
          this.lightboxRef.load(this.itemsAll);
          this.lightbox.open(index)
        }
        break;
      case 'Design':
        {
          this.lightboxRef.reset();
          this.lightboxRef.load(this.itemsDesign);
          this.lightbox.open(index);
        }
        break;
      case 'SEO':
        {
          this.lightboxRef.reset();
          this.lightboxRef.load(this.seo);
          this.lightbox.open(index);
        }
        break;
      case 'Branding':
        {
          this.lightboxRef.reset();
          this.lightboxRef.load(this.brandingItems);
          this.lightbox.open(index);
        }
        break;
      case 'Print':
        {
          this.lightboxRef.reset();
          this.lightboxRef.load(this.printItems);
          this.lightbox.open(index);
        }
        break;
      case 'Video':
        {
          this.lightboxRef.reset();
          this.lightboxRef.load(this.videoItems);
          this.lightbox.open(index);
        }
        break;
    }
  }

  openCarouselDialog() {
    const dialogRef = this.dialog.open(CarouselDialogComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '80%',
      panelClass: 'full-screen-modal',
      backdropClass: 'backdropBackground',
      data: {
        images: this.portfolioTabs
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

const portfolioTabs = [
  {
    label: "All",
    images: [
      { img: '../assets/images/work-img1.jpg', title: 'Elegant Mockup', position: 'UI/UX' },
      { img: '../assets/images/work-img2.jpg', title: 'Internet Concept', position: 'Psd' },
      { img: '../assets/images/work-img3.jpg', title: 'Mupi Mockup', position: 'Pencil' },
      { img: '../assets/images/work-img4.jpg', title: 'Premium Template', position: 'Art' },
      { img: '../assets/images/work-img5.jpg', title: 'Pencil Art', position: 'Business' },
      { img: '../assets/images/work-img6.jpg', title: 'Front View Psd', position: 'PsdDesign' }
    ],

  },
  {
    label: "Design",
    images: [
      { img: '../assets/images/work-img1.jpg', title: 'Elegant Mockup', position: 'UI/UX' },
      { img: '../assets/images/work-img4.jpg', title: 'Premium Template', position: 'Art' },
      { img: '../assets/images/work-img6.jpg', title: 'Front View Psd', position: 'PsdDesign' }
    ],
  },
  {
    label: "SEO",
    images: [
      { img: '../assets/images/work-img2.jpg', title: 'Internet Concept', position: 'Psd' },
      { img: '../assets/images/work-img6.jpg', title: 'Front View Psd', position: 'PsdDesign' }
    ],
  },
  {
    label: "Branding",
    images: [
      { img: '../assets/images/work-img3.jpg', title: 'Mupi Mockup', position: 'Pencil' },
      { img: '../assets/images/work-img5.jpg', title: 'Pencil Art', position: 'Business' },
    ],
  },
  {
    label: "Print",
    images: [
      { img: '../assets/images/work-img2.jpg', title: 'Internet Concept', position: 'Psd' },
      { img: '../assets/images/work-img4.jpg', title: 'Premium Template', position: 'Art' },
    ],
  },
  {
    label: "Video",
    images: [
      { img: '../assets/images/work-img3.jpg', title: 'Mupi Mockup', position: 'Pencil' },
      { img: '../assets/images/work-img5.jpg', title: 'Pencil Art', position: 'Business' },
    ],
  },
]
