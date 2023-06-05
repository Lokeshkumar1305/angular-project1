import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiglePageComponent } from './sigle-page.component';

describe('SiglePageComponent', () => {
  let component: SiglePageComponent;
  let fixture: ComponentFixture<SiglePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SiglePageComponent]
    });
    fixture = TestBed.createComponent(SiglePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
