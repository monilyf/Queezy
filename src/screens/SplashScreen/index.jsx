import {CommonActions} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {IMAGES} from '../../utils/images';
import {ROUTE} from '../../routes/routes';
import {useSelector} from 'react-redux';

const SplashScreen = ({navigation}) => {
  const {user} = useSelector(state => state.auth);
  // Navigate to authenticated route
  const resetToAuth = CommonActions.reset({
    index: 0,
    routes: [{name: ROUTE.AUTHENTICATED}],
  });

  // Navigate to NotAuthenticated route
  const resetToUnAuth = CommonActions.reset({
    index: 0,
    routes: [{name: ROUTE.UNAUTHENTICATED}],
  });
  const setStore = async () => {
    setTimeout(() => {
      if (user) {
        navigation.dispatch(resetToAuth);
      } else {
        navigation.dispatch(resetToUnAuth);
      }
    }, 2000);
  };
  useEffect(() => {
    setStore();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={IMAGES.splash}
        alt={'splash screen'}
        style={styles.image}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
});
