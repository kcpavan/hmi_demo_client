import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import { theme } from './theme/theme';
import { store } from './_helpers';
import './styles/styles.css';
import './App.css';

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