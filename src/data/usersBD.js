import { v4 as uuidv4 } from 'uuid';

export let usersArr = [
  {
    id: 'fbca86c7-d080-4466-8fce-657f9576060b',
    username: 'Ivan',
    age: 33,
    hobbies: ['photography', 'sudoku', 'cooking'],
  },
  {
    id: uuidv4(),
    username: 'Roma',
    age: 13,
    hobbies: ['video game', 'painting'],
  },
  {
    id: uuidv4(),
    username: 'Dina',
    age: 18,
    hobbies: ['writing', 'cooking', 'dance'],
  },
];