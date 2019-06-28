import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntagramComponent } from './intagram.component';

describe('IntagramComponent', () => {
  let component: IntagramComponent;
  let fixture: ComponentFixture<IntagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
