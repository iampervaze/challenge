import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAddupdateComponent } from './profile-addupdate.component';

describe('ProfileAddupdateComponent', () => {
  let component: ProfileAddupdateComponent;
  let fixture: ComponentFixture<ProfileAddupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileAddupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAddupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
