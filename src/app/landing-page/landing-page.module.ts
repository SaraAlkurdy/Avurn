import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { HomeComponent } from './components/_Home/home/home.component';
import { FeaturesComponent } from './components/_Home/features/features.component';
import { AboutComponent } from './components/_About/about/about.component';
import { StartProjectComponent } from './components/_About/start-project/start-project.component';
import { BlogComponent } from './components/_Blog/blog/blog.component';
import { SmartWebsiteComponent } from './components/_Blog/smart-website/smart-website.component';
import { ContactComponent } from './components/_Contact/contact/contact.component';
import { CreativeSolutionsComponent } from './components/_Portfolio/creative-solutions/creative-solutions.component';
import { NumberSpeaksComponent } from './components/_Portfolio/number-speaks/number-speaks.component';
import { PortfolioComponent } from './components/_Portfolio/portfolio/portfolio.component';
import { PricingComponent } from './components/_Pricing/pricing/pricing.component';
import { ServicesComponent } from './components/_Services/services/services.component';
import { SkillsComponent } from './components/_Services/skills/skills.component';
import { WhoWeAreComponent } from './components/_Services/who-we-are/who-we-are.component';
import { OurStoryComponent } from './components/_Team/our-story/our-story.component';
import { TeamComponent } from './components/_Team/team/team.component';
import { BestCompanyComponent } from './components/_Testimonial/best-company/best-company.component';
import { FaqComponent } from './components/_Testimonial/faq/faq.component';
import { PartnersComponent } from './components/_Testimonial/partners/partners.component';
import { TestimonialComponent } from './components/_Testimonial/testimonial/testimonial.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatButtonModule, MatDialogModule, MatIconModule, MatProgressBarModule, MatTabsModule, MatExpansionModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { OwlModule } from 'ngx-owl-carousel';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BlogDetailsModule } from '../blog-details/blog-details.module';
import { CarouselDialogComponent } from './components/_Portfolio/carousel-dialog/carousel-dialog.component';
import { GalleryModule } from '@ngx-gallery/core';
import { LightboxModule } from '@ngx-gallery/lightbox';
import { GallerizeModule } from '@ngx-gallery/gallerize';
// import { NgxGalleryModule } from 'ngx-gallery';
// import { LightboxModule } from 'ngx-lightbox';

@NgModule({
  declarations: [
    HomeComponent,
    FeaturesComponent,
    AboutComponent,
    StartProjectComponent,
    ServicesComponent,
    WhoWeAreComponent,
    SkillsComponent,
    PortfolioComponent,
    CreativeSolutionsComponent,
    NumberSpeaksComponent,
    TeamComponent,
    OurStoryComponent,
    PricingComponent,
    TestimonialComponent,
    BestCompanyComponent,
    FaqComponent,
    PartnersComponent,
    ContactComponent,
    BlogComponent,
    SmartWebsiteComponent,
    LandingPageComponent,
    CarouselDialogComponent,

  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatTabsModule,
    RouterModule,
    MatCarouselModule.forRoot(),
    CdkAccordionModule,
    OwlModule,
    BlogDetailsModule,
    MatDialogModule,
    GalleryModule,
    LightboxModule,
    GallerizeModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule
    // NgxGalleryModule
  ],
  entryComponents: [CarouselDialogComponent]
})
export class LandingPageModule { }
