import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolQuestionComponent } from './pool-question.component';

describe('PoolQuestionComponent', () => {
  let component: PoolQuestionComponent;
  let fixture: ComponentFixture<PoolQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoolQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
