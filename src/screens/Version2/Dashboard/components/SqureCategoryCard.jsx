import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ICONS} from '../../../../utils/images';
import {COLOR} from '../../../../utils/theme/colors';
import Label from '../../../../components/UI/Label';
import themeUtils from '../../../../utils/theme/themeUtils';

const SqureCategoryCard = ({category, onPress}) => {
  return (
    <TouchableOpacity
    style={[
      styles.category,
    ]}
    onPress={onPress}>
    <View style={styles.imageBox}>
      <Image source={category.image} style={styles.image} />
    </View>
    <Label bold color={COLOR.PRIMARY} mt={themeUtils.relativeHeight(1)}>
      {category.name}
    </Label>
    <Label
      xsmall
      color={COLOR.PRIMARY}
      mt={themeUtils.relativeHeight(
        1,
      )}>{`${category.total_questions} Questions`}</Label>
  </TouchableOpacity>
  );
};

export default SqureCategoryCard;

const styles = StyleSheet.create({
    category: {
        borderRadius: 30,
        backgroundColor: COLOR.LIGHT_GRAY,
        paddingVertical: themeUtils.relativeHeight(2),
        paddingHorizontal: themeUtils.relativeHeight(5),
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
      imageBox: {
        borderRadius: 20,
        backgroundColor: COLOR.WHITE,
        padding: themeUtils.relativeHeight(1.5),
      },
      image: {
        height: themeUtils.relativeHeight(4),
        width: themeUtils.relativeHeight(4),
      },
});
