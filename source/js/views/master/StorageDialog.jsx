import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';

import { GPTextField, GPSelectField } from '../../components/GPComponents';
import { MasterApis } from '../../store/actions/masterActions';

function getStyles(muiTheme) {
  const { baseTheme: { spacing } } = muiTheme;

  return {
    itemStyle: { marginRight: spacing.desktopGutterLess },
    labelStyle: { marginRight: spacing.desktopGutterLess, width: 530 },
    contentStyle: { width: 580 },
  };
}

class StorageDialog extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false,
      entry: {},
    };
  }

  handleOpen = (entry) => {
    this.setState({ open: true, entry });
  };

  handleFieldChange = (key, event, newVal, payload) => {
    const selects = ['language'];
    const data = {};
    if (selects.indexOf(key) >= 0) {
      data[key] = payload;
    } else {
      data[key] = newVal;
    }
    const entry = Object.assign({}, this.state.entry, data);
    this.setState({ entry });
  };

  handleClose = () => {
    this.setState({ open: false });
  }

  handleSave = () => {
    const { rpcInvoke } = this.props;
    rpcInvoke(MasterApis.DictSave, this.state.entry, (json) => {
      console.log(json);
    });
  };

  render() {
    const { muiTheme } = this.props;
    const styles = getStyles(muiTheme);

    const actions = [
      <FlatButton
        label='Close'
        style={ { marginRight: 15 } }
        onTouchTap={ this.handleClose }
      />,
      <FlatButton
        label='Save'
        primary={ true }
        keyboardFocused={ true }
        onTouchTap={ this.handleSave }
      />,
    ];

    const {
          'entry-key': entryKey,
          'group-key': groupKey,
          'entry-value': entryValue,
          label, language,
        } = this.state.entry;

    return (
      <Dialog
        title='Edit the Dictionary Entry'
        actions={ actions }
        modal={ false }
        contentStyle={ styles.contentStyle }
        open={ this.state.open }
        onRequestClose={ this.handleClose }
      >
        <div>
          <GPTextField
            floatingLabelText='Entry Group'
            style={ styles.itemStyle }
            defaultValue={ groupKey }
            eventKey='group-key'
            disabled={ true }
            onHandleChange={ this.handleFieldChange }
          />
          <GPTextField
            floatingLabelText='Entry key'
            defaultValue={ entryKey }
            eventKey='entry-key'
            disabled={ true }
            onHandleChange={ this.handleFieldChange }
          />
        </div>
        <div>
          <GPTextField
            floatingLabelText='Entry value'
            defaultValue={ entryValue }
            eventKey='entry-value'
            onHandleChange={ this.handleFieldChange }
          />
        </div>
        <div>
          <GPSelectField
            style={ styles.search }
            floatingLabelText='Entry Group'
            value={ language }
            eventKey='language'
            onHandleChange={ this.handleFieldChange }
          >
            <MenuItem value={ 'en_us' } primaryText='English' />
            <MenuItem value={ 'zh_cn' } primaryText='Chinese' />
            <MenuItem value={ 'ru_ru' } primaryText='Russian' />
          </GPSelectField>
        </div>
        <div>
          <GPTextField
            floatingLabelText='Label'
            style={ styles.labelStyle }
            defaultValue={ label }
            eventKey='label'
            onHandleChange={ this.handleFieldChange }
            multiLine={ true }
            rows={ 2 }
          />
        </div>
      </Dialog>
    );
  }
}

StorageDialog.propTypes = {
  rpcInvoke: PropTypes.func,
  muiTheme: PropTypes.object,
};
export default StorageDialog;
