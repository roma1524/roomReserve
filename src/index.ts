import {renderSearchFormBlock} from './search-form.js'
import {renderSearchStubBlock} from './search-results.js'
import { renderUserBlock } from "./renderUserBlock.js";
import {userDataBase} from "./UserLocalStorage.js";
import {renderToast} from './lib.js'


window.addEventListener('DOMContentLoaded', () => {
  localStorage.clear()
  localStorage.setItem('user', JSON.stringify({'userName': 'Roman_K', 'avatarUrl': '/img/avatar.png'}))
  localStorage.setItem('favoritesAmount', '3')

  renderUserBlock(userDataBase)
  renderSearchFormBlock()
  renderSearchStubBlock()
  renderToast(
    {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
    {
      name: 'Понял', handler: () => {
        console.log('Уведомление закрыто111')
      }
    }
  )

})
