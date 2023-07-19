import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempleFormComponent } from './temple-form.component';

describe('TempleFormComponent', () => {
  let component: TempleFormComponent;
  let fixture: ComponentFixture<TempleFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TempleFormComponent],
    });
    fixture = TestBed.createComponent(TempleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
