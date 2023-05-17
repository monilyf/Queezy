import {TouchableHighlight, StyleSheet} from 'react-native';
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
    variant = 'contained',
  } = props;
  return (
    <>
      {variant === 'contained' && (
        <TouchableHighlight
          style={[styles.containedContainer, {backgroundColor: buttonColor,...style}]}
          onPress={onPress}>
          <Label bold color={labelColor} style={styles.buttonLabel}>
            {label}
          </Label>
        </TouchableHighlight>
      )}
      {variant === 'labelOnly' && (
        <Label
          bold
          color={labelColor}
          style={styles.buttonLabel}
          onPress={onPress}>
          {label}
        </Label>
      )}
      {variant === 'outlined' && (
        <TouchableHighlight
          style={[styles.outlinedContainer, {borderColor: borderColor,...style}]}
          onPress={onPress}>
          <Label bold color={labelColor} style={styles.buttonLabel}>
            {label}
          </Label>
        </TouchableHighlight>
      )}
    </>
  );
};
export default CommonButton;

const styles = StyleSheet.create({
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
});
