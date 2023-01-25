import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTodoListComponent } from './list-todo-list.component';

describe('ListTodoListComponent', () => {
  let component: ListTodoListComponent;
  let fixture: ComponentFixture<ListTodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTodoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
