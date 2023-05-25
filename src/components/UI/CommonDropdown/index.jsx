import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {COLOR} from '../../../utils/theme/colors';
import Label from '../Label';
import themeUtils from '../../../utils/theme/themeUtils';

const CommonDropdown = ({label, style, error, ...rest}) => {
  return (
    <>
      <Label bold mb={themeUtils.relativeHeight(1)}>
        {label}
      </Label>
      <DropDownPicker {...rest} />
      {error && (
        <Label small mt={themeUtils.relativeHeight(1)} color={COLOR.ERROR}>
          {error}
        </Label>
      )}
    </>
  );
};

export default CommonDropdown;

const styles = StyleSheet.create({});
