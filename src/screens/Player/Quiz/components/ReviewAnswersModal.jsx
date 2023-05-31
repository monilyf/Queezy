import {
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
  const Score = ({label, result}) => {
    return (
      <View style={styles.score}>
        <Label bolder small color={COLOR.GRAY}>
          {label}
        </Label>
        <Label bolder small large mt={themeUtils.relativeHeight(1)}>
          {result}
        </Label>
      </View>
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
          <View
            style={[
              styles.card,styles.rowSpaceBetween,
              {backgroundColor: COLOR.PINK, marginBottom: 0,borderBottomEndRadius:0,borderBottomStartRadius:0},
            ]}>
            <View
              style={{
                height: 100,
                width: 100,
                backgroundColor: COLOR.WHITE,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
                marginBottom:20
              }}>
              <View
                style={{
                  height: 80,
                  width: 80,
                  backgroundColor: COLOR.PINK,
                  borderRadius: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
              </View>
            </View>
           <View style={{width:'50%',backgroundColor:'red',alignItems:'center',justifyContent:'center'}}>
           <Label
                color={COLOR.WHITE}
                
                bold>
                {'You answered 7 out of 10 questions'}
              </Label>
           </View>
          </View>
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
    //   alignItems: 'center',
    marginHorizontal: themeUtils.relativeWidth(5),
  },
  modalContainer: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
  },
  image: {
    height: themeUtils.relativeHeight(3),
    width: themeUtils.relativeHeight(3),
  },
  trophy: {
    height: themeUtils.relativeHeight(15),
    width: themeUtils.relativeHeight(15),
    marginBottom: themeUtils.relativeHeight(3),
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: themeUtils.relativeWidth(4),
  },
  button: {
    padding: themeUtils.relativeWidth(5),
    marginTop: themeUtils.relativeHeight(3),
    borderRadius: 20,
    backgroundColor: COLOR.LIGHT_PINK,
  },
  scoreBox: {
    marginHorizontal: themeUtils.relativeWidth(5),
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: themeUtils.relativeWidth(2),
  },
  score: {
    marginTop: themeUtils.relativeHeight(1.5),
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'flex-end',
    // justifyContent:
  },
  icon: {
    padding: themeUtils.relativeHeight(1.7),
    backgroundColor: COLOR.SECONDARY,
    borderRadius: 20,
  },
});
