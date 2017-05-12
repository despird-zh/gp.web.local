import React from 'react';
import PropTypes from 'prop-types';

import AuthConnect from '../component/AuthConnect';

function getStyles(muiTheme) {
  const { baseTheme } = muiTheme;
  console.log(baseTheme);
  return {
    root: {
      display: 'flex',
      position: 'relative',
      marginTop: 10,
    }
    
  };
}

class WGroupDemoPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = { profileExpand: false };
    this.styles = getStyles(props.muiTheme);
  }

  componentWillMount() {
    if (this.props.setCurrentPage) { this.props.setCurrentPage('demo'); }
    console.log(WorkgroupApis);
  }


  render() {
    const styles = this.styles;

    return (
      <div style={ styles.root }>
        
      </div>
    );
  }
}

WGroupDemoPage.propTypes = {
  setCurrentPage: PropTypes.func,
  muiTheme: PropTypes.object,
};

const NewComponent = AuthConnect(
  WGroupDemoPage,
  (state) => ({
    wgrouplist: state.wgroup.get('wgrouplist'),
  }),
  {  });

export default NewComponent;