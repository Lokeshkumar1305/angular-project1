import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MybuttonsComponent } from './mybuttons.component';

describe('MybuttonsComponent', () => {
  let component: MybuttonsComponent;
  let fixture: ComponentFixture<MybuttonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MybuttonsComponent]
    });
    fixture = TestBed.createComponent(MybuttonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
