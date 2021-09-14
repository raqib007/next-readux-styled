import '../styles/globals.css'
import {createStore,compose} from "redux";
import {Provider} from 'react-redux';
import reducer from '../reducers';
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(
    reducer,
    composeWithDevTools()
);

function MyApp({ Component, pageProps }) {
  return(
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
