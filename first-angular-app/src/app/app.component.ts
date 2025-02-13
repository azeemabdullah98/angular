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
  title = 'first-angular-app';
  users = DUMMY_USERS;
  selected_uid!: string;

  get selectUser() {
    return this.users.find((user) => user.id === this.selected_uid)!;
  }

  onSelectUser(id: string) {
    // console.log('selected user with id ' + id);
    this.selected_uid = id;
  }
}
