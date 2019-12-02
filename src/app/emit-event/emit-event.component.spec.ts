import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmitEventComponent } from './emit-event.component';

describe('EmitEventComponent', () => {
  let component: EmitEventComponent;
  let fixture: ComponentFixture<EmitEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmitEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmitEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
