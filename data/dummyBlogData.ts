export type BlogType = {
  id: string
  name: string
  body: string
  color: string
  createdAt: string
  password: string
}

export const blogList: BlogType[] = [
  {
    id: 'some-id1',
    name: 'austin lee',
    body: 'hello world this is austin lee',
    color: '#ffb199',
    createdAt: '2022-11-22',
    password: '1111',
  },
  {
    id: 'some-id2',
    name: 'taylor lee',
    body: 'hello world this is taylor lee',
    color: '#a3b1ff',
    createdAt: '2022-11-44',
    password: '0000',
  },
]
