import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MatButtonModule, MatIconModule, MatProgressBarModule, MatTabsModule } from '@angular/material';
import { BlogDetailsModule } from './blog-details/blog-details.module';
import { NgxSpinnerModule } from "ngx-spinner";
import { VideoDialogComponent } from './shared/video-dialog/video-dialog.component';
import { Ng2PageScrollModule } from 'ng2-page-scroll';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    VideoDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    MatIconModule,
    BlogDetailsModule,
    NgxSpinnerModule,
    Ng2PageScrollModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
  entryComponents: [VideoDialogComponent]
})
export class AppModule { }
