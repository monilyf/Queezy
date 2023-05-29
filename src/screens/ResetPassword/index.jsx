import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PublicLayout from '../../components/Layout/PublicLayout';
import themeUtils from '../../utils/theme/themeUtils';
import Label from '../../components/UI/Label';
import {COLOR} from '../../utils/theme/colors';
import CommonInput from '../../components/UI/CommonInput';
import {useFormik} from 'formik';
import {resetPasswordValidation} from '../../utils/validations';
import {ICONS} from '../../utils/images';
import CommonButton from '../../components/UI/CommonButton';
import {ROUTE} from '../../routes/routes';

const ResetPassword = ({navigation}) => {
  const {handleChange, handleSubmit, values, touched, errors} = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validationSchema: resetPasswordValidation,
    onSubmit: async values => {
      navigation.navigate(ROUTE.LOGIN);
    },
  });
  return (
    <PublicLayout
      headerShown={true}
      headerLabel={'Reset Password'}
      onBackPress={() => navigation.goBack()}>
      <View style={styles.labelContainer}>
        <Label color={COLOR.DARK_GRAY}>
          Your new password must be different from previous used passwords.
        </Label>
      </View>
      <View style={styles.form}>
        <CommonInput
          label={'Password'}
          placeholder={'Your password'}
          icon={ICONS.lock}
          type={'passsword'}
          secureTextEntry={true}
          value={values.password}
          maxLength={16}
          onChangeText={handleChange('password')}
          error={touched.password && errors.password}
        />
        <CommonInput
          label={'Confirm Password'}
          placeholder={'Confirm your password'}
          icon={ICONS.lock}
          type={'passsword'}
          secureTextEntry={true}
          maxLength={16}
          value={values.confirmPassword}
          onChangeText={handleChange('confirmPassword')}
          error={touched.confirmPassword && errors.confirmPassword}
        />
        <CommonButton
          style={{marginTop: 5}}
          label={'Reset Password'}
          labelColor={COLOR.WHITE}
          onPress={handleSubmit}
        />
      </View>
    </PublicLayout>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  labelContainer: {
    // width: '100%',
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-evenly',
  },

  form: {
    marginTop: themeUtils.relativeHeight(1),
  },
});
