import {FlatList, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import MainLayout from '../../../components/Layout/MainLayout';
import themeUtils from '../../../utils/theme/themeUtils';
import Label from '../../../components/UI/Label';
import {COLOR} from '../../../utils/theme/colors';
import CommonButton from '../../../components/UI/CommonButton';
import {ROUTE} from '../../../routes/routes';
import CategoryCard from './components/CategoryCard';
import {QUIZ_CATEGORY} from '../../../utils/constant';
import AddCategoryModal from './components/AddCategoryModal';
import { useDispatch } from 'react-redux';
import { setCurrentCategory } from '../../../redux/reducers/categorySlice';
import SqureCategoryCard from './components/SqureCategoryCard';

const Dashboard = ({navigation}) => {
  const [showAddCategoryModal, setCategoryModal] = useState(false);
  const dispatch = useDispatch();

  const handleNavigation = item => {
    dispatch(setCurrentCategory(item.name));
    navigation.navigate(ROUTE.QUESTION_LISTING, {
      questions: item.total_questions,
    });
  };
  const renderCategoryCards = ({item}) => {
    return (
      <SqureCategoryCard category={item} onPress={() => handleNavigation(item)} />
    );
  };

  return (
    <MainLayout isDashboard={true} headerLabel={'Madelyn Dias'}>
      <Label
        small
        bolder
        mb={themeUtils.relativeWidth(2)}
        color={COLOR.PINK_ROSE}
        letterSpacing={1}>
        LIST OF AVAILABLE CATEGORY
      </Label>
      <View style={styles.container}>
        <FlatList
          renderItem={renderCategoryCards}
          data={QUIZ_CATEGORY}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          scrollEnabled={true}
          contentContainerStyle={{
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        />
      </View>
      <CommonButton
        style={{marginTop: 15}}
        label={'Add New Category'}
        labelColor={COLOR.WHITE}
        borderColor={COLOR.WHITE}   
        variant={'outlined'}
        onPress={() => setCategoryModal(true)}
      />
      {showAddCategoryModal && (
        <AddCategoryModal
          open={showAddCategoryModal}
          onClose={() => setCategoryModal(false)}
        />
      )}
    </MainLayout>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    height: themeUtils.relativeHeight(70),
    backgroundColor:COLOR.WHITE,
    borderRadius:20
  },
});
