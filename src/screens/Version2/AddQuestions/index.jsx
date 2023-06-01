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
import { addQuestion } from '../../../redux/reducers/questionSlice';

const AddQuestions = ({navigation, route}) => {
  const {currentCategory} = useSelector(state => state.category);

  const [showQuestionModal, setQuestionModal] = useState({isOpen:false,currentQuestion:''});
  // const [questionArray, setQuestionArray] = useState([]);
  const {questionArray} = useSelector(state => state.questions);

  const dispatch = useDispatch();
  const handleQuestion = value => {
    // check if question is already exists?
    // let questionArrayClone = [...questionArray];
    // questionArrayClone.push({...value});
    // setQuestionArray(questionArrayClone);
    dispatch(addQuestion({...value}))
  };
  const handleSubmit = () => {
    const payload = {category_id: currentCategory.id, question_array:questionArray};
    console.log('payload: ', questionArray);
    //api call
    navigation.navigate(ROUTE.DASHBOARD);
  };
  const renderQuestions = ({item}) => {
    return <Question question={item} key={item.id} onPress={()=>setQuestionModal({isOpen:true,currentQuestion:item})}/>;
  };
  return (
    <MainLayout
      headerLabel={'Add New Questions'}
      onBackPress={() => navigation.goBack()}>
      <CommonCard style={styles.container}>
        <CommonButton
          label={`Add Question`}
          labelColor={COLOR.WHITE}
          onPress={() => setQuestionModal({isOpen:true,currentQuestion:''})}
        />
        <View style={styles.questionContainer}>
          {questionArray.length > 0 ? (
            <FlatList
              data={questionArray}
              keyExtractor={item => item.id}
              renderItem={renderQuestions}
            />
          ) : (
            <Label>Questions will be listed here</Label>
          )}
        </View>
        {questionArray.length > 0 && (
          <CommonButton
            label={`Save all Questions`}
            labelColor={COLOR.WHITE}
            onPress={handleSubmit}
          />
        )}
      </CommonCard>

      {showQuestionModal.isOpen && (
        <AddQuestionModal
          open={showQuestionModal.isOpen}
          currentQuestion={showQuestionModal.currentQuestion}
          onClose={() => setQuestionModal({isOpen:false,currentQuestion:''})}
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
    justifyContent:'space-evenly'
  },
  questionContainer: {
    height: themeUtils.relativeHeight(65),
    borderRadius: 20,
    backgroundColor: COLOR.LIGHT_GRAY,
    padding: themeUtils.relativeHeight(2),
    marginVertical: themeUtils.relativeHeight(2),
  },
});
