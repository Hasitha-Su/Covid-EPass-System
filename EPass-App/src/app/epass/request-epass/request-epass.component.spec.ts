import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestEpassComponent } from './request-epass.component';

describe('RequestEpassComponent', () => {
  let component: RequestEpassComponent;
  let fixture: ComponentFixture<RequestEpassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestEpassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestEpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
