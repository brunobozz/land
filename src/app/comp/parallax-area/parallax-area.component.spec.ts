import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallaxAreaComponent } from './parallax-area.component';

describe('ParallaxAreaComponent', () => {
  let component: ParallaxAreaComponent;
  let fixture: ComponentFixture<ParallaxAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParallaxAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParallaxAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
