import {StyleSheet} from 'react-native';
import React from 'react';
import {ThemeProvider} from 'rn-theme-wrapper';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {colors} from './src/utils/theme/colors';
import {typography} from './src/utils/theme/typography';
import {store, persistor} from './src/redux';
import RootNavigator from './src/routes';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        {/* <ThemeProvider defaultTheme={{colors: colors.light, typography}}> */}
          <RootNavigator />
        {/* </ThemeProvider> */}
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
