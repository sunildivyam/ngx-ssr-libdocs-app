import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetInfoPageComponent } from './asset-info-page.component';

describe('AssetInfoPageComponent', () => {
  let component: AssetInfoPageComponent;
  let fixture: ComponentFixture<AssetInfoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssetInfoPageComponent]
    });
    fixture = TestBed.createComponent(AssetInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
