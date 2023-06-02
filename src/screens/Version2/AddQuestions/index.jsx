import {FlatList, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import MainLayout from '../../../components/Layout/MainLayout';
import CommonCard from '../../../components/UI/CommonCard';
import themeUtils from '../../../utils/theme/themeUtils';
import {COLOR} from '../../../utils/theme/colors';
import CommonButton from '../../../components/UI/CommonButton';
import AddQuestionModal from './components/AddQuestionModal';
import {useDispatch, useSelector} from 'react-redux';
import {ROUTE} from '../../../routes/routes';
import Label from '../../../components/UI/Label';
import Question from '../../../components/UI/Question';
import {
  addQuestion,
  setCurrentQuestion,
} from '../../../redux/reducers/questionSlice';

const AddQuestions = ({navigation, route}) => {
  const {currentCategory} = useSelector(state => state.category);

  const [showQuestionModal, setQuestionModal] = useState(false);
  // const [questionArray, setQuestionArray] = useState([]);
  const {newQuestionArray} = useSelector(state => state.questions);

  const dispatch = useDispatch();
  const handleQuestion = value => {
    // check if question is already exists?
    // let questionArrayClone = [...questionArray];
    // questionArrayClone.push({...value});
    // setQuestionArray(questionArrayClone);
    dispatch(addQuestion({...value}));
  };
  const handleSubmit = () => {
    // const payload = {
    //   category_id: currentCategory.id,
    //   question_array: questionArray,
    // };
    // console.log('payload: ', questionArray);
    //api call
    dispatch(saveAllQuestions())
    navigation.navigate(ROUTE.DASHBOARD);
  };
  const renderQuestions = ({item}) => {
    return (
      <Question
        question={item}
        key={item.id}
        onPress={() => handleCurrentQuestionClick(item)}
      />
    );
  };
  const handleCurrentQuestionClick = data => {
    dispatch(setCurrentQuestion(data));
    setQuestionModal(true);
  };
  return (
    <MainLayout
      headerLabel={'Add New Questions'}
      onBackPress={() => navigation.goBack()}>
      <CommonCard style={styles.container}>
        <CommonButton
          label={`Add Question`}
          labelColor={COLOR.WHITE}
          onPress={() => setQuestionModal(true)}
        />
        <View style={styles.questionContainer}>
          {newQuestionArray.length > 0 ? (
            <FlatList
              data={newQuestionArray}
              keyExtractor={item => item.id}
              renderItem={renderQuestions}
            />
          ) : (
            <Label>Questions will be listed here</Label>
          )}
        </View>
        {newQuestionArray.length > 0 && (
          <>
            <Label
              xsmall
              color={COLOR.GRAY}
              align={'center'}
              mb={themeUtils.relativeHeight(1)}
             >
              Verify all questions and their's option before saving
            </Label>
            <CommonButton
              label={`Save all Questions`}
              labelColor={COLOR.WHITE}
              onPress={handleSubmit}
            />
          </>
        )}
      </CommonCard>

      {showQuestionModal && (
        <AddQuestionModal
          open={showQuestionModal}
          onClose={() => setQuestionModal(false)}
          onSave={value => handleQuestion(value)}
        />
      )}
    </MainLayout>
  );
};

export default AddQuestions;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    justifyContent: 'space-evenly',
  },
  questionContainer: {
    height: themeUtils.relativeHeight(65),
    borderRadius: 20,
    backgroundColor: COLOR.LIGHT_GRAY,
    padding: themeUtils.relativeHeight(2),
    marginVertical: themeUtils.relativeHeight(1),
  },
});
