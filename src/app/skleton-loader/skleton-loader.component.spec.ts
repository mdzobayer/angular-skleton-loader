import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkletonLoaderComponent } from './skleton-loader.component';

describe('SkletonLoaderComponent', () => {
  let component: SkletonLoaderComponent;
  let fixture: ComponentFixture<SkletonLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkletonLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkletonLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
