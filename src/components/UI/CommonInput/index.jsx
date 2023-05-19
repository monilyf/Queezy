import {Image, Platform, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import Label from '../Label';
import {COLOR} from '../../../utils/theme/colors';
import themeUtils from '../../../utils/theme/themeUtils';
const CommonInput = props => {
  const {label, icon, labelColor, error, ...rest} = props;
  return (
    <View style={styles.container}>
      <Label color={labelColor}>{label}</Label>
      <View style={styles.inputContainer}>
        <Image source={icon} alt={'icon'} style={styles.icon} />
        <TextInput style={styles.input} {...rest} />
      </View>
      {error && (
        <Label small color={COLOR.ERROR}>
          {error}
        </Label>
      )}
    </View>
  );
};

export default CommonInput;

const styles = StyleSheet.create({
  container: {
    marginVertical: themeUtils.relativeHeight(1),
  },
  inputContainer: {
    marginVertical: themeUtils.relativeHeight(1),
    backgroundColor: COLOR.WHITE,
    borderWidth: 0.5,
    borderRadius: 20,
    paddingVertical: Platform.OS === 'ios' ? 15 : 5,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 20,
    paddingHorizontal: themeUtils.relativeWidth(4),
  },
  icon: {
    height: themeUtils.relativeWidth(6),
    width: themeUtils.relativeWidth(6),
  },
});
