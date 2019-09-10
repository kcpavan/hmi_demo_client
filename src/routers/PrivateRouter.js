import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const PrivateRoute = ({
  component: Component,
  ...rest
}) => (
    <Route {...rest} component={(props) => (
      localStorage.getItem('user') ? (
        <div>
          <Header />
          <div className="bodyComponent">
            <Component {...props} />

          </div>


          <Footer />
        </div>
      ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
    )} />
  );

const mapStateToProps = (state) => ({
  isAuthenticated: !!localStorage.getItem('user')
});

export default connect(mapStateToProps)(PrivateRoute);