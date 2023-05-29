import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ICONS, IMAGES} from '../../utils/images';
import themeUtils from '../../utils/theme/themeUtils';
import {COLOR} from '../../utils/theme/colors';
import CommonButton from '../../components/UI/CommonButton';
import {ROUTE} from '../../routes/routes';
import CommonInput from '../../components/UI/CommonInput';
import {useFormik} from 'formik';
import {loginValidation, signupValidation} from '../../utils/validations';
import {setUserData} from '../../redux/reducers/authSlice';
import {useDispatch} from 'react-redux';
import {CommonActions} from '@react-navigation/native';
import PublicLayout from '../../components/Layout/PublicLayout';
import Label from '../../components/UI/Label';
import {api} from '../../api';

const Login = ({navigation, route}) => {
  const {params} = route;
  const [isSignIn, setSignIn] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    setSignIn(params.isSignIn);
  }, [params]);

  const {handleChange, handleSubmit, values, touched, errors, resetForm} =
    useFormik({
      initialValues: {
        email: '',
        password: '',
        name: '',
      },
      validationSchema: isSignIn ? loginValidation : signupValidation,
      onSubmit: async values => {
        if (isSignIn) {
          handleLogin();
        } else {
          // handleSignUp()
          // setSignIn(true);
          if (values.name === 'mansi') {
            dispatch(setUserData({role: 'player'}));
          } else {
            dispatch(setUserData({role: 'admin'}));
          }
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{name: ROUTE.AUTHENTICATED}],
            }),
          );
        }
      },
    });
  const handleLogin = async () => {
    const params = {email: values.email, password: values.password};
    try {
      const response = await api.auth.login(params);
      console.log('response: ', response);
    } catch (error) {
      console.log('error: ', error);
    }
  };
  useEffect(() => {
    resetForm();
  }, [isSignIn]);
  return (
    <PublicLayout>
      <View style={styles.labelContainer}>
        <CommonButton
          label={'Sign In'}
          style={{width: '40%'}}
          labelColor={isSignIn ? COLOR.WHITE : COLOR.PRIMARY}
          onPress={() => setSignIn(true)}
          variant={isSignIn ? 'contained' : 'outlined'}
        />
        <CommonButton
          label={'Sign Up'}
          style={{width: '40%'}}
          onPress={() => setSignIn(false)}
          variant={!isSignIn ? 'contained' : 'outlined'}
          labelColor={!isSignIn ? COLOR.WHITE : COLOR.PRIMARY}
        />
      </View>
      <View style={styles.form}>
        {!isSignIn && (
          <CommonInput
            label={'Name'}
            placeholder={'Your name'}
            icon={ICONS.user}
            error={touched.name && errors.name}
            value={values.name}
            onChangeText={handleChange('name')}
          />
        )}
        <CommonInput
          label={'Email Address'}
          placeholder={'Your email address'}
          icon={ICONS.email}
          error={touched.email && errors.email}
          value={values.email}
          onChangeText={handleChange('email')}
        />
        {isSignIn && (
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
        )}
        {/* {!isSignIn && (
                <CommonInput
                label={'Confirm Password'}
                placeholder={'Confirm your password'}
                icon={ICONS.lock}
                type={'passsword'}
                secureTextEntry={true}
                value={values.confirm_password}
                onChangeText={text => setFieldValue('confirm_password', text)}
                error={touched.confirm_password && errors.confirm_password}
                />
              )} */}
      </View>
      <CommonButton
        style={{marginTop: 5}}
        label={isSignIn ? 'Sign In' : 'Sign Up'}
        labelColor={COLOR.WHITE}
        onPress={handleSubmit}
      />
      {isSignIn ? (
        <CommonButton
          style={{marginTop: themeUtils.relativeHeight(3)}}
          label={'Forgot Password?'}
          labelColor={COLOR.PRIMARY}
          onPress={() => navigation.navigate(ROUTE.RESET_PASSWORD)}
          variant={'labelOnly'}
        />
      ) : (
        <Label
          xsmall
          color={COLOR.GRAY}
          align={'center'}
          mt={themeUtils.relativeHeight(2)}>
          By continuing, you agree to the{' '}
          <Label xsmall>Terms of Services & Privacy Policy</Label>.
        </Label>
      )}
    </PublicLayout>
  );
};

export default Login;

const styles = StyleSheet.create({
  labelContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  form: {
    marginTop: themeUtils.relativeHeight(1),
  },
});
