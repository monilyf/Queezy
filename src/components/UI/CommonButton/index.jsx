import {TouchableHighlight, StyleSheet, Image, View} from 'react-native';
import {IMAGES} from '../../../utils/images';
import {COLOR} from '../../../utils/theme/colors';
import themeUtils from '../../../utils/theme/themeUtils';
import Label from '../Label';

const CommonButton = props => {
  const {
    label,
    onPress,
    buttonColor = COLOR.PRIMARY,
    borderColor = COLOR.PRIMARY,
    labelColor,
    style,
    icon,
    loading,iconBGcolor,
    variant = 'contained',
  } = props;
  const IconWithLabel = () => {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center',backgroundColor:iconBGcolor}}>
        {icon && <Image source={icon} style={styles.icon} />}
        <Label bold color={labelColor} style={styles.buttonLabel}>
          {label}
        </Label>
      </View>
    );
  };
  const renderButton = () => {
    switch (variant) {
      case 'contained':
        return (
          <TouchableHighlight
            style={[
              styles.btn,
              styles.containedContainer,
              {backgroundColor: buttonColor, ...style},
            ]}
            onPress={onPress}>
            <IconWithLabel />
          </TouchableHighlight>
        );
      case 'outlined':
        return (
          <TouchableHighlight
            style={[
              styles.btn,
              styles.outlinedContainer,
              {borderColor: borderColor, ...style},
            ]}
            onPress={onPress}>
            <IconWithLabel />
          </TouchableHighlight>
        );
      case 'labelOnly':
        return (
          <Label
            bold
            color={labelColor}
            style={[styles.buttonLabel, style]}
            onPress={onPress}>
            {label}
          </Label>
        );

      default:
        return (
          <TouchableHighlight
            style={[
              styles.btn,
              styles.containedContainer,
              {backgroundColor: buttonColor, ...style},
            ]}
            onPress={onPress}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={IMAGES.logo} style={styles.icon} />
              <Label bold color={labelColor} style={styles.buttonLabel}>
                {label}
              </Label>
            </View>
          </TouchableHighlight>
        );
    }
  };
  return <>{renderButton()}</>;
};
export default CommonButton;

const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: themeUtils.relativeWidth(3),
  },
  containedContainer: {
    alignItems: 'center',
    paddingVertical: themeUtils.relativeHeight(2),
    borderRadius: 20,
  },
  buttonLabel: {
    fontSize: themeUtils.fontNormal,
    textAlign: 'center',
  },
  outlinedContainer: {
    alignItems: 'center',
    paddingVertical: themeUtils.relativeHeight(2),
    borderRadius: 20,
    borderWidth: 2,
  },
  icon: {
    height: themeUtils.relativeWidth(6),
    width: themeUtils.relativeWidth(6),
    marginRight: 15,
  },
});
