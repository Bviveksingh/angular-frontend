import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertDialogBodyComponent } from './alert-dialog-body.component';

describe('AlertDialogBodyComponent', () => {
  let component: AlertDialogBodyComponent;
  let fixture: ComponentFixture<AlertDialogBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertDialogBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertDialogBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
