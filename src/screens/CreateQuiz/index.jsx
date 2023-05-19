import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import MainLayout from '../../components/Layout/MainLayout';
import CommonCard from '../../components/UI/CommonCard';
import {COLOR} from '../../utils/theme/colors';
import themeUtils from '../../utils/theme/themeUtils';
import Label from '../../components/UI/Label';
import CommonInput from '../../components/UI/CommonInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CommonButton from '../../components/UI/CommonButton';
import {useFormik} from 'formik';
import DropDownPicker from 'react-native-dropdown-picker';
import {QUIZ_CATEGORY} from '../../utils/constant';
import {labelValuePairedArrayObject} from '../../utils/helper';

const CreateQuiz = ({navigation}) => {
  const [dropdownList, setDropdownList] = useState();
  useEffect(() => {
    const list = labelValuePairedArrayObject(QUIZ_CATEGORY, 'name');
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
      category: '',
      description: '',
      open: false,
    },
    onSubmit: async values => {},
  });
  return (
    <MainLayout
      headerLabel={'Create Quiz'}
      onBackPress={() => navigation.goBack()}>
      <CommonCard style={styles.container}>
        <KeyboardAwareScrollView>
          <View style={styles.coverImageBox}>
            <Label bolder align={'center'} color={COLOR.PRIMARY}>
              Add Cover Image
            </Label>
          </View>
          <CommonInput
            label={'Title'}
            placeholder={'Enter Quiz title'}
            error={touched.title && errors.title}
            value={values.title}
            onChangeText={handleChange('title')}
          />
          <DropDownPicker
            open={values.open}
            value={values.category}
            items={dropdownList}
            setOpen={() => setFieldValue('open', true)}
            onSelectItem={v => {
              setFieldValue('category', v.value);
              setFieldValue('open', false);
            }}
            // setItems={setItems}
          />
          <CommonInput
            label={'Description'}
            placeholder={'Enter Quiz Description'}
            numberOfLines={2}
            multiline={true}
            error={touched.description && errors.description}
            value={values.description}
            onChangeText={handleChange('description')}
          />
          <CommonButton
            style={{marginTop: themeUtils.relativeHeight(2)}}
            label={'Add Question'}
            labelColor={COLOR.WHITE}
          />
        </KeyboardAwareScrollView>
      </CommonCard>
    </MainLayout>
  );
};

export default CreateQuiz;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 30,
  },
  coverImageBox: {
    justifyContent: 'center',
    backgroundColor: COLOR.LIGHT_GRAY,
    height: themeUtils.relativeHeight(25),
    borderRadius: 30,
  },
});
