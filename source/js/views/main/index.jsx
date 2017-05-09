import React, { Component } from 'react';
import PropTypes from 'prop-types';

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper';
import { grey200 } from 'material-ui/styles/colors';
import typography from 'material-ui/styles/typography';
import HeaderBar from './HeaderBar';
import FooterBar from './FooterBar';
import SigninDialog from '../../components/Signin/SigninDialog';
import AffiliateBars from '../../components/AffiliateBars';

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
  constructor(props) {
    super(props);
  }
  setWrapperRef = (el) => {
    this.wrapper = el;
  }
  setPageBodyRef = (el) => {
    this.pageBody = el;
  }
  resetPageBodyHeight = () => {
    if(this.wrapper && this.pageBody){
      let bodyHeight = this.pageBody.offsetHeight;
      let wrapperHeight = this.wrapper.offsetHeight;
      if( wrapperHeight > bodyHeight + 108)
        this.pageBody.style.height = (wrapperHeight - 108)+'px';
    }
  }
  componentDidUpdate = () => {
    this.resetPageBodyHeight();
  }
  componentDidMount = () => {
    this.resetPageBodyHeight();
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={ rootTheme }>
        <div ref={ this.setWrapperRef } className='wrapper'>
          <Paper style={ styles.header } className='header'>
            <HeaderBar />
          </Paper>
          <div ref= { this.setPageBodyRef } className='body'>
            <div className='content'>
              {this.props.children}
            </div>
            <SigninDialog />
            <AffiliateBars />
          </div>
          <div  className='footer'>
            <FooterBar style={ styles.footer }/>
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
