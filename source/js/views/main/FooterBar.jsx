import React from 'react';
import PropTypes from 'prop-types';

class FooterBar extends React.Component {

  render() {
    console.log(this.props.muiTheme);
    return (
      <div style={ this.props.style } className='content'>
        1dp
      </div>
    );
  }
}


FooterBar.propTypes = {
  style: PropTypes.object,
  muiTheme: PropTypes.object,
};

export default FooterBar;
