export type PostType = {
  id: string
  user: string
  body: string
  avatarColor: string
  createdAt: string
}

export const postList: PostType[] = [
  {
    id: 'some-id1',
    user: '이우혁',
    body: '안녕',
    avatarColor: '#ffb199',
    createdAt: '2022-11-22',
  },
  {
    id: 'some-id2',
    user: '이웅재',
    body: '부럽다',
    avatarColor: '#a3b1ff',
    createdAt: '2022-11-44',
  },
]
