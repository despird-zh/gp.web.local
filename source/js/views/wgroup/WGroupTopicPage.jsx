import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import ActCaseHub from 'material-ui/svg-icons/hardware/cast';
import ActThumbDown from 'material-ui/svg-icons/action/thumb-down';
import ActThumbUp from 'material-ui/svg-icons/action/thumb-up';
import TglStar from 'material-ui/svg-icons/toggle/star';
import TglStarBorder from 'material-ui/svg-icons/toggle/star-border';
import Avatar from 'material-ui/Avatar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import AuthConnect from '../component/AuthConnect';

function getStyles(muiTheme) {
  const { baseTheme:{ palette } } = muiTheme;
  console.log(palette)
  return {
    root: {
      display: 'flex',
      position: 'relative',
      marginTop: 10,
    },
    title:{
      textDecoration: 'none',
      color: palette.textColor,
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
    thumbBtn: {
      color: palette.primary2Color,
    },
    thumbInfo: {
      color: palette.secondaryTextColor,
      textAlign: 'center',
      fontWeight: 600,
    },
    timeStamp: {
      color: palette.accent3Color,
      float: 'right'
    },
    comments: {
      borderTopColor: palette.borderColor,
      borderTopWidth: 1,
      borderTopStyle: 'solid'
    }, 
    comment: {
      display: 'flex', 
      padding: 10,
      borderBottomColor: palette.borderColor,
      borderBottomWidth: 1,
      borderBottomStyle: 'solid'
    },
    account: {
      textDecoration: 'none' ,

    }
  };
}

class WGroupTopicPage extends React.Component {

  constructor(props) {
    super(props);
    this.styles = getStyles(props.muiTheme);
  }

  componentWillMount() {
    if (this.props.setCurrentPage) { this.props.setCurrentPage('topic'); }
  }

  componentDidMount() {
    const buttons = [
      <IconButton onTouchTap={ this.test }>
        <ActCaseHub />
      </IconButton>];
    const title = <a href='dhh' style={ this.styles.title }>Java regex to extract text sequences across multiple lines</a>;
    if (this.props.setCurrentPage) {
      this.props.setCurrentPage('topic', { title, buttons });
    }
  }

  test() {
    console.log('asdf');
  }
  render() {
    const styles = this.styles;

    return (
      <div style={ styles.root }>
        <div style={ styles.leftPanel }>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex' }}>
              <div style={{ flexBasis: 60, display: 'flex', flexDirection:'column', paddingLeft: 10, paddingRight:10}}>
                <Avatar src="assets/img/kerem-128.jpg"  style={{ marginLeft: 5 }} />
                <IconButton iconStyle={ styles.thumbBtn }><ActThumbUp/></IconButton>
                <div style={ styles.thumbInfo }>
                  1023
                </div>
                <IconButton iconStyle={ styles.thumbBtn }><ActThumbDown/></IconButton>
                <IconButton iconStyle={ styles.thumbBtn }><TglStarBorder/></IconButton>
              </div>
              <div style={{ flex: 1 }}>
                <div>
                  <a href="/sf" style={ styles.account }>
                    <span style={{ fontWeight: 600}}>akuzko</span> Artme Kuzko
                  </a> 
                  <span style={ styles.timeStamp }>6days</span>
                </div>
                <div>
                  <p>Hey guys!</p>

                  <p>If you use vanilla redux in your app and ever got tired writing structures like</p>

                  <p>I understand there are things like React's Immutability Helpers and <code>immutable-js</code>, but if you don't want to have additional data abstraction layer and just want simple helpers with, basically, no special API, <code>update-js</code> might serve you well.</p>

                  <p>Any comments and feedback are very welcome.</p>

                  <p>Thanks and happy coding!</p>
                </div>
                <div style={{ position:'relative', right: 0, width:40}}>
                      <FloatingActionButton mini={true} style={30}>
                        <ContentAdd />
                      </FloatingActionButton>
                </div>
                <div style={ styles.comments }>
                  <div style={ styles.comment }>
                    <div style={{ flexBasis: 50, height: 30}}>
                      <Avatar src="assets/img/kerem-128.jpg" size={30} style={{ marginLeft: 5 }} />
                    </div>
                    <div style={{ flex:1,verticalAligh: 'top', fontSize: 14, lineHeight: 1.4 }}>
                     <span >Does it mean you need to get multiple matches of the 
                     non-whitespace chunks that have some horizontal whitespaces on the 
                     subsequent lines after <code>Main :</code>?</span>
                     <a href="sf" style={ styles.account }>auset</a><span style={ styles.timeStamp }>Dec 20 16 at 23:58</span>
                    </div>
                  </div>
                  <div style={ styles.comment }>
                    <div style={{ flexBasis: 50, height: 30}}>
                      <Avatar src="assets/img/kerem-128.jpg" size={30} style={{ marginLeft: 5 }} />
                    </div>
                    <div style={{ flex:1, verticalAligh: 'top', textAlign: 'left', fontSize: 14, lineHeight: 1.4 }}>
                     <span >Does it mean you need to get multiple matches ?</span>
                     <a href="sf" style={ styles.account }>auset</a><span style={ styles.timeStamp }>Dec 20 16 at 23:58</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={ styles.rightPanel }>
          sdf
        </div>
      </div>
    );
  }
}

WGroupTopicPage.propTypes = {
  setCurrentPage: PropTypes.func,
  muiTheme: PropTypes.object,
};

const NewComponent = AuthConnect(
  WGroupTopicPage,
  (state) => ({
    wgrouplist: state.wgroup.get('wgrouplist'),
  }),
  { });

export default NewComponent;
