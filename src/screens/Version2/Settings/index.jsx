import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import MainLayout from '../../../components/Layout/MainLayout';
import {ROUTE} from '../../../routes/routes';
import CommonButton from '../../../components/UI/CommonButton';
import {COLOR} from '../../../utils/theme/colors';
import {useDispatch} from 'react-redux';
import {logout} from '../../../redux/reducers/authSlice';
import {CommonActions} from '@react-navigation/native';
import themeUtils from '../../../utils/theme/themeUtils';
import Label from '../../../components/UI/Label';
import {ICONS} from '../../../utils/images';

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

  const Card = ({title, subTitle, icon, onPress}) => {
    return (
      <View style={styles.card}>
        <View style={styles.details}>
          <View style={styles.imageBox}>
            <Image source={icon} style={styles.cardIcon} />
          </View>
          <View>
            <Label bolder>{title}</Label>
            <Label
              bold
              small
              color={COLOR.GRAY}
              mt={themeUtils.relativeWidth(1)}>
              {subTitle}
            </Label>
          </View>
        </View>
        <TouchableOpacity style={styles.rightArrow} onPress={onPress}>
          <Image source={ICONS.rightArrow} style={styles.rightArrow} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <MainLayout
      headerLabel={ROUTE.SETTINGS}
      headerLabelColor={COLOR.BLACK}
      style={styles.main}>
      <ScrollView style={styles.container}>
        <Label
          small
          bolder
          color={COLOR.GRAY}
          mb={themeUtils.relativeHeight(1)}>
          ACCOUNT
        </Label>
        <Card
          icon={ICONS.user}
          title={'Update Profile'}
          subTitle={'Update username, country, etc'}
          onPress={() => {}}
        />
        <Card
          icon={ICONS.email}
          title={'Change Email Address'}
          subTitle={'madias@yahoo.com'}
          onPress={() => {}}
        />
        <Card
          icon={ICONS.lock}
          title={'Change Password'}
          subTitle={'Last change 1 year ago'}
          onPress={() => {}}
        />
        <Label
          small
          bolder
          color={COLOR.GRAY}
          mt={themeUtils.relativeHeight(3)}
          mb={themeUtils.relativeHeight(1)}>
          OTHER
        </Label>
        <Card
          icon={ICONS.questionMark}
          title={'FAQ'}
          subTitle={'Most frequently asked question'}
          onPress={() => {}}
        />
        <CommonButton
          style={{marginTop: themeUtils.relativeHeight(2)}}
          variant={'labelOnly'}
          label={'Logout'}
          onPress={handleLogout}
          labelColor={COLOR.ERROR}
        />
      </ScrollView>
    </MainLayout>
  );
};

export default Settings;

const styles = StyleSheet.create({
  main: {
    backgroundColor: COLOR.WHITE,
    paddingHorizontal: themeUtils.relativeHeight(2.5),
  },
  container: {
    marginVertical: themeUtils.relativeHeight(2),
  },
  card: {
    backgroundColor: COLOR.LIGHT_GRAY,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: themeUtils.relativeHeight(2),
    borderRadius: 20,
    marginVertical: themeUtils.relativeHeight(1),
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightArrow: {
    height: themeUtils.relativeWidth(6),
    width: themeUtils.relativeWidth(6),
  },
  cardIcon: {
    height: themeUtils.relativeWidth(8),
    width: themeUtils.relativeWidth(8),
  },
  imageBox: {
    padding: themeUtils.relativeWidth(3),
    borderRadius: 30,
    backgroundColor: COLOR.WHITE,
    marginRight: themeUtils.relativeWidth(4),
  },
});
