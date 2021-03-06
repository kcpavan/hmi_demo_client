import React from 'react';
import AppBar from '@material-ui/core/AppBar';

import { connect } from 'react-redux';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


import { Link } from 'react-router-dom';
import PublicNavList from '../navs/publicNav';
import PrivateNavList from '../navs/privateNav';
import ExpandNavList from '../navs/expandNavs'
import { userActions } from '../_actions';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 1, open: false,
      componentsmenuopen: false
    };
  }

  handleChange = (event, index, value) => this.setState({ value });
  onLeftIconButtonClick = (event, index, value) => {
    console.log('hi;');
    this.setState({ open: !this.state.open });

  };

  toggleDrawer = (open) => () => {
    this.setState({
      open: open,
    });
  };

  handleClick = () => {
    this.setState({ componentsmenuopen: !this.state.componentsmenuopen });
  };

  handleClose = event => {
    if (this.target1.contains(event.target) || this.target2.contains(event.target)) {
      return;
    }

    this.setState({ componentsmenuopen: false });
  };
  conditRenderEssential = () => this.props.userid ? (
    <Button color="inherit" align="right" onClick={this.props.startLogout}> Logout</Button>) : (<Button color="inherit" align="right"><Link to="/login"> Login</Link></Button>)

  render() {

    return (
      <div>
        <Drawer open={this.state.open} onClose={this.toggleDrawer(false)} >
          <div
            tabIndex={0}
            role="button"
          >
            <div className="sidelistwrapper">
              {!this.props.userid && (<React.Fragment><PublicNavList /> <ExpandNavList /></React.Fragment>)}

              {this.props.userid && (<React.Fragment>
                <PrivateNavList />
              </React.Fragment>
              )}


            </div>
          </div>
        </Drawer>
        <div className="appbarwrapper">

          <AppBar position="static">
            <Toolbar>
              <IconButton className="iconbuttonsyle" color="inherit" aria-label="Menu" onClick={this.onLeftIconButtonClick}>
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit" className="headertypoclass" >
                HMI
          </Typography>

              {
                this.conditRenderEssential()
              }

            </Toolbar>
          </AppBar>
        </div>
      </div>
    );
  };
}
const mapStateToProps = (state) => ({
  userid: localStorage.getItem('user')
});

const mapDispatchToProps = (dispatch, props) => ({
  startLogout: () => dispatch(userActions.logout())
});


export default connect(mapStateToProps, mapDispatchToProps)(Header);