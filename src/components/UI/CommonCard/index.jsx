import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLOR} from '../../../utils/theme/colors';
import themeUtils from '../../../utils/theme/themeUtils';

const CommonCard = ({children}) => {
  return <View style={styles.card}>{children}</View>;
};

export default CommonCard;

const styles = StyleSheet.create({
  card: {
    marginHorizontal: themeUtils.relativeWidth(3),
    marginVertical: themeUtils.relativeWidth(5),
    padding: themeUtils.relativeWidth(4),
    backgroundColor: COLOR.WHITE,
    borderRadius: 20,
    alignItems: 'center',
  },
});
