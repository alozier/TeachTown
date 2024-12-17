import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchTableExpandComponent } from './launch-table.component';

describe('LaunchTableExpandComponent', () => {
  let component: LaunchTableExpandComponent;
  let fixture: ComponentFixture<LaunchTableExpandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaunchTableExpandComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaunchTableExpandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
