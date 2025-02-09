import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'first-angular-app';
  users = DUMMY_USERS;
  selected_uid = 'u1';

  get selectUser() {
    return this.users.find((user) => user.id === this.selected_uid)!;
  }

  onSelectUser(id: string) {
    // console.log('selected user with id ' + id);
    this.selected_uid = id;
  }
}
