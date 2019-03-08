import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAlbumsComponent } from './user-albums.component';

describe('UserAlbumsComponent', () => {
  let component: UserAlbumsComponent;
  let fixture: ComponentFixture<UserAlbumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAlbumsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
