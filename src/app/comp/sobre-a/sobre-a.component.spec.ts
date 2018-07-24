import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreAComponent } from './sobre-a.component';

describe('SobreAComponent', () => {
  let component: SobreAComponent;
  let fixture: ComponentFixture<SobreAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SobreAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SobreAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
