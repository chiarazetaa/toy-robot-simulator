import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotControlComponent } from './robot-control.component';

describe('RobotControlComponent', () => {
  let component: RobotControlComponent;
  let fixture: ComponentFixture<RobotControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RobotControlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RobotControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
