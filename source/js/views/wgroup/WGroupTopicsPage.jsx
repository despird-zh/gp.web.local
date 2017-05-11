import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import Checkbox from 'material-ui/Checkbox';
import { hashHistory } from 'react-router';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import ModeEditIcon from 'material-ui/svg-icons/editor/mode-edit';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import ImageLens from 'material-ui/svg-icons/image/lens';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import CommSwapCall from 'material-ui/svg-icons/communication/swap-calls';
import CommContacts from 'material-ui/svg-icons/communication/contacts';
import HWKeyBoardDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import HWKeyBoardUp from 'material-ui/svg-icons/hardware/keyboard-arrow-up';
import Divider from 'material-ui/Divider';
import {Tabs, Tab} from 'material-ui/Tabs';
import Subheader from 'material-ui/Subheader';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import SelectField from 'material-ui/SelectField';
import AuthConnect from '../component/AuthConnect';
import { saveWGroups, WorkgroupApis } from '../../store/actions/wgroupActions';
import WGroupProfileLite from './WGroupProfileLite';

const iconButtonElement = (
  <IconButton
    touch={true}
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
);

const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Reply</MenuItem>
    <MenuItem>Forward</MenuItem>
    <MenuItem>Delete</MenuItem>
  </IconMenu>
);

const users = ['jsa-128.jpg','kerem-128.jpg','kolage-128.jpg','ok-128.jpg','uxceo-128.jpg'];

function getStyles(muiTheme) {

  const { baseTheme } = muiTheme;
  console.log(baseTheme)
  return {
    root: {
      display: 'flex',
      position: 'relative',
      marginTop: 10,
    },
    topBar: {
      display: 'flex',
      position: 'relative',
    },
    filter: {
      marginRight: baseTheme.spacing.desktopGutterLess,
    },
    leftPanel: { 
      flex: 1 ,
      paddingRight: 10
    },
    column:{
      padding: 5,
    },
    rightPanel: {
      paddingLeft:10,
      flexGrow: 0,
      flexShrink: 0,
      flexBasis: 300,
    },
  };
}

class WGroupTopicsPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = { profileExpand: false };
    this.styles = getStyles(props.muiTheme);
  }

  componentWillMount() {
    if (this.props.setCurrentPage) { this.props.setCurrentPage('topics'); }
  }


  render() {

    const styles = this.styles;
    const numCol = Object.assign({}, styles.column, {width: 60, textAlign:'center'}) ;
    const cateCol = Object.assign({}, styles.column, {width: 100}) ;
    const userCol = Object.assign({}, styles.column, {width: 160, verticalAlign:'middle'}) ;
    let spanEl = <span style={{height:'100%', display:'inline-block', verticalAlign:'middle'}} />

    let usersEl = users.map((item) => {

      return (
        <a href="" style={{display:'block', float:'left', height: 25}}><Avatar src={"assets/img/" + item} size={25} style={{ marginRight: 5}}/></a>
      );
    });

    return (
      <div style={ styles.root }>
        <div style={ styles.leftPanel }>
          <div style={ styles.topBar }>
            <SelectField value={this.state.value} onChange={this.handleChange} style={{ width:150, marginRight: 10}}>
              <MenuItem value={1} label="5 am - 12 pm" primaryText="Morning" />
              <MenuItem value={2} label="12 pm - 5 pm" primaryText="Afternoon" />
              <MenuItem value={3} label="5 pm - 9 pm" primaryText="Evening" />
              <MenuItem value={4} label="9 pm - 5 am" primaryText="Night" />
            </SelectField>
            <FlatButton label="Default" style={{ marginRight: 10}} />
            <FlatButton label="Primary" primary={true} style={{ backgroundColor: grey400, marginRight: 10}}/>
            <FlatButton label="Secondary" secondary={true} />
          </div>
          <Table>
            <TableHeader 
            adjustForCheckbox={ false } 
            enableSelectAll={ false } 
            displaySelectAll={ false } 
            style={{borderBottomWidth: 2}}>
              <TableRow>
                <TableHeaderColumn style={ styles.column }>Topic</TableHeaderColumn>
                <TableHeaderColumn style={ cateCol }>Category</TableHeaderColumn>
                <TableHeaderColumn style={ userCol }>Users</TableHeaderColumn>
                <TableHeaderColumn style={ numCol }>Rep.</TableHeaderColumn>
                <TableHeaderColumn style={ numCol }>Vw.</TableHeaderColumn>
                <TableHeaderColumn style={ numCol }>Act.</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={ false }>
              <TableRow>
                <TableRowColumn style={ styles.column }>
                  <span style={{fontSize: 14, fontWeight: 600}}>
                    <a href="#" style={{textDecoration:'none', color:darkBlack}}>如何构建一个出色的应用特别是SPA?</a>
                  </span>
                  <div style={{ fontSize: 14, color:'#919191', wordBreak:'break-all', wordWrap:'break-word',lineHeight:1.4 ,whiteSpace: 'normal', paddingRight:5}}>
                    <span>在 HTML 4.01 中，不赞成使用 td 元素的 nowrap 属性；在 XHTML 1.0 Strict DTD 中，不支持 td 元素的 nowrap 属性。
                      <a href="/t/welcome-to-the-react-discussion-forum/11">read more...</a>
                    </span>
                  </div>
                </TableRowColumn>
                <TableRowColumn style={ cateCol }>
                  <span style={{display:'block', height: 18, verticalAlign:'middle'}}> 
                    <ImageLens style={{width: 16,height:16 ,color:'red', float:'left', marginTop:3, marginRight: 5}}/>
                   Develop
                  </span>
                </TableRowColumn>
                <TableRowColumn style={ userCol }>
                  {usersEl}
                </TableRowColumn>
                <TableRowColumn style={ numCol }>34</TableRowColumn>
                <TableRowColumn style={ numCol }>3K</TableRowColumn>
                <TableRowColumn style={ numCol }>45</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn style={ styles.column }>
                  <span style={{fontSize: 14, fontWeight: 600}}>
                    <a href="#" style={{textDecoration:'none', color:darkBlack}}>Any good library in React for building DockSpawn style windows on an SPA?</a>
                  </span>
                </TableRowColumn>
                <TableRowColumn style={ cateCol }>
                  <span style={{display:'block', height: 18, verticalAlign:'middle'}}> 
                    <ImageLens style={{width: 16,height:16 ,color:'yellow', float:'left', marginTop:3, marginRight: 5}}/>
                   Develop
                  </span>
                </TableRowColumn>
                <TableRowColumn style={ userCol }>
                  {usersEl}
                </TableRowColumn>
                <TableRowColumn style={ numCol }>34</TableRowColumn>
                <TableRowColumn style={ numCol }>3.2K</TableRowColumn>
                <TableRowColumn style={ numCol }>4</TableRowColumn>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <WGroupProfileLite muiTheme = {this.props.muiTheme} style={styles.rightPanel}/>
      </div>
    );
  }
}

WGroupTopicsPage.propTypes = {
  setCurrentPage: PropTypes.func,
  saveWGroups: PropTypes.func,
  wgrplist: PropTypes.object,
  muiTheme: PropTypes.object,
  rpcInvoke: PropTypes.func,
};

/*eslint-disable */
const WGroupListRow = ({ rowData, styles, onHandleJump }) => {
  const { 'workgroup-id': wgroupId, 'workgroup-name': wgroupName,
        'source-name': sourceName, admin, manager,
        state, description, 'create-date': createDate } = rowData;

  const handleJump = () => { onHandleJump(wgroupId); };

  return (<TableRow key={ wgroupId }>
    <TableRowColumn>{wgroupName}</TableRowColumn>
    <TableRowColumn>{sourceName}</TableRowColumn>
    <TableRowColumn>{admin} - {manager}</TableRowColumn>
    <TableRowColumn>{state}</TableRowColumn>
    <TableRowColumn>{description}</TableRowColumn>
    <TableRowColumn style={ { width: 130 } }>{createDate}</TableRowColumn>
    <TableRowColumn style={ { width: 80 } }>
      <IconButton iconStyle={ styles.iconStyle } onClick={ handleJump }><ModeEditIcon /></IconButton >
    </TableRowColumn>
  </TableRow>);
};
/*eslint-enable */

const NewComponent = AuthConnect(
  WGroupTopicsPage,
  (state) => ({
    wgrouplist: state.wgroup.get('wgrouplist'),
  }),
  { saveWGroups });

export default NewComponent;
