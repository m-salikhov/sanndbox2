//Это Entity в db
export type User = {
  id: number;
  name: string;
  username: string;
  password: string;
};

export const usersDB: User[] = [
  {
    id: 1,
    name: 'Maks',
    username: 'Feid',
    password: 'pass',
  },
  {
    id: 2,
    name: 'Lera',
    username: 'Myach',
    password: 'pass1',
  },
  {
    id: 3,
    name: 'King Gizzard',
    username: 'Lizzard Wizzard',
    password: 'pass2',
  },
];
