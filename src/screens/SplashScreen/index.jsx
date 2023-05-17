import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {IMAGES} from '../../utils/images';
import {ROUTE} from '../../routes/routes';

const SplashScreen = ({navigation}) => {
  const [isVisible, setIsVisible] = useState(true);
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
    // try {
    //   const value = await AsyncStorage.getItem('imageRecords');
    //   if (value) {
    //     await AsyncStorage.setItem('imageRecords', value);
    //   } else {
    //     await AsyncStorage.setItem('imageRecords', JSON.stringify([]));
    //   }
      // navigation.navigate(ROUTE.AUTHENTICATED, {screen: ROUTE.DASHBOARD});
     setTimeout(() => {
      navigation.dispatch(resetToUnAuth);
     }, 2000);
    // } catch (e) {
    //   console.log('Error while working with storage - ', e);
    // }
  };
  useEffect(() => {
    setStore();
  }, []);

  return (
    <View style={styles.container}>
      {isVisible && (
        <Image
          source={IMAGES.splash}
          alt={'splash screen'}
          style={styles.image}
        />
      )}
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
