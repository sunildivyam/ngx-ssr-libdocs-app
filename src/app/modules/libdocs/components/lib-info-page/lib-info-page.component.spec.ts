import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibInfoPageComponent } from './lib-info-page.component';

describe('LibInfoPageComponent', () => {
  let component: LibInfoPageComponent;
  let fixture: ComponentFixture<LibInfoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibInfoPageComponent]
    });
    fixture = TestBed.createComponent(LibInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
