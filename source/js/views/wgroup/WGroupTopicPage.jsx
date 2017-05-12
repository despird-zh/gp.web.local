import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import ActGavel from 'material-ui/svg-icons/action/gavel';
import ActDone from 'material-ui/svg-icons/action/done';
import ActThumbDown from 'material-ui/svg-icons/action/thumb-down';
import ActThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ActThumbsUpDown from 'material-ui/svg-icons/action/thumbs-up-down';
import ActBookmark from 'material-ui/svg-icons/action/bookmark';
import ActTrackChng from 'material-ui/svg-icons/action/track-changes';
import ActVisibility from 'material-ui/svg-icons/action/visibility';
import ContentFlag from 'material-ui/svg-icons/content/flag';
import SocialShare from 'material-ui/svg-icons/social/share';
import TglStar from 'material-ui/svg-icons/toggle/star';
import TglStarBorder from 'material-ui/svg-icons/toggle/star-border';
import EditBubbleChrt from 'material-ui/svg-icons/editor/bubble-chart';
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
    iconBtn: {
      color: palette.primary2Color,
    },
    thumbInfo: {
      color: palette.secondaryTextColor,
      textAlign: 'center',
      fontWeight: 600,
    },
    answerSortBtn:{padding:12, width:44, height:44},
    answerSortBtnIcon:{ width:20, height:20 ,color: palette.primary2Color},
    timeStamp: {
      color: palette.accent3Color,
      marginRight: 10,
      float: 'right',
      fontSize: 12
    },
    post: {
      borderBottomColor: palette.borderColor,
      borderBottomWidth: 1,
      borderBottomStyle: 'solid',
    },
    answer:{
      paddingTop: 10,
      borderBottomColor: palette.borderColor,
      borderBottomWidth: 1,
      borderBottomStyle: 'solid',
    },
    sumTitle:{
      color: palette.accent3Color,
      display: 'block',
      fontSize: 12
    },
    comments: {
      position: 'relative'
    }, 
    comment: {
      display: 'flex', 
      padding: 10,
      borderTopColor: palette.borderColor,
      borderTopWidth: 1,
      borderTopStyle: 'solid',
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
    const styles = this.styles;
    const buttons = [
      <IconButton key="bookmark" iconStyle={ styles.iconBtn } onTouchTap={ this.test }>
        <ActBookmark />
      </IconButton>,
      <IconButton key="track" iconStyle={ styles.iconBtn } onTouchTap={ this.test }>
        <ActTrackChng />
      </IconButton>,
      <IconButton key="visibility" iconStyle={ styles.iconBtn } onTouchTap={ this.test }>
        <ActVisibility />
      </IconButton>,
      <IconButton key="flag" iconStyle={ styles.iconBtn } onTouchTap={ this.test }>
        <ContentFlag />
      </IconButton>,
      <IconButton key="share" iconStyle={ styles.iconBtn } onTouchTap={ this.test }>
        <SocialShare />
      </IconButton>
      ];
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
          <div style={ styles.post }>
            <div style={{ display: 'flex' }}>
              <div style={{ flexBasis: 60, display: 'flex', flexDirection:'column', paddingLeft: 10, paddingRight:10}}>
                <Avatar src="assets/img/kerem-128.jpg" size={48}  />
                <IconButton iconStyle={ styles.iconBtn }><ActThumbUp/></IconButton>
                <div style={ styles.thumbInfo }>
                  1023
                </div>
                <IconButton iconStyle={ styles.iconBtn }><ActThumbDown/></IconButton>
                <IconButton iconStyle={ styles.iconBtn }><TglStarBorder/></IconButton>
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
                
                <div style={ styles.comments }>
                  <div style={{ position:'absolute', right: 10, top:-45, width:40}}>
                    <IconButton style={ styles.answerSortBtn } iconStyle={ styles.answerSortBtnIcon }>
                      <ContentAdd/>
                    </IconButton>
                  </div>
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
          <div style={{ padding:'0 5px', display:'flex' }}>
            <h4 style={{ flex:1, paddingTop: 10, paddingBottom:10 }} >Answer (8) </h4>
            <div>
              <IconButton tooltip="Sort By Activity" style={ styles.answerSortBtn } iconStyle={ styles.answerSortBtnIcon }>
                <EditBubbleChrt/>
              </IconButton>
              <IconButton tooltip="Sort By votes" disabled={true} style={ styles.answerSortBtn } iconStyle={ styles.answerSortBtnIcon }>
                <ActThumbsUpDown/>
              </IconButton>
            </div>
          </div>
          <div style={ styles.answer }>
            <div style={{ display: 'flex' }}>
              <div style={{ flexBasis: 60, display: 'flex', flexDirection:'column', paddingLeft: 10, paddingRight:10}}>
                <Avatar src="assets/img/kerem-128.jpg" size={48}  />
                <IconButton iconStyle={ styles.iconBtn }><ActThumbUp/></IconButton>
                <div style={ styles.thumbInfo }>
                  23
                </div>
                <IconButton iconStyle={ styles.iconBtn }><ActThumbDown/></IconButton>
                <IconButton iconStyle={ styles.iconBtn }><ActDone/></IconButton>
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
                
                <div style={ styles.comments }>
                  <div style={{ position:'absolute', right: 10, top:-45, width:90}}>
                    <IconButton style={ styles.answerSortBtn } iconStyle={ styles.answerSortBtnIcon }>
                      <ActGavel/>
                    </IconButton>
                    <IconButton style={ styles.answerSortBtn } iconStyle={ styles.answerSortBtnIcon }>
                      <ContentAdd/>
                    </IconButton>
                  </div>
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
          <div style={ styles.answer }>
            <div style={{ display: 'flex' }}>
              <div style={{ flexBasis: 60, display: 'flex', flexDirection:'column', paddingLeft: 10, paddingRight:10}}>
                <Avatar src="assets/img/kerem-128.jpg" size={48}  />
                <IconButton iconStyle={ styles.iconBtn }><ActThumbUp/></IconButton>
                <div style={ styles.thumbInfo }>
                  13
                </div>
                <IconButton iconStyle={ styles.iconBtn }><ActThumbDown/></IconButton>
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
                
                <div style={ styles.comments }>
                  <div style={{ position:'absolute', right: 10, top:-45, width:40}}>
                    <IconButton style={ styles.answerSortBtn } iconStyle={ styles.answerSortBtnIcon }>
                      <ContentAdd/>
                    </IconButton>
                  </div>
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
          <div style={{display: 'flex'}}>
            <div style={{flex:1, textAlign:'center'}}>
              <h4 style={ styles.sumTitle }>created</h4>
              <div style={{ display:'block'}}>
                <a href='' >
                  <Avatar src={ `assets/img/kerem-128.jpg` } size={ 20 } style={ { marginRight: 5,verticalAlign:'middle'} } /> 
                </a>
                <span style={ { marginRight: 5, display:'inline-block', verticalAligh:'middle'}}>7天</span>
              </div>
            </div>
            <div style={{flex:1, textAlign:'center'}}>
              <h4 style={ styles.sumTitle }>active</h4>
              <div style={{ display:'block'}}>
                <a href='' >
                  <Avatar src={ `assets/img/kerem-128.jpg` } size={ 20 } style={ { marginRight: 5,verticalAlign:'middle'} } /> 
                </a>
                <span style={ { marginRight: 5, display:'inline-block', verticalAligh:'middle'}}>7H</span>
              </div>
            </div>
            <div style={{flex:1, textAlign:'center'}}>
              <h4 style={ styles.sumTitle }>views</h4>
              <span style={ { marginRight: 5, verticalAligh:'middle'}}>12K</span>
            </div>
            <div style={{flex:1, textAlign:'center'}}>
              <h4 style={ styles.sumTitle }>replies</h4>
              <span style={ { marginRight: 5, verticalAligh:'middle'}}>12K</span>
            </div>
            <div style={{flex:1, textAlign:'center'}}>
              <h4 style={ styles.sumTitle }>users</h4>
              <span style={ { marginRight: 5, verticalAligh:'middle'}}>12</span>
            </div>
          </div>
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
