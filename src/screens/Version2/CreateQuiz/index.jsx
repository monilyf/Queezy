import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import MainLayout from '../../../components/Layout/MainLayout';
import CommonCard from '../../../components/UI/CommonCard';
import {COLOR} from '../../../utils/theme/colors';
import themeUtils from '../../../utils/theme/themeUtils';
import Label from '../../../components/UI/Label';
import CommonInput from '../../../components/UI/CommonInput';
import CommonButton from '../../../components/UI/CommonButton';
import {useFormik} from 'formik';
import DropDownPicker from 'react-native-dropdown-picker';
import {QUIZ_CATEGORY} from '../../../utils/constant';
import {labelValuePairedArrayObject} from '../../../utils/helper';
import {ROUTE} from '../../../routes/routes';
import {createQuizValidation} from '../../../utils/validations';
import ImageUpload from '../../../components/UI/ImageUpload';

const CreateQuiz = ({navigation}) => {
  const [dropdownList, setDropdownList] = useState();
  useEffect(() => {
    const list = [
      ...labelValuePairedArrayObject(QUIZ_CATEGORY, 'name'),
      {label: 'Other', value: 'other'},
    ];
    setDropdownList(list);
    return () => {
      resetForm();
    };
  }, []);
  const {
    handleChange,
    handleSubmit,
    values,
    touched,
    errors,
    setFieldValue,
    resetForm,
  } = useFormik({
    initialValues: {
      title: '',
      quizImage: '',
      category: '',
      description: '',
      newCategory: '',
      categoryImage: '',
      totalQuestion: null,
      open: false,
    },
    validationSchema: createQuizValidation,
    onSubmit: async values => {
      navigation.navigate(ROUTE.ADD_QUESTIONS, {
        totalQuestion: Number(values.totalQuestion),
      });
    },
  });
  return (
    <MainLayout
      headerLabel={'Create Quiz'}
      onBackPress={() => navigation.goBack()}>
      <CommonCard style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ImageUpload
            onImageUpload={image => setFieldValue('quizImage', image)}
          />
          <View>
            <CommonInput
              label={'Title'}
              placeholder={'Enter Quiz title'}
              error={touched.title && errors.title}
              value={values.title}
              onChangeText={handleChange('title')}
            />
            <Label mb={themeUtils.relativeHeight(1)}>{'Quiz Category'}</Label>
            <DropDownPicker
              open={values.open}
              value={values.category}
              items={dropdownList}
              placeholder={'Choose quiz category'}
              setOpen={() => setFieldValue('open', true)}
              closeAfterSelecting={true}
              onClose={() => setFieldValue('open', false)}
              onSelectItem={v => {
                setFieldValue('category', v.value);
              }}
              style={[
                {
                  borderRadius: 20,
                  height: themeUtils.relativeHeight(7),
                  marginVertical: themeUtils.relativeHeight(1),
                },
                values.open && {marginBottom: themeUtils.relativeHeight(25)},
              ]}
            />
            {values.category === 'other' && (
              <>
                <CommonInput
                  label={'Other'}
                  placeholder={'Enter new category'}
                  error={touched.newCategory && errors.newCategory}
                  value={values.newCategory}
                  onChangeText={handleChange('newCategory')}
                />
                <ImageUpload
                  onImageUpload={image => setFieldValue('categoryImage', image)}
                />
              </>
            )}
            <CommonInput
              label={'Description'}
              placeholder={'Enter Quiz Description'}
              numberOfLines={2}
              multiline={true}
              error={touched.description && errors.description}
              value={values.description}
              onChangeText={handleChange('description')}
            />
            <CommonInput
              label={'Total Questions'}
              placeholder={'Enter Number of Questions'}
              error={touched.totalQuestion && errors.totalQuestion}
              value={values.totalQuestion}
              keyboardType={'number-pad'}
              onChangeText={handleChange('totalQuestion')}
            />
          </View>
          <CommonButton
            style={{marginTop: themeUtils.relativeHeight(2)}}
            label={'Add Question'}
            labelColor={COLOR.WHITE}
            onPress={handleSubmit}
          />
        </ScrollView>
      </CommonCard>
    </MainLayout>
  );
};

export default CreateQuiz;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
