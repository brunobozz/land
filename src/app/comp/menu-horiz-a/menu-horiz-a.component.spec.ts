import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuHorizAComponent } from './menu-horiz-a.component';

describe('MenuHorizAComponent', () => {
  let component: MenuHorizAComponent;
  let fixture: ComponentFixture<MenuHorizAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuHorizAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuHorizAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
