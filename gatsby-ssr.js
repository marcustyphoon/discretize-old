/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { PersistGate } from 'redux-persist/integration/react';
import { Spinner } from 'gw2-ui-bulk';
import createStore from './src/state/createStore';

export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) => {
  const { store, persistor } = createStore();

  replaceBodyHTMLString(
    renderToString(
      <Provider store={store}>
        {/* TODO fix redux-persist breaking template swapping <PersistGate loading={<Spinner />} persistor={persistor}> */}
        <PersistGate loading={<Spinner />} persistor={persistor}>
          {bodyComponent}
        </PersistGate>
        {/* </PersistGate> */}
      </Provider>,
    ),
  );
};
