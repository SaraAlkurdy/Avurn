import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreativeSolutionsComponent } from './creative-solutions.component';

describe('CreativeSolutionsComponent', () => {
  let component: CreativeSolutionsComponent;
  let fixture: ComponentFixture<CreativeSolutionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreativeSolutionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreativeSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
