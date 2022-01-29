import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberSpeaksComponent } from './number-speaks.component';

describe('NumberSpeaksComponent', () => {
  let component: NumberSpeaksComponent;
  let fixture: ComponentFixture<NumberSpeaksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberSpeaksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberSpeaksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
