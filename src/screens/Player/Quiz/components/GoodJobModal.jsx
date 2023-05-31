import {
  Image,
  Modal,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CommonInput from '../../../../components/UI/CommonInput';
import CommonButton from '../../../../components/UI/CommonButton';
import {COLOR} from '../../../../utils/theme/colors';
import themeUtils from '../../../../utils/theme/themeUtils';
import {ICONS, IMAGES} from '../../../../utils/images';
import CommonCard from '../../../../components/UI/CommonCard';
import Label from '../../../../components/UI/Label';
import {useSelector} from 'react-redux';
import ReviewAnswersModal from './ReviewAnswersModal';

const GoodJobModal = ({navigation, open, onClose}) => {
  const [openModal, setModal] = useState(false);
  const {
    completionPercentage,
    correctAnswers,
    incorrectAnswers,
    skippedQuestions,
  } = useSelector(state => state.quiz);

  const handleClose = () => {
    if (onClose) {
      onClose();
      navigation.popToTop();
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
            Good Job!
          </Label>
          <TouchableOpacity onPress={handleClose}>
            <Image source={ICONS.close} style={styles.image} />
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <Image source={IMAGES.trophy} style={styles.trophy} />
          <Label color={COLOR.WHITE} bolder>{`You get ${
            correctAnswers * 10
          } Quiz Points`}</Label>
          <TouchableOpacity style={styles.button} onPress={()=>{setModal(true)}}>
            <Label bolder color={COLOR.WHITE}>
              {'Check Correct Answer'}
            </Label>
          </TouchableOpacity>
        </View>
        <View style={styles.scoreBox}>
          <View style={styles.rowSpaceBetween}>
            <Score
              label={'CORRECT ANSWER'}
              result={`${correctAnswers} questions`}
            />
            <Score label={'COMPLETION'} result={`${completionPercentage}%`} />
          </View>
          <View style={styles.rowSpaceBetween}>
            <Score label={'SKIPPED'} result={`${skippedQuestions}`} />
            <Score label={'INCORRECT ANSWER'} result={`${incorrectAnswers}`} />
          </View>
        </View>
        <View
          style={[
            styles.rowSpaceBetween,
            styles.buttonContainer,
            styles.scoreBox,
          ]}>
          <CommonButton
            style={{width: '70%'}}
            label={'Done'}
            labelColor={COLOR.WHITE}
            onPress={handleClose}
          />
          <TouchableOpacity style={styles.share}>
            <Image source={ICONS.close} style={styles.image} />
          </TouchableOpacity>
        </View>
        {openModal && (
          <ReviewAnswersModal
            open={openModal}
            onClose={() => setModal(false)}
            navigation={navigation}
          />
        )}
      </SafeAreaView>
    </Modal>
  );
};

export default GoodJobModal;

const styles = StyleSheet.create({
  card: {
    marginVertical: themeUtils.relativeHeight(1),
    padding: themeUtils.relativeWidth(8),
    backgroundColor: COLOR.PINK,
    borderRadius: 20,
    alignItems: 'center',
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
  share: {
    padding: themeUtils.relativeHeight(1.7),
    borderWidth: 0.5,
    borderColor: COLOR.SECONDARY,
    borderRadius: 20,
  },
});
