import React from 'react';
import PropTypes from 'prop-types';
import HWKeyArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';

const getStyles = function(muiTheme){
  const {baseTheme} = muiTheme;
  console.log(baseTheme)
  return {
    container:{
      padding:'12px 0',
      marginBottom: 0,
      marginTop:0,
      listStyle: 'none'
    },
    item: {
      display: 'inline-block',
      fontSize: 16,
      lineHeight: 1.4,
      textAlign: 'left',
    },
    itemLink: {
      textDecoration: 'none',
      display: 'inline-block',
      verticalAlign: 'middle',
      color: baseTheme.palette.primary1Color,
      cursor: 'pointer',
      overflow: 'hidden',
      whiteSpace:'nowrap',
      textOverflow: 'ellipsis',
      fontSize: 14,
      maxWidth: 80
    },
    itemDeactive: {
      color: baseTheme.palette.accent1Color,
      cursor: 'default',
    },
    arrowStyle: {
      color: baseTheme.palette.primary1Color,
      fill: baseTheme.palette.primary1Color,
      verticalAlign: 'middle',
    }
  }
}

class Breadcrumb extends React.Component {

  constructor(props) {
    super(props);
    this.styles = getStyles(props.muiTheme);
  }

  render(){
    let styles = this.styles;

    let containerStyle = Object.assign(styles.container, this.props.style);

    let { items, onJumpClick } = this.props;
    let linkItems = items.map((item, index) => {

      let linkStyle = (index === items.length -1 ) ? 
        Object.assign({}, styles.itemLink, styles.itemDeactive) :
        styles.itemLink;

      return (
        <BreadcrumbItem key={`bitem-${item.id}`} itemData={item} 
          itemStyle={ styles.item } 
          linkStyle={ linkStyle } 
          iconStyle={ styles.arrowStyle }
          callback={ (index === items.length -1) ? null : onJumpClick }
          index={ index }/>
      );
    });

    return (
      <ol style={ containerStyle }>
        { linkItems }
      </ol>
    );
  }
}

const BreadcrumbItem = ({itemData, itemStyle, linkStyle, iconStyle, index, callback }) => {

  let handleClick = ()=>{
    if(callback){
      callback(itemData);
    }
  }
  return (
    <li key={ `litem-${itemData.id}`} style={itemStyle}>
      { (index !== 0) && <HWKeyArrowRight style={iconStyle}/>}
      <a style={linkStyle} onClick={ handleClick }>{ itemData.label }</a>
    </li>
  );
}

export default Breadcrumb;