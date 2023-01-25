import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationTodoListComponent } from './registration-todo-list.component';

describe('RegistrationTodoListComponent', () => {
  let component: RegistrationTodoListComponent;
  let fixture: ComponentFixture<RegistrationTodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationTodoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationTodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
