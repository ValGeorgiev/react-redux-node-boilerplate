import React, { Component } from 'react'
import LanguageSelector from '../LanguageSelector/LanguageSelector'
import { translate } from 'translations'
import './header.scss'

class Header extends Component {
  render () {
    return (
      <div className='header__wrapper'>
        {'Header'}
        <LanguageSelector />
      </div>
    )
  }
}

export default Header
