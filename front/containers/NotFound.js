import React, { Component } from 'react'
import { translate } from 'translations'
import MetaTags from 'components/generics/MetaTags/MetaTags'
import Header from 'components/generics/Header/Header'
import Footer from 'components/generics/Footer/Footer'

import 'styles/pages/notfound.scss'

class NotFound extends Component {
  render () {
    const meta = {
      title: `${translate('project.name')} - ${translate('meta.notfound')}`,
      location: window.location.href,
      index: false
    }

    return (
      <div>
        <MetaTags {...meta} />
        <Header />
        <div className='error-page col col-xs-100'>
          <h1>{translate('error.title')}</h1>
          <div className='error-description'>
            <img className='col col-xs-100 col-md-30' src='/static/images/hermes.svg' alt='hermesgift' />
            <div className='col col-xs-100 col-md-70'>
              <p>{translate('error.description')}</p>
              <Asset asset={contactsAsset} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default NotFound
