import React from 'react';
import PropTypes from 'prop-types';
import ActDescription from 'material-ui/svg-icons/action/description';
import ActSearch from 'material-ui/svg-icons/action/search';
import CtntClear from 'material-ui/svg-icons/content/clear';
import IconButton from 'material-ui/IconButton';
import FileFolderOpen from 'material-ui/svg-icons/file/folder-open';
import NaviExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import NaviExpandLess from 'material-ui/svg-icons/navigation/expand-less';
import Popover from 'material-ui/Popover';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import TreeList from '../component/TreeList';
import AuthConnect from '../component/AuthConnect';
import Breadcrumb from '../component/Breadcrumb';
import WGroupProfileLite from './WGroupProfileLite';

function getStyles(muiTheme) {
  const { baseTheme } = muiTheme;
  return {
    root: {
      display: 'flex',
      position: 'relative',
      marginTop: 10,
    },
    topbar: {
      display: 'flex',
      paddingLeft: 10,
      position: 'relative',
    },
    spacer: { flex: 1 },
    filterSearch: {
      marginRight: baseTheme.spacing.desktopGutterLess,
      width: 150,
    },
    filterType: {
      marginRight: baseTheme.spacing.desktopGutterLess,
      width: 150,
    },
    filterClass: {
      marginRight: baseTheme.spacing.desktopGutterLess,
      width: 150,
    },
    leftPanel: {
      flex: 1,
      paddingRight: 10,
    },
    column: {
      padding: 5,
    },
    rightPanel: {
      paddingLeft: 10,
      flexGrow: 0,
      flexShrink: 0,
      flexBasis: 300,
    },
    iconStyle:{
      color: baseTheme.palette.primary2Color
    },
    popover:{
      padding:10, 
      width:600, 
      maxWidth:600,
      height:200,
      maxHeight:200
    }
  };
}

var nodes = [
  {
    id:'2',
    title:'2222',
    expanded: true,
    children:[
      {
        id:'21',
        title:'title21',
        expanded: true,
        children:[
          {
            id:'211',
            title:'211title'
          },
          {
            id:'212',
            title:'212title'
          }
        ]
      },
      {
        id:'22',
        title:'title22',
      },
      {
        id:'23',
        title:'title22',
      },
      {
        id:'24',
        title:'title22',
      },
      {
        id:'25',
        title:'title22',
      }
    ]
  },
  {
    id:'3',
    title:'ttile3',
  }
];

const links = [
{
  id: '1',
  label: 'link2天涯处理工作如何',
},
{
  id: '2',
  label: 'link2天涯处理工作如何',
},
{
  id: '21',
  label: 'link2天涯处理工作如何',
},
{
  id: '22',
  label: 'link2天涯处理工作如何',
},
{
  id: '23',
  label: 'link2天涯处理工作如何',
},
{
  id: '24',
  label: 'link2天涯处理工作如何',
},
{
  id: '3',
  label: 'link2天涯处理工作如何',
},
{
  id: '31',
  label: 'link2天涯处理工作如何',
},
{
  id: '32',
  label: 'link2天涯处理工作如何',
},
{
  id: '33',
  label: 'link2天涯处理工作如何',
},
{
  id: '4',
  label: 'link2天涯处理工作如何',
}
]
class WGroupRepoPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      profileExpand: false, 
      openRepoTree: false,
      showMoreFilter: false,
      selectedRows:[],
      rows: [{
        id: '1',
        name: 'hallo',
        label: 'label'
      },{
        id: '2',
        name: 'hallo',
        label: 'label'
      },{
        id: '3',
        name: 'hallo',
        label: 'label'
      },{
        id: '4',
        name: 'hallo',
        label: 'label'
      },{
        id: '6',
        name: 'hallo',
        label: 'label'
      },{
        id: '5',
        name: 'hallo',
        label: 'label'
      },
      ]
    };
    this.styles = getStyles(props.muiTheme);
  }

  componentWillMount() {
    if (this.props.setCurrentPage) { this.props.setCurrentPage('repo'); }
  }

  componentDidMount () {
     window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll);
  }

  nodeIcon = (node) => {
    if(!node.children){
      return <ActDescription/>;
    }
  }

  handleRepoTreeTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      openRepoTree: true,
      openRepoTreeAnchorEl: event.currentTarget,
    });
  };
  
  handleRepoTreeRequestClose = () => {
    this.setState({
      openRepoTree: false,
    });
  };

  handleScroll = (e) => {
    if(this.state.openRepoTree){
      this.setState({ openRepoTree: false });
    }
  }

  handleShowMoreFilter = () => {
    this.setState({ showMoreFilter: !this.state.showMoreFilter });
  }

  handleJumpLink = (linkItem) => {
    console.log(linkItem)
  }

  handleRowSelection = (selrows) => {
    let _selectedRows = [];
    if( (typeof selrows === 'string') && selrows === 'all'){
      _selectedRows = this.state.rows.map((row, index) => { return index });
    }else if( (typeof selrows === 'string') && selrows === 'none'){
      _selectedRows = [];
    }else{
      _selectedRows = selrows;
    }

    this.setState({selectedRows: _selectedRows});
  }

  render() {
    const styles = this.styles;

    const { openRepoTree, showMoreFilter, selectedRows, rows } = this.state;

    const filterStyle = showMoreFilter ? styles.topbar : Object.assign({}, styles.topbar, {display: 'none'});

    const hasSelected = selectedRows && selectedRows.length > 0;

    const rowEls = rows.map((row, index) => {
      let filterRows = selectedRows.filter( i => (i === index) );
      return (
              <TableRow  key={`tr-${row.id}`} selected={ filterRows && filterRows.length > 0}>
                <TableRowColumn>{row.id}</TableRowColumn>
                <TableRowColumn>{row.name}</TableRowColumn>
                <TableRowColumn>{row.label}</TableRowColumn>
              </TableRow>
      );
    });

    return (

      <div style={ styles.root }>
        <div style={ styles.leftPanel }>
          <div>
            <IconButton onTouchTap={this.handleRepoTreeTouchTap} iconStyle={styles.iconStyle}>
              <FileFolderOpen/>
            </IconButton>
            <Popover
              open={this.state.openRepoTree}
              anchorEl={this.state.openRepoTreeAnchorEl}
              anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
              targetOrigin={{horizontal: 'left', vertical: 'top'}}
              onRequestClose={this.handleRepoTreeRequestClose}
              style={styles.popover}>
              <TreeList nodeIcon={this.nodeIcon} nodes={nodes} muiTheme={this.props.muiTheme}/>
            </Popover>
            <Breadcrumb items={links} onJumpClick={this.handleJumpLink} style={{verticalAlign:'top', display:'inline-block'}} muiTheme={this.props.muiTheme}/>
            <IconButton onTouchTap={ this.handleShowMoreFilter } style={{float:'right'}} iconStyle={styles.iconStyle}>
              { showMoreFilter ? <NaviExpandLess/> : <NaviExpandMore/> }
            </IconButton>
          </div>
          <div style={ filterStyle }>
            <TextField style={styles.filterSearch} hintText="File or folder name"/>
            <SelectField style={styles.filterType} hintText='Format'>
              <MenuItem value={ 'doc' } primaryText='Office Word' />
              <MenuItem value={ 'xls' } primaryText='Office Excel' />
              <MenuItem value={ 'pdf' } primaryText='PDF' />
              <MenuItem value={ 'ALL' } primaryText='All' />
            </SelectField>
            <SelectField style={styles.filterClass} hintText='Classification'>
              <MenuItem value={ 'OPEN' } primaryText='Unclassified' />
              <MenuItem value={ 'CLOSE' } primaryText='Top secret' />
              <MenuItem value={ 'FULL' } primaryText='Secret' />
              <MenuItem value={ 'FULL' } primaryText='Credential' />
              <MenuItem value={ 'ALL' } primaryText='All' />
            </SelectField>
            <div style={ styles.spacer } />
            <div style={{width:96}}>
              <IconButton iconStyle={styles.iconStyle}><ActSearch/></IconButton>
              <IconButton iconStyle={styles.iconStyle}><CtntClear/></IconButton>
            </div>
          </div>
          <div>
            <RaisedButton label='Clear' style={ { margin: 4 } } onTouchTap={ this.handleClear } disabled={hasSelected} />
            <RaisedButton label='Clear' style={ { margin: 4 } } onTouchTap={ this.handleClear } />
            <RaisedButton label='Clear' style={ { margin: 4 } } onTouchTap={ this.handleClear } />
            <Divider style={{marginTop:10}}/>
          </div>
          <Table multiSelectable={true}
            selectable= {true}
            onRowSelection={this.handleRowSelection}>
            <TableHeader enableSelectAll={true}>
              <TableRow>
                <TableHeaderColumn>ID</TableHeaderColumn>
                <TableHeaderColumn>Name</TableHeaderColumn>
                <TableHeaderColumn>Status</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody deselectOnClickaway={false}>
              {rowEls}
            </TableBody>
          </Table>
        </div>
        <WGroupProfileLite muiTheme={ this.props.muiTheme } style={ styles.rightPanel } />
      </div>
    );
  }
}

WGroupRepoPage.propTypes = {
  setCurrentPage: PropTypes.func,
  muiTheme: PropTypes.object,
};

const NewComponent = AuthConnect(
  WGroupRepoPage,
  (state) => ({
    wgrouplist: state.wgroup.get('wgrouplist'),
  }),
  {  });

export default NewComponent;