import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {ICONS, IMAGES} from '../../utils/images';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import themeUtils from '../../utils/theme/themeUtils';
import CommonCard from '../UI/CommonCard';
import Label from '../UI/Label';
import {COLOR} from '../../utils/theme/colors';

const PublicLayout = ({children, onBackPress, headerShown, headerLabel}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={IMAGES.bgImage}
        alt={'bgImage'}
        style={styles.image}>
        {headerShown && (
          <View style={styles.headerContainer}>
            <TouchableOpacity onPress={onBackPress}>
              <Image source={ICONS.whiteBackArrow} style={styles.backArrow} />
            </TouchableOpacity>
            <Label large bold color={COLOR.WHITE}>
              {headerLabel}
            </Label>
            <View></View>
          </View>
        )}
        <KeyboardAwareScrollView contentContainerStyle={styles.container}>
          <Image source={IMAGES.appLogo} alt={'connect'} style={styles.logo} />
          <CommonCard>{children}</CommonCard>
        </KeyboardAwareScrollView>
      </ImageBackground>
    </View>
  );
};

export default PublicLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  logo: {
    height: themeUtils.relativeWidth(30),
    width: themeUtils.relativeWidth(30),
    resizeMode: 'contain',
  },
  headerContainer: {
    marginTop: themeUtils.relativeHeight(3),
    marginHorizontal: themeUtils.relativeWidth(3),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backArrow: {
    height: themeUtils.relativeHeight(4),
    width: themeUtils.relativeHeight(4),
  },
});
