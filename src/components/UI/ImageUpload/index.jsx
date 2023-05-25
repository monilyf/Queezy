import {StyleSheet, View} from 'react-native';
import React from 'react';
import {COLOR} from '../../../utils/theme/colors';
import themeUtils from '../../../utils/theme/themeUtils';
import Label from '../Label';

const ImageUpload = ({onImageUpload}) => {
  return (
    <View style={styles.container}>
      <Label bolder align={'center'} color={COLOR.PRIMARY}>
        Add Cover Image
      </Label>
    </View>
  );
};

export default ImageUpload;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: COLOR.LIGHT_GRAY,
    height: themeUtils.relativeHeight(25),
    borderRadius: 30,
  },
});
