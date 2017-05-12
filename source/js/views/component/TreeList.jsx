import React from 'react';
import PropTypes from 'prop-types';
import EditBubbleChrt from 'material-ui/svg-icons/editor/bubble-chart';

class TreeView extends React.Component {

  handleClick(...args) {
    this.setState({collapsed: !this.state.collapsed});
    if (this.props.onClick) {
      this.props.onClick(...args);
    }
  }

  render() {

    return (
      <div className="tree-view">
        <div className={'tree-view_item ' + itemClassName}>
          {arrow}
          {nodeLabel}
        </div>
        <div className={containerClassName}>
          {collapsed ? null : children}
        </div>
      </div>
    );
  }
});

class TreeNode extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      collapsed: props.defaultCollapsed
    };
  }
  handleTouchTap = () => {
    let { onTouchTap, nodePath, nodeItem } = this.props;
    if (onTouchTap) 
      onTouchTap( nodePath, nodeItem );
  }

  render(){
    let { collapsed } = this.props;

    return (
      <li style={display:'list-item'}>
        <div style={display:'block', textAlign:'left'}>
          <div style={display:'inline-block'}>
            <EditBubbleChrt/>
          </div>
          <span style={display:'inline-block'}>
            { nodeItem.title }
          </span>
        </div>
        {
          collapsed && 
          <ul style={display:'block'}>
            <TreeNode/>
          </ul>
        }
      </li>
    );
  }
};
export default TreeView;
