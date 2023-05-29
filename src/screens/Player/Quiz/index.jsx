import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useMemo} from 'react';
import MainLayout from '../../../components/Layout/MainLayout';
import {QUESTIONS} from '../../../utils/constant';
import Label from '../../../components/UI/Label';

const Quiz = ({navigation, route}) => {
  const {level} = route.params;
  const questionsList = useMemo(() => {
    return QUESTIONS.filter(item => item.level === level);
  }, [level]);

  return (
    <MainLayout isCustomHeader={true}>
      <View style={styles.headerContainer}></View>
    </MainLayout>
  );
};

export default Quiz;

const styles = StyleSheet.create({});
