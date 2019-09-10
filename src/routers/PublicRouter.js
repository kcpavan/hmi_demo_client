import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const PublicRoute = ({
  component: Component,
  ...rest
}) => (


    <Route {...rest} component={(props) => (
      localStorage.getItem('user') ? (

        <Redirect to="/home" />

      ) : (

          <React.Fragment>
            <Header />


            <Component {...props} />


            <Footer />
          </React.Fragment>
        )
    )} />
  );

const mapStateToProps = (state) => ({
  isAuthenticated: !!localStorage.getItem('user')
});

export default connect(mapStateToProps)(PublicRoute);
