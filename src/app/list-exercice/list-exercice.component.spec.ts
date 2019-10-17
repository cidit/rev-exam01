import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExerciceComponent } from './list-exercice.component';

describe('ListExerciceComponent', () => {
  let component: ListExerciceComponent;
  let fixture: ComponentFixture<ListExerciceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListExerciceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListExerciceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
