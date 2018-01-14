import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as ACTIONS from 'actions'
import { translate } from 'translations'
import MetaTags from 'components/generics/MetaTags/MetaTags'
import Header from 'components/generics/Header/Header'
import Footer from 'components/generics/Footer/Footer'

import 'styles/pages/home.scss'

class Home extends Component {
  componentWillMount () {
    const {
      actions
    } = this.props

  }

  render () {
    const meta = {
      title: `${translate('project.name')}`,
      location: window.location.href,
      index: true,
      keywords: `${translate('project.keywords')}`,
      description: `${translate('project.description')}`
    }

    return (
      <div className='home-page'>
        <MetaTags {...meta} />
        <Header />
        <Footer />
      </div>
    )
  }
}

Home.defaultProps = {

}

Home.propTypes = {

}

const mapStateToProps = (state) => {
  const props = {

  }
  return props
}

const mapDispatchToProps = (dispatch) => {
  const actions = ACTIONS
  const actionMap = { actions: bindActionCreators(actions, dispatch) }
  return actionMap
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
