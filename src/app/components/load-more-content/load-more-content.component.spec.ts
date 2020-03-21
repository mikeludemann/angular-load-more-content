import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadMoreContentComponent } from './load-more-content.component';

describe('LoadMoreContentComponent', () => {
  let component: LoadMoreContentComponent;
  let fixture: ComponentFixture<LoadMoreContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadMoreContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadMoreContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
