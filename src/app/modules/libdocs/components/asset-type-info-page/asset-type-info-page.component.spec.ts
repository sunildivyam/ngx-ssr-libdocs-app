import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetTypeInfoPageComponent } from './asset-type-info-page.component';

describe('AssetTypeInfoPageComponent', () => {
  let component: AssetTypeInfoPageComponent;
  let fixture: ComponentFixture<AssetTypeInfoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssetTypeInfoPageComponent]
    });
    fixture = TestBed.createComponent(AssetTypeInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
