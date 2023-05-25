import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ICONS} from '../../../../utils/images';
import {COLOR} from '../../../../utils/theme/colors';
import Label from '../../../../components/UI/Label';
import themeUtils from '../../../../utils/theme/themeUtils';

const CategoryCard = ({category, onPress}) => {
  return (
    <TouchableOpacity style={styles.categoryCard} onPress={onPress}>
      <View style={styles.flexRow}>
        <Image source={ICONS.headphone} style={styles.recentQuizLogo} />
        <Label bolder ms={themeUtils.relativeWidth(2)} color={COLOR.CORDOVAN}>
          {category.name}
        </Label>
      </View>
      <Label
        small
        bolder
        mb={themeUtils.relativeWidth(2)}
        color={COLOR.PINK_ROSE}
        letterSpacing={1}>
        {`${category.total_questions} Questions`}
      </Label>
    </TouchableOpacity>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  categoryCard: {
    width: '100%',
    marginVertical: themeUtils.relativeHeight(1),
    backgroundColor: COLOR.LIGHT_PINK,
    borderRadius: 20,
    padding: themeUtils.relativeWidth(4),
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  recentQuizLogo: {
    height: themeUtils.relativeHeight(3),
    width: themeUtils.relativeHeight(3),
  },
});
