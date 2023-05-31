import {
  Alert,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useMemo, useState} from 'react';
import MainLayout from '../../../components/Layout/MainLayout';
import {QUESTION_ARRAY} from '../../../utils/constant';
import Label from '../../../components/UI/Label';
import CommonCard from '../../../components/UI/CommonCard';
import {COLOR} from '../../../utils/theme/colors';
import themeUtils from '../../../utils/theme/themeUtils';
import {useDispatch, useSelector} from 'react-redux';
import {updateQuizData} from '../../../redux/reducers/quizSlice';
import GoodJobModal from './components/GoodJobModal';

const Quiz = ({navigation, route}) => {
  const {level} = route.params;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState();
  const [openModal, setModal] = useState(false);
  const dispatch = useDispatch();
  

  const questionsList = useMemo(() => {
    return QUESTION_ARRAY; //.filter(item => item.level === level);
  }, [level]);

  const Slider = () => {
    return (
      <View style={styles.headerContainer}>
        {questionsList.map(item => {
          const width = (currentQuestion + 1) * (200 / questionsList.length);
          return <View key={item.id} style={[styles.line, {width}]}></View>;
        })}
      </View>
    );
  };

  const navigateToNextQuestion = () => {
    dispatch(
      updateQuizData({
        ...questionsList[[currentQuestion]],
        selectedAnswer: selectedOption,
      }),
    );
    if (currentQuestion < questionsList.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setModal(true)
    }
    setSelectedOption(null);
  };
  const handleGoBack = () => {
    if (currentQuestion === 0) {
      navigation.goBack();
    } else {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  return (
    <MainLayout
      onBackPress={handleGoBack}
      middleComponent={<Slider />}
      rightComponent={
        <>
          <Label onPress={navigateToNextQuestion} bolder color={COLOR.WHITE}>
            {currentQuestion < questionsList.length - 1 ? 'Next' : 'Save'}
          </Label>
        </>
      }>
      <CommonCard style={styles.container}>
        <Label bolder small color={COLOR.GRAY}>
          {`QUESTION ${currentQuestion + 1} OF ${questionsList.length}`}
        </Label>
        <Label
          bolder
          large
          mt={themeUtils.relativeHeight(2)}
          mb={themeUtils.relativeHeight(1)}>
          {questionsList[[currentQuestion]].question}
        </Label>
        <View style={styles.optionContainer}>
          <FlatList
            data={questionsList[[currentQuestion]].option_array}
            keyExtractor={item => item.option}
            renderItem={({item}) => {
              const conditon = selectedOption === item.option;
              return (
                <TouchableOpacity
                  style={[
                    styles.option,
                    {backgroundColor: conditon ? COLOR.SECONDARY : COLOR.WHITE},
                  ]}
                  onPress={() => setSelectedOption(item.option)}>
                  <Label bolder={conditon ? true : false}>{item.option}</Label>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </CommonCard>
      {openModal && (
        <GoodJobModal open={openModal} onClose={() => setModal(false)} navigation={navigation}/>
      )}
    </MainLayout>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    flex: 1,
  },
  headerContainer: {
    width: 200,
    backgroundColor: COLOR.SECONDARY,
    height: themeUtils.relativeHeight(0.5),
    borderRadius: 5,
  },
  line: {
    backgroundColor: COLOR.WHITE,
    // height: themeUtils.relativeHeight(0.5),
    height: 0.4,
    borderRadius: 5,
  },
  optionContainer: {
    marginVertical: themeUtils.relativeHeight(1.5),
  },
  option: {
    padding: themeUtils.relativeWidth(5),
    borderWidth: 1,
    borderColor: COLOR.SECONDARY,
    marginVertical: themeUtils.relativeHeight(1.5),
    borderRadius: 20,
  },
});
