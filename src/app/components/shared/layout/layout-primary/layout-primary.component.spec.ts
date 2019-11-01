import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutPrimaryComponent } from './layout-primary.component';

describe('LayoutPrimaryComponent', () => {
  let component: LayoutPrimaryComponent;
  let fixture: ComponentFixture<LayoutPrimaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutPrimaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
