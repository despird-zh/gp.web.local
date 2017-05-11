import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import ActCaseHub from 'material-ui/svg-icons/hardware/cast';
import AuthConnect from '../component/AuthConnect';

function getStyles(muiTheme) {

  const { baseTheme } = muiTheme;
  console.log(baseTheme)
  return {
    root: {
      display: 'flex',
      position: 'relative',
      marginTop: 10,
    },
    leftPanel: { 
      flex: 1 ,
      paddingRight: 10
    },
    rightPanel: {
      paddingLeft:10,
      flexGrow: 0,
      flexShrink: 0,
      flexBasis: 300,
    },
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

  test(){
    console.log('~~~~~=-=')
  }

  componentDidMount() {
    let buttons = [
    <IconButton onTouchTap={ this.test }>
      <ActCaseHub/>
    </IconButton>];
    let title = <a href="#" style={{textDecoration:'none'}}>Java regex to extract text sequences across multiple lines</a>
    if (this.props.setCurrentPage) { 
      this.props.setCurrentPage('topic', {title, buttons}); 
    }
  }

  render(){
    let styles = this.styles;

    return (
      <div style={ styles.root }>
        <div style={ styles.leftPanel }>
          <h2>
            <a href="#" style={{textDecoration:'none'}}>Java regex to extract text sequences across multiple lines</a>
          </h2>
          <div>
          </div>
        </div>
        <div style={ styles.rightPanel }>
          sdf
        </div>
      </div>
    );
  }
}

export default WGroupTopicPage;