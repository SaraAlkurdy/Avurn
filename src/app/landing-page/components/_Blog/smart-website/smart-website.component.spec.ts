import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartWebsiteComponent } from './smart-website.component';

describe('SmartWebsiteComponent', () => {
  let component: SmartWebsiteComponent;
  let fixture: ComponentFixture<SmartWebsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartWebsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
