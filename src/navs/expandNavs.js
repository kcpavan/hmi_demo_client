import React from 'react';
import List from '@material-ui/core/List';

class ExpandNav extends React.Component {

  state = {
    componentsmenuopen: false
  };

  handleClick = () => {
    console.log('clicked');
    this.setState({ componentsmenuopen: !this.state.componentsmenuopen });
  };

  handleClose = event => {
    if (this.target1.contains(event.target) || this.target2.contains(event.target)) {
      return;
    }

    this.setState({ componentsmenuopen: false });
  };

  render() {

    return (<List component="nav">
    </List>);
  }

}


export default ExpandNav;

