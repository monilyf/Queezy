import {StyleSheet, View} from 'react-native';
import React from 'react';
import MainLayout from '../../../components/Layout/MainLayout';
import {ROUTE} from '../../../routes/routes';
import CommonButton from '../../../components/UI/CommonButton';
import {COLOR} from '../../../utils/theme/colors';
import {useDispatch} from 'react-redux';
import {logout} from '../../../redux/reducers/authSlice';
import {CommonActions} from '@react-navigation/native';

const Settings = ({navigation}) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: ROUTE.UNAUTHENTICATED}],
      }),
    );
  };
  return (
    <MainLayout headerLabel={ROUTE.SETTINGS}>
      <View style={styles.container}>
        <CommonButton
          variant={'labelOnly'}
          label={'Logout'}
          onPress={handleLogout}
          labelColor={COLOR.WHITE}
        />
      </View>
    </MainLayout>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
  },
});
