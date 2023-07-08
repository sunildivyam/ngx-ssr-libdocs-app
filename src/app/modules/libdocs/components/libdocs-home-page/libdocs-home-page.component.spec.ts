import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibdocsHomePageComponent } from './libdocs-home-page.component';

describe('LibdocsHomePageComponent', () => {
  let component: LibdocsHomePageComponent;
  let fixture: ComponentFixture<LibdocsHomePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibdocsHomePageComponent]
    });
    fixture = TestBed.createComponent(LibdocsHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
