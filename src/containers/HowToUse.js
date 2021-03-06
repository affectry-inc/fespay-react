import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl'

import muiThemeable from 'material-ui/styles/muiThemeable'
import One from 'material-ui/svg-icons/image/looks-one'
import Two from 'material-ui/svg-icons/image/looks-two'
import Three from 'material-ui/svg-icons/image/looks-3'
import Four from 'material-ui/svg-icons/image/looks-4'

import stepOneImage from '../img/step_1.png'
import stepTwoImage from '../img/step_2.png'
import stepThreeImage from '../img/step_3.png'
import stepFourImage from '../img/step_4.png'

import * as SignUpActions from '../actions/signUp'

const styles = {
  title: {
    padding: '0 14px',
    fontWeight: '500',
    height: '64px',
    alignItems: 'center',
    display: 'flex'
  },
  titleIcon: {
    paddingRight: '8px',
    paddingTop: '5px'
  },
  body: {
    borderLeft: '1px solid lightGray',
    marginTop: '-14px',
    marginLeft: '25px',
    padding: '16px 16px 30px 21px',
    overflow: 'hidden'
  },
}

class HowToUse extends Component {

  componentWillUnmount() {
    if (this.props.isNew) {
      this.props.actions.clear()
    }
  }

  render() {

    const { muiTheme, isNew } = this.props

    return (
      <Grid>
        <Row center='xs'>
          <Col xs={ 12 }>
            {
              isNew &&
              <h1 style={{ margin: '3em 0', color: muiTheme.palette.primary1Color }}>
                <FormattedMessage
                  id='howToUse.signUpSuccess'
                  defaultMessage='You are signed up successfully!'
                />
              </h1>
            }
            <h2>
              <FormattedMessage
                id='howToUse.howToUse'
                defaultMessage='How to Use'
              />
            </h2>
          </Col>
        </Row>
        <Row center='xs'>
          <Col xs={ 12 } sm={ 8 } mdOffset={ 1 } md={ 6 }>
            <InstructionPanel
              stepIcon={ <One color={ muiTheme.palette.primary1Color } /> }
              titleIntlId='howToUse.title1'
              bodyIntlId='howToUse.body1'
              bodyImg={ stepOneImage }
            />
          </Col>
          <Col xs={ 12 } sm={ 8 } mdOffset={ 1 } md={ 6 }>
            <InstructionPanel
              stepIcon={ <Two color={ muiTheme.palette.primary1Color } /> }
              titleIntlId='howToUse.title2'
              bodyIntlId='howToUse.body2'
              bodyImg={ stepTwoImage }
            />
          </Col>
          <Col xs={ 12 } sm={ 8 } mdOffset={ 1 } md={ 6 }>
            <InstructionPanel
              stepIcon={ <Three color={ muiTheme.palette.primary1Color } /> }
              titleIntlId='howToUse.title3'
              bodyIntlId='howToUse.body3'
              bodyImg={ stepThreeImage }
            />
          </Col>
          <Col xs={ 12 } sm={ 8 } mdOffset={ 1 } md={ 6 }>
            <InstructionPanel
              stepIcon={ <Four color={ muiTheme.palette.primary1Color } /> }
              titleIntlId='howToUse.title4'
              bodyIntlId='howToUse.body4'
              bodyImg={ stepFourImage }
            />
          </Col>
        </Row>
      </Grid>
    )
  }
}


class InstructionPanel extends Component {
  render() {

    const { stepIcon, titleIntlId, bodyIntlId, bodyImg } = this.props

    return (
      <Row>
        <Col xs={ 12 }>
          <Row start='xs'>
            <Col xs={ 12 } style={ styles.title }>
              <span style={ styles.titleIcon }>
                { stepIcon }
              </span>
              <span>
                <FormattedHTMLMessage
                  id={ titleIntlId }
                  defaultMessage=''
                />
              </span>
            </Col>
          </Row>
          <Row start='xs'>
            <Col xs={ 11 } style={ styles.body }>
              <div style={{ marginBottom: '20px' }}>
                <FormattedHTMLMessage
                  id={ bodyIntlId }
                  defaultMessage=''
                />
              </div>
              <img
                src={ bodyImg }
                alt=''
                style={{ width: '100%' }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}

function mapStateToProps(state) {
  return {
    isNew: state.signUp.isNew
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(SignUpActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(muiThemeable()(HowToUse))
