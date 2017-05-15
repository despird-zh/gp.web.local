import React from 'react';
import PropTypes from 'prop-types';
import ActDescription from 'material-ui/svg-icons/action/description';
import IconButton from 'material-ui/IconButton';
import FileFolderOpen from 'material-ui/svg-icons/file/folder-open';
import Popover from 'material-ui/Popover';
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
    topBar: {
      display: 'flex',
    },
    filter: {
      marginRight: baseTheme.spacing.desktopGutterLess,
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
      color: baseTheme.palette.primary1Color
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
    this.state = { profileExpand: false, openRepoTree: false };
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

  handJumpLink = (linkItem) => {
    console.log(linkItem)
  }
  render() {
    const styles = this.styles;
    const {openRepoTree} = this.state;

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
            <Breadcrumb items={links} onJumpClick={this.handJumpLink} style={{verticalAlign:'top', display:'inline-block'}} muiTheme={this.props.muiTheme}/>
            <IconButton onTouchTap={ console.log('--')} style={{float:'right'}} iconStyle={styles.iconStyle}>
              <FileFolderOpen/>
            </IconButton>
          </div>

          <Table multiSelectable={true}>
            <TableHeader>
              <TableRow>
                <TableHeaderColumn>ID</TableHeaderColumn>
                <TableHeaderColumn>Name</TableHeaderColumn>
                <TableHeaderColumn>Status</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableRowColumn>1</TableRowColumn>
                <TableRowColumn>John Smith</TableRowColumn>
                <TableRowColumn>Employed</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>2</TableRowColumn>
                <TableRowColumn>Randal White</TableRowColumn>
                <TableRowColumn>Unemployed</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>3</TableRowColumn>
                <TableRowColumn>Stephanie Sanders</TableRowColumn>
                <TableRowColumn>Employed</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>4</TableRowColumn>
                <TableRowColumn>Steve Brown</TableRowColumn>
                <TableRowColumn>Employed</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>5</TableRowColumn>
                <TableRowColumn>Christopher Nolan</TableRowColumn>
                <TableRowColumn>Unemployed</TableRowColumn>
              </TableRow>
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