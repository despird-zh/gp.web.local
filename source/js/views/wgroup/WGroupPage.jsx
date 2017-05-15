import React from 'react';
import PropTypes from 'prop-types';

import ActDeviceHub from 'material-ui/svg-icons/hardware/device-hub';
import ActCaseHub from 'material-ui/svg-icons/hardware/cast';
import ActCastCntHub from 'material-ui/svg-icons/hardware/cast-connected';

import muiThemeable from 'material-ui/styles/muiThemeable';

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
  demo1: {
    path: '/wgroup/demo1/',
    title: 'Workgroup Edit',
    icon: <ActCaseHub />,
    description: 'Review the information of System',
    visible: true,
    disabled: false,
  },
  repo: {
    path: '/wgroup/repo/',
    title: 'Repository',
    icon: <ActCaseHub />,
    description: 'The content of workgroup repository ',
    visible: true,
    disabled: false,
  },
  topics: {
    path: '/wgroup/topics',
    title: 'Topics',
    icon: <ActDeviceHub />,
    description: 'Browse all the topics',
    visible: true,
    disabled: false,
  },
};

class WGroupPage extends React.Component {

  setVisible = (currentPage, pages) => {
    if (currentPage !== 'demo1') {
      pages.demo1.visible = false; // eslint-disable-line
    }
  }

  render() {
    return (
      <PageHeader
        pages={ allPages }
        router={ this.props.router }
        muiTheme={ this.props.muiTheme }
        setVisible={ this.setVisible }
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
