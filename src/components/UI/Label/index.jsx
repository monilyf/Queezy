import React from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';
import themeUtils from '../../../utils/theme/themeUtils'
import { COLOR } from '../../../utils/theme/colors';

const Label = (props) => {

    const onClick = () => {
        if (props.onPress)
            props.onPress();
    };

    
        let stylesArray = [];
        if (props.xxlarge)
            stylesArray.push({ fontSize: themeUtils.fontXXLarge });
        else if (props.xlarge)
            stylesArray.push({ fontSize: themeUtils.fontXLarge });
        else if (props.large)
            stylesArray.push({ fontSize: themeUtils.fontLarge });
        else if (props.normal)
            stylesArray.push({ fontSize: themeUtils.fontNormal });
        else if (props.small)
            stylesArray.push({ fontSize: themeUtils.fontSmall });
        else if (props.xsmall)
            stylesArray.push({ fontSize: themeUtils.fontXSmall });
        else
            stylesArray.push({ fontSize: themeUtils.fontNormal });

        if (props.bold)
            stylesArray.push({ fontWeight: "500" });
        else if (props.bolder)
            stylesArray.push({ fontWeight: "bold" });
        else if (props.light)
            stylesArray.push({ fontWeight: "400" });
        else if (props.lighter)
            stylesArray.push({ fontWeight: "200" });
        else
            stylesArray.push({ fontWeight: "normal" });

        stylesArray.push({
            color: props.color,
            marginTop: props.mt,
            marginBottom: props.mb,
            marginStart: props.ms,
            marginEnd: props.me,
            paddingHorizontal: props.ph,
            paddingBottom:props.pb,
            textAlign: props.align,
            borderBottomWidth:props.border,
            borderBottomColor:props.borderColor,
            letterSpacing:props.letterSpacing
        });
        stylesArray.push(props.style);
        return (
            <Text numberOfLines={props.numberOfLines} style={stylesArray}
                onPress={props.onPress ? onClick : null}>
                {props.children}
            </Text>
        );
    }


Label.defaultProps = {
    xsmall: false,
    small: false,
    normal: false,
    large: false,
    xlarge: false,
    xxlarge: false,
    bold: false,
    bolder: false,
    lighter: false,
    light: false,
    color: COLOR.BLACK,
    roboto_regular: false,
    roboto_medium: false,
    align: "left",
    mt: 0,
    mb: 0,
    ms: 0,
    me: 0,
    ph:0,
    pb:0,
    singleLine: false,
    border:0,
    borderColor:COLOR.BLACK,
    letterSpacing:0
};
Label.propTypes = {
    xsmall: PropTypes.bool,
    small: PropTypes.bool,
    normal: PropTypes.bool,
    large: PropTypes.bool,
    xlarge: PropTypes.bool,
    xxlarge: PropTypes.bool,
    bold: PropTypes.bool,
    bolder: PropTypes.bool,
    light: PropTypes.bool,
    lighter: PropTypes.bool,
    color: PropTypes.string,
    roboto_medium: PropTypes.bool,
    roboto_regular: PropTypes.bool,
    mt: PropTypes.number,
    mb: PropTypes.number,
    ms: PropTypes.number,
    me: PropTypes.number,
    ph: PropTypes.number,
    pb: PropTypes.number,
    align: PropTypes.string,
    singleLine: PropTypes.bool,
    border:PropTypes.number,
    borderColor:PropTypes.string,
    letterSpacing:PropTypes.number
};
export default Label;