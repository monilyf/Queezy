import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import themeUtils from '../../../utils/theme/themeUtils';
import Label from '../Label';
import {ICONS, IMAGES} from '../../../utils/images';
import {COLOR} from '../../../utils/theme/colors';

const Header = ({onBackPress, headerLabel, isDashboard, rightComponent, isQuiz}) => {
  return (
    <>
      {isDashboard ? (
        <View style={styles.headerContainer}>
          <View>
            <Label xsmall bold color={COLOR.LIGHT_PINK}>
              {'Good Afternoon'.toUpperCase()}
            </Label>
            <Label bolder large mt={4} color={COLOR.WHITE} letterSpacing={1}>
              {headerLabel}
            </Label>
          </View>
          <Image source={IMAGES.logo} style={styles.roundedImage} />
        </View>
      ) : (
        <View style={styles.headerContainer}>
          {onBackPress && (
            <TouchableOpacity onPress={onBackPress}>
              <Image source={ICONS.whiteBackArrow} style={styles.backArrow} />
            </TouchableOpacity>
          )}
          <Label xlarge bolder color={COLOR.WHITE}>
            {headerLabel}
          </Label>
          <View>{rightComponent}</View>
        </View>
      )}
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    marginVertical: themeUtils.relativeHeight(1),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backArrow: {
    height: themeUtils.relativeHeight(4),
    width: themeUtils.relativeHeight(4),
  },
  roundedImage: {
    height: themeUtils.relativeHeight(7),
    width: themeUtils.relativeHeight(7),
    borderRadius: 50,
    resizeMode: 'contain',
  },
});
