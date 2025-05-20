import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: false,
  // imports: [HeaderComponent, UserComponent, TasksComponent, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'first-angular-app-2';
  users = DUMMY_USERS;
  selectedUser?: string;

  get selectedUserName() {
    return this.users.find((user) => user.id === this.selectedUser);
  }

  onSelectUser(id: string) {
    // console.log('selected user with id:' + id);
    this.selectedUser = id;
  }
}
