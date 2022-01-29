export type PostType = {
  id: string
  name: string
  body: string
  avatarColor: string
  createdAt: string
  password: string
}

export const postList: PostType[] = [
  {
    id: 'some-id1',
    name: '이우혁',
    body: '안녕',
    avatarColor: '#ffb199',
    createdAt: '2022-11-22',
    password: '1111',
  },
  {
    id: 'some-id2',
    name: '이웅재',
    body: '부럽다',
    avatarColor: '#a3b1ff',
    createdAt: '2022-11-44',
    password: '0000',
  },
]
