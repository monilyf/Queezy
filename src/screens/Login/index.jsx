import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {IMAGES} from '../../utils/images';
import themeUtils from '../../utils/theme/themeUtils';
import {COLOR} from '../../utils/theme/colors';
import Label from '../../components/UI/Label';
import CommonButton from '../../components/UI/CommonButton';
import {ROUTE} from '../../routes/routes';
import CommonCard from '../../components/UI/CommonCard';

const Login = ({navigation}) => {
  const [isSignIn, setSignIn] = useState(true);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={IMAGES.bgImage}
        alt={'bgImage'}
        style={styles.image}>
        <View style={styles.container}>
          <Image source={IMAGES.appLogo} alt={'connect'} style={styles.logo} />
        </View>
        <CommonCard style={styles.container}>
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

          </View>
        </CommonCard>
      </ImageBackground>
    </View>
  );
};

export default Login;

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
  labelContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  logo: {
    height: themeUtils.relativeWidth(30),
    width: themeUtils.relativeWidth(30),
    resizeMode: 'contain',
  },
  form:{
    marginTop:themeUtils.relativeHeight(1)
  }
});
