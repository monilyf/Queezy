import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import MainLayout from '../../../components/Layout/MainLayout';
import CommonCard from '../../../components/UI/CommonCard';
import Label from '../../../components/UI/Label';
import {COLOR} from '../../../utils/theme/colors';
import themeUtils from '../../../utils/theme/themeUtils';
import CommonButton from '../../../components/UI/CommonButton';
import {ROUTE} from '../../../routes/routes';
import {QUESTIONS} from '../../../utils/constant';
import {useDispatch, useSelector} from 'react-redux';
import Question from '../../../components/UI/Question';
import { setCurrentQuestion } from '../../../redux/reducers/questionSlice';

const QuestionsListing = ({navigation, route}) => {
  const {currentCategory} = useSelector(state => state.category);
  const {questionArray} = useSelector(state => state.questions);
  const dispatch = useDispatch();
  const renderQuestions = ({item}) => {
    return <Question question={item} showLevel={true} onPress={()=>
    dispatch(setCurrentQuestion(item))}/>;
  };
  return (
    <MainLayout
      headerLabel={`${currentCategory?.name}'s questions`}
      onBackPress={() => navigation.goBack()}>
      <CommonCard style={styles.container}>
        <View>
          <View style={styles.titleBox}>
            <Label large bolder>
              Questions
            </Label>
            {questionArray?.length > 0 && (
              <View style={styles.numberBox}>
                <Label color={COLOR.WHITE} bolder>
                  {questionArray?.length}
                </Label>
              </View>
            )}
          </View>
          <View style={styles.questionContainer}>
           
             {questionArray.length > 0 ? (
            <FlatList
              data={questionArray}
              keyExtractor={item => item.id}
              renderItem={renderQuestions}
              showsVerticalScrollIndicator={false}
            />
          ) : (
            <Label>Questions will be listed here</Label>
          )}
          </View>
        </View>
        <CommonButton
          style={{marginTop: 5}}
          label={'Add New Questions'}
          labelColor={COLOR.WHITE}
          onPress={() => navigation.navigate(ROUTE.ADD_QUESTIONS)}
        />
      </CommonCard>
    </MainLayout>
  );
};

export default QuestionsListing;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    flex: 1,
    justifyContent: 'space-evenly',
  },
  titleBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  numberBox: {
    marginLeft: themeUtils.relativeWidth(3),
    backgroundColor: COLOR.PRIMARY,
    padding: themeUtils.relativeWidth(1),
    borderRadius: 8,
  },
  questionContainer: {
    height: themeUtils.relativeHeight(65),
    borderRadius: 20,
    backgroundColor: COLOR.LIGHT_GRAY,
    padding: themeUtils.relativeHeight(2),
    marginVertical: themeUtils.relativeHeight(1),
  },
});
