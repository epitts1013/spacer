import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacePlannerComponent } from './space-planner.component';

describe('SpacePlannerComponent', () => {
  let component: SpacePlannerComponent;
  let fixture: ComponentFixture<SpacePlannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpacePlannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpacePlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
