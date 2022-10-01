import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux';
import { store, persistor }  from '../app/store';
import { PersistGate } from 'redux-persist/integration/react';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}

export default MyApp
