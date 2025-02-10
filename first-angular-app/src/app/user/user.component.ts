import {
  Component,
  signal,
  computed,
  Input,
  input,
  Output,
  EventEmitter,
  output,
} from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

import { type User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent],
})
export class UserComponent {
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  // @Output() select = new EventEmitter<string>();
  @Input({ required: true }) users!: User;
  @Input({ required: true }) selected!: boolean;
  select = output<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();
  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });

  // selectedUser = DUMMY_USERS[randomIndex];
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }

  get imagePath() {
    return 'assets/users/' + this.users.avatar;
  }

  onSelectUser() {
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser = DUMMY_USERS[randomIndex];
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
    this.select.emit(this.users.id);
  }
}
