import { renderBlock } from './lib.js'


export function renderUserBlock ( {userName, avatarUrl, fAmount}) {
  const favoritesCaption = fAmount ? fAmount : 'ничего нет'
  const hasFavoriteItems = fAmount ? true : false;

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src=${avatarUrl} alt=${userName} />
      <div class="info">
          <p class="name">${userName}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  )
}
