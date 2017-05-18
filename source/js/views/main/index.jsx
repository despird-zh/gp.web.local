import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Throttle from 'lodash.throttle';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper';
import { grey200 } from 'material-ui/styles/colors';
import typography from 'material-ui/styles/typography';
import HeaderBar from './HeaderBar';
import FooterBar from './FooterBar';
import SigninDialog from '../component/Signin/SigninDialog';
import AffiliateBars from '../component/AffiliateBars';

const rootTheme = getMuiTheme(lightBaseTheme);

const styles = {

  header: {
    background: rootTheme.appBar.color,
  },
  footer: {
    background: grey200,
    height: 44,
    color: typography.textDarkBlack,
  },

};

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends Component {

  componentDidMount = () => {
    this.resetPageBodyHeight();
    this.resizeThrottle = Throttle(this.resetPageBodyHeight, 200);
    window.addEventListener('resize', this.resizeThrottle);
  }

  componentDidUpdate = () => {
    this.resetPageBodyHeight();
  }

  componentWillUnmount= () => {
    window.removeEventListener('resize', this.resizeThrottle);
  }

  setPageBodyRef = (el) => {
    this.pageBody = el;
  }

  setPageContentRef = (el) => {
    this.pageContent = el;
  }

  resetPageBodyHeight = () => {
    const w = window;
    const d = document;
    const documentElement = d.documentElement;
    const body = d.getElementsByTagName('body')[0];
    const outerHeight = w.innerHeight || documentElement.clientHeight || body.clientHeight;

    if (this.pageContent && this.pageBody) {
      this.pageBody.style.minHeight = `${ outerHeight - 60 }px`;
      this.pageContent.style.minHeight = `${ outerHeight - 124 }px`;
    }
  }

  render() {

    return (
      <MuiThemeProvider muiTheme={ rootTheme }>
        <div className='wrapper'>
          <Paper style={ styles.header } className='header'>
            <HeaderBar />
          </Paper>
          <div ref={ this.setPageBodyRef } className='body'>
            <div ref={ this.setPageContentRef } className='content'>
              {this.props.children}
            </div>
            <SigninDialog />
            <AffiliateBars />
          </div>
          <div className='footer'>
            <FooterBar style={ styles.footer } />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
};

export default App;
