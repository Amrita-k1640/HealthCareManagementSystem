import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCentreComponent } from './update-centre.component';

describe('UpdateCentreComponent', () => {
  let component: UpdateCentreComponent;
  let fixture: ComponentFixture<UpdateCentreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCentreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
