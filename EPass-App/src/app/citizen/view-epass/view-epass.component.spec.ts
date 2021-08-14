import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEpassComponent } from './view-epass.component';

describe('ViewEpassComponent', () => {
  let component: ViewEpassComponent;
  let fixture: ComponentFixture<ViewEpassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEpassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
