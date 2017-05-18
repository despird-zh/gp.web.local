import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';

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
      backgroundColor: '#e5e5e5'
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
        <ol style={{ width:'100%',
                  listStyle: 'none',
                  background: 'none',
                  margin: 0,
                  padding: '0 0 50px 0',
                  marginTop: 10,
                  marginBottom: 10,
                  }}>
          <li style={{
            padding: '0.5rem',
            overflow: 'hidden',
            display: 'flex'
          }}>
            <div style={{
                width: 40,
                height: 40,
                position: 'relative',
                display: 'block',
            }}>
              <Avatar src="assets/img/kerem-128.jpg" size={30} style={{ verticalAlign:'middle'}} />
            </div>
            <div class="msg">
              <p>Hola!</p>
              <p>Te vienes a cenar al centro? <emoji class="pizza"/></p>
              <time>20:17</time>
            </div>
          </li>
        </ol>
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