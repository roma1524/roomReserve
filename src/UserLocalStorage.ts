interface local  {
  userName: string
  avatarUrl: string
  fAmount: number
}

export const userDataBase: local = {
  userName: getUserData()['userName'],
  avatarUrl: getUserData()['avatarUrl'],
  fAmount: +getFavoritesAmount(),
};

function getUserData(): unknown {
  const userData = JSON.parse(localStorage.getItem('user'));

  return userData;
}

function getFavoritesAmount():unknown {
  return localStorage.getItem('favoritesAmount')
}
