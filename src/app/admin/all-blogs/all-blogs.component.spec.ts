import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBlogsComponent } from './all-blogs.component';

describe('AllBlogsComponent', () => {
  let component: AllBlogsComponent;
  let fixture: ComponentFixture<AllBlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllBlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
