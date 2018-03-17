import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstanceLoginComponent } from './instance-login.component';

describe('InstanceLoginComponent', () => {
  let component: InstanceLoginComponent;
  let fixture: ComponentFixture<InstanceLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstanceLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstanceLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
