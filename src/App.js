import React from 'react';
import logo from './logo.svg';
import Button from '@material-ui/core/Button';
import Bookmarks from '@material-ui/icons/Bookmarks';
import { render } from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import HeaderAppBar from './components/Header';
import AppRouter from './routers/AppRouter';
import { theme } from './theme/theme';
import configureStore from './store/config/configureStore';
import { login, logout } from './store/actions/auth';
import './styles/styles.css';
import './App.css';

const store = configureStore();
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(logout());

function App() {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <AppRouter />
      </MuiThemeProvider>
    </Provider>
  );
}
export default App;

// render(<App />, document.getElementById('app'));