import React from 'react';
import PropTypes from 'prop-types';
import Divider from 'material-ui/Divider';
import ActDeviceHub from 'material-ui/svg-icons/hardware/device-hub';
import ActCaseHub from 'material-ui/svg-icons/hardware/cast';
import ActCastCntHub from 'material-ui/svg-icons/hardware/cast-connected';

import muiThemeable from 'material-ui/styles/muiThemeable';
import { PageIconButton } from '../component/GPComponents';
import PageHeader from '../component/PageHeader';

const allPages = {
  topic: {
    path: '/wgroup/topic/',
    title: 'Workgroup Topic',
    icon: <ActCastCntHub />,
    description: 'Review the information of System',
    visible: true,
    disabled: false,
  },
  wgroupedit: {
    path: '/wgroup/wgroupedit/',
    title: 'Workgroup Edit',
    icon: <ActCaseHub />,
    description: 'Review the information of System',
    visible: true,
    disabled: false,
  },
  topics: {
    path: '/wgroup/topics',
    title: 'Workgroup Topics',
    icon: <ActDeviceHub />,
    description: 'Review the settings of System',
    visible: true,
    disabled: false,
  },
};

class WGroupPage extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  setVisible = (currentPage, allPages) => {
    if(currentPage !== 'wgroupedit')
      allPages['wgroupedit'].visible = false;
  }
  
  render() {

    return (
        <PageHeader
          pages = { allPages }
          router = { this.props.router }
          muiTheme = { this.props.muiTheme }
          setVisible = { this.setVisible }
        >
          { this.props.children }
        </PageHeader>
    );
  }
}

WGroupPage.propTypes = {
  muiTheme: PropTypes.object,
  router: PropTypes.object,
  children: PropTypes.object,
};

export default muiThemeable()(WGroupPage);