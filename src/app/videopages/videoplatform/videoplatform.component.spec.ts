import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoplatformComponent } from './videoplatform.component';

describe('VideoplatformComponent', () => {
  let component: VideoplatformComponent;
  let fixture: ComponentFixture<VideoplatformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoplatformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoplatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
