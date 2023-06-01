import {
  FlatList,
  Image,
  Modal,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import CommonInput from '../../../../components/UI/CommonInput';
import CommonButton from '../../../../components/UI/CommonButton';
import {COLOR} from '../../../../utils/theme/colors';
import themeUtils from '../../../../utils/theme/themeUtils';
import {ICONS, IMAGES} from '../../../../utils/images';
import CommonCard from '../../../../components/UI/CommonCard';
import Label from '../../../../components/UI/Label';
import {useSelector} from 'react-redux';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {QUESTION_ARRAY} from '../../../../utils/constant';
import Question from '../../../../components/UI/Question';

const ReviewAnswersModal = ({navigation, open, onClose, onSave}) => {
  const {
    completionPercentage,
    correctAnswers,
    incorrectAnswers,
    skippedQuestions,
  } = useSelector(state => state.quiz);
  console.log(
    ' completionPercentage, correctAnswers,  incorrectAnswers, skippedQuestions,: ',
    completionPercentage,
    correctAnswers,
    incorrectAnswers,
    skippedQuestions,
  );
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };
  console.log('ICONS.puzzle===', IMAGES.trophy);
  const renderQuestions = ({item}) => {
    return (
      <Question
        question={item}
        showReview={true}
        isTrue={item.id % 2 == 0}
        answerComponent={<AnswerComponent data={item} />}
        questionBoxStyle={{width: themeUtils.relativeWidth(62)}}
      />
    );
  };
  const AnswerComponent = ({data}) => {
    return (
      <>
        {data.id % 2 != 0 && (
          <Label small color={COLOR.DARK_GRAY}>
            Your Answer: {data.option_array[0].option}
          </Label>
        )}
        <Label small color={COLOR.DARK_GRAY}>
          Correct Answer: {data.option_array[0].option}
        </Label>
      </>
    );
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={open}
      onRequestClose={handleClose}>
      <StatusBar animated={true} barStyle={'dark-content'} />
      <SafeAreaView style={styles.modalContainer}>
        <View style={styles.header}>
          <View style={styles.image} />
          <Label xxlarge bolder>
            Review Answers
          </Label>
          <TouchableOpacity onPress={handleClose}>
            <Image source={ICONS.close} style={styles.image} />
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <View style={styles.rowSpaceBetween}>
            <View>
              <Label color={COLOR.LIGHT_GRAY} small bold>
                QUIZ NAME
              </Label>
              <Label
                color={COLOR.WHITE}
                mt={themeUtils.relativeHeight(1)}
                bolder>
                {'Basic Computer Quiz'}
              </Label>
            </View>
            <View style={styles.icon}>
              <Image source={ICONS.puzzle} style={styles.image} />
            </View>
          </View>
          <View style={[styles.card, styles.rowSpaceBetween, styles.innerCard]}>
            <View
              style={{
                height: 100,
                width: 100,
                backgroundColor: COLOR.WHITE,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
              }}>
              <View
                style={{
                  height: 80,
                  width: 80,
                  backgroundColor: COLOR.PINK,
                  borderRadius: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              />
            </View>
            <View style={{width: '50%'}}>
              <Label color={COLOR.WHITE} bolder>
                {'You answered 7 out of 10 questions'}
              </Label>
            </View>
          </View>
        </View>
        <Label bolder large>
          {'Your Answers'}
        </Label>
        <View style={[styles.card, styles.questionCard]}>
          <FlatList
            //
            renderItem={renderQuestions}
            data={QUESTION_ARRAY}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default ReviewAnswersModal;

const styles = StyleSheet.create({
  card: {
    marginVertical: themeUtils.relativeHeight(1),
    paddingHorizontal: themeUtils.relativeWidth(4),
    paddingTop: themeUtils.relativeWidth(4),
    backgroundColor: COLOR.PRIMARY,
    borderRadius: 20,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
    marginHorizontal: themeUtils.relativeWidth(5),
  },
  image: {
    height: themeUtils.relativeHeight(3),
    width: themeUtils.relativeHeight(3),
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: themeUtils.relativeWidth(4),
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: themeUtils.relativeWidth(2),
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  icon: {
    padding: themeUtils.relativeHeight(1),
    backgroundColor: COLOR.SECONDARY,
    borderRadius: 20,
  },
  innerCard: {
    backgroundColor: COLOR.PINK,
    marginBottom: 0,
    paddingBottom: themeUtils.relativeWidth(4),
    borderBottomEndRadius: 0,
    borderBottomStartRadius: 0,
  },
  questionCard: {
    flex: 1,
    backgroundColor: COLOR.LIGHT_GRAY,
  },
});
