import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';
import {COLOR} from '../../utils/theme/colors';
import themeUtils from '../../utils/theme/themeUtils';
import Header from '../UI/Header';

const MainLayout = ({children, statusBarColor, isDashboard, ...rest}) => {
  const barColor = statusBarColor
    ? statusBarColor
    : Platform.OS === 'ios'
    ? 'transparent'
    : COLOR.PRIMARY;
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor={barColor}
        barStyle={'light-content'}
      />
      <SafeAreaView>
        <Header isDashboard={isDashboard} {...rest} />
        {children}
      </SafeAreaView>
    </View>
  );
};

export default MainLayout;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.PRIMARY,
    flex: 1,
    paddingVertical: themeUtils.relativeHeight(1),
    paddingHorizontal: themeUtils.relativeWidth(6),
    alignItems: 'center',
  },
});
