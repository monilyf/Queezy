import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLOR} from '../../../utils/theme/colors';
import themeUtils from '../../../utils/theme/themeUtils';

const CommonCard = ({children, style}) => {
  return <View style={[styles.card, style]}>{children}</View>;
};

export default CommonCard;

const styles = StyleSheet.create({
  card: {
    marginHorizontal: themeUtils.relativeWidth(3),
    marginBottom: themeUtils.relativeWidth(4),
    padding: themeUtils.relativeWidth(4),
    backgroundColor: COLOR.WHITE,
    borderRadius: 20,
    minWidth: Dimensions.get('window').width - themeUtils.relativeWidth(5),
  },
});
