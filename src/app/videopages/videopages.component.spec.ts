import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPagesComponent } from './videopages.component';

describe('VideopagesComponent', () => {
  let component: VideoPagesComponent;
  let fixture: ComponentFixture<VideoPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
