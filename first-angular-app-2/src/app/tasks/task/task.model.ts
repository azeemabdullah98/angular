export interface Task {
  id: number;
  uid: string;
  title: string;
  summary: string;
  dueDate: string;
}

export interface NewTask {
  title: string;
  summary: string;
  dueDate: string;
}
