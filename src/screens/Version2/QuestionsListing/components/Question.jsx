import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Label from '../../../../components/UI/Label';
import themeUtils from '../../../../utils/theme/themeUtils';
import {COLOR} from '../../../../utils/theme/colors';

const Question = ({question,onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.numberBox}>
        <Label color={COLOR.PRIMARY} bolder>
          {question.id}
        </Label>
      </View>
      <View style={styles.questionBox}>
        <Label bold>{question.question}{' '}
        <View style={{borderRadius:5,backgroundColor:COLOR.PRIMARY,alignItems:'center'}}>
        <Label xsmall ph={themeUtils.relativeWidth(1)} color={COLOR.WHITE} bolder>
          {question.level}
        </Label>
      </View>
        </Label>
      </View>
    </TouchableOpacity>
  );
};

export default Question;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: themeUtils.relativeHeight(1),
  },
  numberBox: {
    marginHorizontal: themeUtils.relativeWidth(1),
    height: themeUtils.relativeHeight(4),
    width: themeUtils.relativeHeight(4),
    borderRadius: 50,
    justifyContent: 'center',
    backgroundColor: COLOR.WHITE,
    alignItems: 'center',
    marginRight: themeUtils.relativeWidth(4),
  },
  questionBox:{
    width:themeUtils.relativeWidth(65),
  }
});
