import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import MainLayout from '../../../components/Layout/MainLayout';
import Label from '../../../components/UI/Label';
import {ICONS, IMAGES} from '../../../utils/images';
import themeUtils from '../../../utils/theme/themeUtils';
import CommonCard from '../../../components/UI/CommonCard';
import {useSelector} from 'react-redux';
import {COLOR} from '../../../utils/theme/colors';
import CommonButton from '../../../components/UI/CommonButton';
import {QUIZ_LEVELS} from '../../../utils/constant';
import {ROUTE} from '../../../routes/routes';

const QuizInto = ({navigation}) => {
  const {currentCategory} = useSelector(state => state.category);

  const handleNavigation = level => {
    navigation.navigate(ROUTE.QUIZ, {level});
  };

  return (
    <MainLayout onBackPress={() => navigation.goBack()}>
      <Image source={IMAGES.talk} style={styles.image} />
      <CommonCard style={styles.container}>
        <Label bolder small color={COLOR.GRAY}>
          {currentCategory?.name?.toUpperCase()}
        </Label>
        <Label bolder mt={themeUtils.relativeHeight(1)}>
          Enjoy Quiz
        </Label>
        <View style={styles.questionPointContainer}>
          <View style={styles.imageLabelContainer}>
            <View style={[styles.iconBox, {backgroundColor: COLOR.PRIMARY}]}>
              <Image source={ICONS.questionMark} style={styles.icon} />
            </View>
            <Label
              bolder
              ms={themeUtils.relativeWidth(2)}
              small>{`${currentCategory.total_questions} questions`}</Label>
          </View>
          <View style={styles.imageLabelContainer}>
            <View style={[styles.iconBox, {backgroundColor: COLOR.PINK}]}>
              <Image source={ICONS.puzzle} style={styles.icon} />
            </View>
            <Label
              bolder
              ms={themeUtils.relativeWidth(2)}
              small>{`+100 points`}</Label>
          </View>
        </View>
        <Label bolder small color={COLOR.GRAY}>
          {'Description'}
        </Label>
        <Label lineHeight={2} small mt={themeUtils.relativeHeight(1)}>
          {`Any time is a good time for a quiz and even better if that happens to be a ${currentCategory.name} themed quiz!`}
        </Label>
        <Label bolder small mt={themeUtils.relativeWidth(3)} color={COLOR.GRAY}>
          {'Select Quiz Level & Enjoy'}
        </Label>
        <View style={styles.levelContainer}>
          {QUIZ_LEVELS.map((item, index) => {
            const fontColor = index % 2 === 0 ? COLOR.PRIMARY : COLOR.WHITE;
            const buttonColor = index % 2 === 0 ? COLOR.WHITE : COLOR.PRIMARY;
            const variant = index % 2 === 0 ? 'outlined' : 'contained';
            return (
              <CommonButton
                key={item.id}
                label={item.name}
                labelColor={fontColor}
                buttonColor={buttonColor}
                variant={variant}
                onPress={() => handleNavigation(item.name)}
              />
            );
          })}
        </View>
      </CommonCard>
    </MainLayout>
  );
};

export default QuizInto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
  },
  image: {
    height: themeUtils.relativeHeight(35),
    width: themeUtils.relativeHeight(50),
    alignSelf: 'center',
  },
  questionPointContainer: {
    marginVertical: themeUtils.relativeHeight(2),
    backgroundColor: COLOR.LIGHT_GRAY,
    borderRadius: 20,
    flexDirection: 'row',
    paddingHorizontal: themeUtils.relativeWidth(4),
    paddingVertical: themeUtils.relativeHeight(2),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    height: themeUtils.relativeHeight(2.5),
    width: themeUtils.relativeHeight(2.5),
  },
  iconBox: {
    padding: themeUtils.relativeWidth(1),
    borderRadius: 20,
  },
  levelContainer: {
    flexDirection: 'row',
    marginVertical: themeUtils.relativeHeight(2),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
