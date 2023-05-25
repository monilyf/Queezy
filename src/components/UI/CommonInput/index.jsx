import {Image, Platform, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import Label from '../Label';
import {COLOR} from '../../../utils/theme/colors';
import themeUtils from '../../../utils/theme/themeUtils';
const CommonInput = props => {
  const {label, icon, labelColor, error,style, ...rest} = props;
  return (
    <View style={[styles.container, styles]}>
      <Label bold color={labelColor}>{label}</Label>
      <View style={styles.inputContainer}>
      {icon && <View style={styles.iconBox}><Image source={icon} alt={'icon'} style={styles.icon} /></View>}
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
    paddingLeft:  themeUtils.relativeWidth(4),
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 20,
  },
  iconBox:{
    paddingRight: themeUtils.relativeWidth(3),
    
  },
  icon: {
    height: themeUtils.relativeWidth(6),
    width: themeUtils.relativeWidth(6),

  },
});
