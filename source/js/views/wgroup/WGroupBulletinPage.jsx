import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';

import AuthConnect from '../component/AuthConnect';
import WGroupProfileLite from './WGroupProfileLite';
import PageStyle from './WGroupBulletinPage.scss';

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
    chatList: {
      width:'100%',
      listStyle: 'none',
      background: 'none',
      margin: 0,
      padding: 0,
    },
    chatRow: {
      padding: 0,
      margin:'0 0 10px 0',
      overflow: 'hidden',
      display: 'flex'
    },
    chatMsg: {
      flex:1,
      display: 'block',
      position: 'relative',
    },
    chatSelf: {
      display: 'block',
      float: 'right',
      padding: 10,
      marginRight: 20,
      minWidth: 100,
      position: 'relative',
      fontSize: 14,
      borderRadius: 3,
      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)'
    },
    chatSide: {
      flexBasis: 60,
      flexShrink: 0,
      flexGrow: 0,
    }
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
        <div className={'chat'}>
          <ul style={ styles.chatList }>
            <li style={ styles.chatRow } className={'other'}>
              <div style={ styles.chatSide }>
              </div>
              <div style={ styles.chatMsg } >
                <div style={ styles.chatSelf } className={'message'}>
                  <p>
                    Itaque quod et dolore accusantium. Labore aut similique ab voluptas rerum quia. Reprehenderit voluptas doloribus ut nam tenetur ipsam.
                  </p>
                </div>
              </div>
              <div style={ styles.chatSide }>
                <Avatar src="assets/img/kerem-128.jpg" size={40} style={{ marginLeft:5}} />
              </div>
            </li>
            <li style={ styles.chatRow } className={'other'}>
              <div style={ styles.chatSide }>
              </div>
              <div style={ styles.chatMsg } className={'clearfix'}>
                <div style={ styles.chatSelf } className={'message'}>
                  <p>
                    Itaque quod et dolore accusantium.
                  </p>
                </div>
              </div>
              <div style={ styles.chatSide }>
                <Avatar src="assets/img/kerem-128.jpg" size={40} style={{ marginLeft:5}} />
              </div>
            </li>
          </ul>
          <ul>

          <li className={'other'}>
            <a className={'user'} href="#"><img alt="" src="https://s3.amazonaws.com/uifaces/faces/twitter/toffeenutdesign/128.jpg"/></a>
            <div className={'date'}>
              2 minutes ago
            </div>
            <div className={'message'}>
              <div className={'hider'}>
                <span>Click to read</span>
              </div>
              <p>
                Itaque quod et dolore accusantium. Labore aut similique ab voluptas rerum quia. Reprehenderit voluptas doloribus ut nam tenetur ipsam.
              </p>
            </div>
          </li>
          <li className={'other'}>
            <a className={'user'} href="#"><img alt="" src="https://s3.amazonaws.com/uifaces/faces/twitter/toffeenutdesign/128.jpg"/></a>
            <div className={'date'}>
              5 minutes ago
            </div>
            <div className={'message'}>
              <div className={'hider'}>
                <span>Click to read</span>
              </div>
              <p>
                Modi ratione aliquid non. Et porro deserunt illum sed velit necessitatibus. Quis fuga et et fugit consequuntur. Et veritatis fugiat veniam pariatur maxime iusto aperiam.
              </p>
            </div>
          </li>
          <li className={'you'}>
            <a className={'user'} href="#"><img alt="" src="https://s3.amazonaws.com/uifaces/faces/twitter/igorgarybaldi/128.jpg"/></a>
            <div className={'date'}>
              7 minutes ago
            </div>
            <div className={'message'}>
              <div className={'hider'}>
                <span>Click to read</span>
              </div>
              <p>
                Provident impedit atque nemo culpa et modi molestiae. Error non dolorum voluptas non a. Molestiae et nobis nisi sed.
              </p>
            </div>
          </li>
          <li className={'other'}>
            <a className={'user'} href="#"><img alt="" src="https://s3.amazonaws.com/uifaces/faces/twitter/toffeenutdesign/128.jpg"/></a>
            <div className={'date'}>
              8 minutes ago
            </div>
            <div className={'message'}>
              <div className={'hider'}>
                <span>Click to read</span>
              </div>
              <p>
                Id vel ducimus perferendis fuga excepturi nulla. Dolores dolores amet et laborum facilis. Officia magni ut non autem et qui incidunt. Qui similique fugit vero porro qui cupiditate.
              </p>
            </div>
          </li>
          <li className={'you'}>
            <a className={'user'} href="#"><img alt="" src="https://s3.amazonaws.com/uifaces/faces/twitter/igorgarybaldi/128.jpg"/></a>
            <div className={'date'}>
              10 minutes ago
            </div>
            <div className={'message'}>
              <div className={'hider'}>
                <span>Click to read</span>
              </div>
              <p>
                Provident impedit atque nemo culpa et modi molestiae. Error non dolorum voluptas non a. Molestiae et nobis nisi sed.
              </p>
            </div>
          </li>
          <li className={'you'}>
            <a className={'user'} href="#"><img alt="" src="https://s3.amazonaws.com/uifaces/faces/twitter/igorgarybaldi/128.jpg"/></a>
            <div className={'date'}>
              10 minutes ago
            </div>
            <div className={'message'}>
              <div className={'hider'}>
                <span>Click to read</span>
              </div>
              <p>
                Est ut at eum sed perferendis ea hic. Tempora perspiciatis magnam aspernatur explicabo ea. Sint atque quod.
              </p>
            </div>
          </li>
        </ul>
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