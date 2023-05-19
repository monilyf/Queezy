import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {IMAGES} from '../../utils/images';
import themeUtils from '../../utils/theme/themeUtils';
import {COLOR} from '../../utils/theme/colors';
import Label from '../../components/UI/Label';
import CommonButton from '../../components/UI/CommonButton';
import {ROUTE} from '../../routes/routes';
import CommonCard from '../../components/UI/CommonCard';

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={IMAGES.bgImage}
        alt={'bgImage'}
        style={styles.image}>
        <View style={styles.container}>
          <Image
            source={IMAGES.connect}
            alt={'connect'}
            style={styles.connectImgStyle}
          />
        </View>
        <CommonCard style={{alignItems:'center'}}>
          <Label ph={themeUtils.relativeWidth(1)} large bold align={'center'}>
            Take part in challenges with friends
          </Label>
          <View style={styles.buttonContainer}>
            <CommonButton
              label={'Sign Up'}
              onPress={() => navigation.navigate(ROUTE.LOGIN,{isSignIn:false})}
              labelColor={COLOR.WHITE}
            />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate(ROUTE.LOGIN,{isSignIn:true})}
            style={{
              flexDirection: 'row',
              marginTop: themeUtils.relativeHeight(1),
            }}>
            <Label small color={COLOR.GRAY}>
              Already have an account?{' '}
            </Label>
            <Label small color={COLOR.PRIMARY}>
              Login
            </Label>
          </TouchableOpacity>
        </CommonCard>
      </ImageBackground>
    </View>
  );
};

export default Welcome;

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
  imageContainer: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  connectImgStyle: {
    height: themeUtils.relativeWidth(70),
    width: '100%',
    resizeMode: 'contain',
  },
 
  buttonContainer: {
    marginTop: 20,
    width: '100%',
  },
});
