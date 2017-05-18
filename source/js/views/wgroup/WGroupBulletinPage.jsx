import React from 'react';
import PropTypes from 'prop-types';

import AuthConnect from '../component/AuthConnect';
import WGroupProfileLite from './WGroupProfileLite';

function getStyles(muiTheme) {
  const { baseTheme } = muiTheme;
  return {
    root: {
      display: 'flex',
      position: 'relative',
      marginTop: 10,
    },
    leftPanel: {
      flex: 1,
      paddingRight: 10,
    },
    rightPanel: {
      paddingLeft: 10,
      flexGrow: 0,
      flexShrink: 0,
      flexBasis: 300,
    },
  };
}

class WGroupBulletinPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = { profileExpand: false };
    this.styles = getStyles(props.muiTheme);
  }

  componentWillMount() {
    if (this.props.setCurrentPage) { this.props.setCurrentPage('bulletin'); }
    
  }


  render() {
    const styles = this.styles;

    return (
      <div style={ Object.assign(this.props.style, styles.root) }>
        <div style={ styles.leftPanel }>
        <div style={{ width:'100%'}}>

        </div>
        </div>
        <WGroupProfileLite muiTheme={ this.props.muiTheme } style={ styles.rightPanel } />
      </div>
    );
  }
}

WGroupBulletinPage.propTypes = {
  setCurrentPage: PropTypes.func,
  muiTheme: PropTypes.object,
};

const NewComponent = AuthConnect(
  WGroupBulletinPage,
  (state) => ({
    wgrouplist: state.wgroup.get('wgrouplist'),
  }),
  {  });

export default NewComponent;