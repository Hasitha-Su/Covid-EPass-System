import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticateEpassComponent } from './authenticate-epass.component';

describe('AuthenticateEpassComponent', () => {
  let component: AuthenticateEpassComponent;
  let fixture: ComponentFixture<AuthenticateEpassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthenticateEpassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticateEpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
