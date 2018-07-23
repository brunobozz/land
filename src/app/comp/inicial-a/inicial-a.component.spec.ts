import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicialAComponent } from './inicial-a.component';

describe('InicialAComponent', () => {
  let component: InicialAComponent;
  let fixture: ComponentFixture<InicialAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicialAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicialAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
