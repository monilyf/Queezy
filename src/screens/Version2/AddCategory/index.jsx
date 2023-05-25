import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MainLayout from '../../../components/Layout/MainLayout';
import CommonCard from '../../../components/UI/CommonCard';

const AddCategory = ({navigation}) => {
  return (
    <MainLayout
      headerLabel={'Add New Category'}
      onBackPress={() => navigation.goBack()}>
        <CommonCard style={styles.container}>

        </CommonCard>
      </MainLayout>
  );
};

export default AddCategory;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf:'center'
      },
});
