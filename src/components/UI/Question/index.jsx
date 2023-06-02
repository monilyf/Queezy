import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Label from '../Label';
import {COLOR} from '../../../utils/theme/colors';
import themeUtils from '../../../utils/theme/themeUtils';
import { ICONS } from '../../../utils/images';
import { QUIZ_LEVELS } from '../../../utils/constant';

const Question = ({question, showLevel, showReview, isTrue, answerComponent, onPress, questionBoxStyle }) => {
  const level = QUIZ_LEVELS.find((item)=>item.id===question.level_id)?.name
  const Tochable = onPress ? TouchableOpacity : View;
  return (
    <Tochable style={styles.container} onPress={onPress}>
      <View style={styles.numberBox}>
        <Label  color={COLOR.PRIMARY} bolder>
          {question.id}
        </Label>
      </View>
      <View style={[styles.questionBox,questionBoxStyle]}>
        <Label bold>
          {question.question}{' '}
          {showLevel && <View
            style={{
              borderRadius: 5,
              backgroundColor: COLOR.PRIMARY,
              alignItems: 'center',
            }}>
            <Label
              xsmall
              ph={themeUtils.relativeWidth(1)}
              color={COLOR.WHITE}
              bolder>
              {level}
            </Label>
          </View>}
        </Label>
        {showReview && answerComponent}
      </View>
      {showReview && (
        <>
        <Image source={isTrue?ICONS.check:ICONS.remove} style={styles.reviewIcon}/>
        </>
        )
        }
    </Tochable>
  );
};

export default Question;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: themeUtils.relativeHeight(1),
    // justifyContent:'space-between'
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
  questionBox: {
    width: themeUtils.relativeWidth(65),
  },
  reviewIcon: {
    width: themeUtils.relativeWidth(5),
    height: themeUtils.relativeWidth(5),
  },
});
