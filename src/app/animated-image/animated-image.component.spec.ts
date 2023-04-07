import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedImageComponent } from './animated-image.component';

describe('AnimatedImageComponent', () => {
  let component: AnimatedImageComponent;
  let fixture: ComponentFixture<AnimatedImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimatedImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimatedImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
