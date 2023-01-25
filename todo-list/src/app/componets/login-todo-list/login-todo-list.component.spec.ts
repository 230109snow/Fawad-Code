import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTodoListComponent } from './login-todo-list.component';

describe('LoginTodoListComponent', () => {
  let component: LoginTodoListComponent;
  let fixture: ComponentFixture<LoginTodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginTodoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginTodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
