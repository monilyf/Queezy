import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MainLayout from '../../../components/Layout/MainLayout';
import CommonCard from '../../../components/UI/CommonCard';
import Label from '../../../components/UI/Label';
import {COLOR} from '../../../utils/theme/colors';
import themeUtils from '../../../utils/theme/themeUtils';
import CommonButton from '../../../components/UI/CommonButton';
import { ROUTE } from '../../../routes/routes';
import { QUESTIONS } from '../../../utils/constant';
import Question from './components/Question';
import { useSelector } from 'react-redux';

const QuestionsListing = ({navigation, route}) => {
  const {currentCategory} = useSelector(state=>state.category)
  const {questions} = route?.params;
  const renderQuestions = ({item}) => {
    return (
        <Question question={item} onPress={()=>{}}/>
    )
  }
  return (
    <MainLayout
      headerLabel={`${currentCategory}'s questions`}
      onBackPress={() => navigation.goBack()}>
        <View style={styles.container}>
            
      <View >
        <View style={styles.titleBox}>
          <Label large bolder>
            Questions
          </Label>
          <View style={styles.numberBox}>
            <Label color={COLOR.WHITE} bolder>
              {questions}
            </Label>
          </View>
        </View>
        <View style={styles.questionContainer}>
        <FlatList
          renderItem={renderQuestions}
          data={QUESTIONS}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
        </View>
        </View>
        <CommonButton
        style={{marginTop: 5}}
        label={'Add New Questions'}
        labelColor={COLOR.WHITE}
        onPress={() => navigation.navigate(ROUTE.ADD_QUESTIONS)}
      />
      </View>

    </MainLayout>
  );
};

export default QuestionsListing;

const styles = StyleSheet.create({
  container: {
    height:themeUtils.relativeHeight(85),
    justifyContent:'space-between',
    marginBottom: themeUtils.relativeWidth(4),
    padding: themeUtils.relativeWidth(4),
    backgroundColor: COLOR.WHITE,
    borderRadius: 20,
  },
  titleBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  numberBox: {
    marginLeft:themeUtils.relativeWidth(3),
    backgroundColor:COLOR.PRIMARY,
    padding:themeUtils.relativeWidth(1),
    borderRadius:8
  },
  questionContainer:{
    backgroundColor:COLOR.LIGHT_GRAY,
    marginVertical:themeUtils.relativeHeight(1),
    borderRadius:20,
    padding:themeUtils.relativeHeight(1),
    height:themeUtils.relativeHeight(68),

  }
});
