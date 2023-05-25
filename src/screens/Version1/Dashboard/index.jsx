import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import MainLayout from '../../components/Layout/MainLayout';
import themeUtils from '../../utils/theme/themeUtils';
import Label from '../../components/UI/Label';
import {COLOR} from '../../utils/theme/colors';
import {ICONS, IMAGES} from '../../utils/images';
import CommonButton from '../../components/UI/CommonButton';
import {ROUTE} from '../../routes/routes';

const Dashboard = ({navigation}) => {
  return (
    <MainLayout isDashboard={true} headerLabel={'Madelyn Dias'}>
      <View style={styles.container}>
        <View style={[styles.recentQuizCard, styles.flexRow]}>
          <View>
            <Label
              small
              bolder
              mb={themeUtils.relativeWidth(2)}
              color={COLOR.PINK_ROSE}
              letterSpacing={1}>
              RECENT QUIZ
            </Label>
            <View style={styles.flexRow}>
              <Image source={ICONS.headphone} style={styles.recentQuizLogo} />
              <Label
                bolder
                ms={themeUtils.relativeWidth(2)}
                color={COLOR.CORDOVAN}>
                A Basic Music Quiz
              </Label>
            </View>
          </View>
        </View>
        <View style={[styles.recentQuizCard, styles.featuredCard]}>
          <Label
            small
            bolder
            mb={themeUtils.relativeWidth(2)}
            color={COLOR.PINK_ROSE}
            letterSpacing={1}>
            FEATURED
          </Label>
          <Label
            bold
            ms={themeUtils.relativeWidth(2)}
            align={'center'}
            color={COLOR.CORDOVAN}
            letterSpacing={1}>
            Engage in quiz challenges and assess your performance by scoring
            yourself.
          </Label>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: themeUtils.relativeHeight(2),
            }}>
            <CommonButton
              style={{borderRadius: 50}}
              label={'Create Quiz'}
              labelColor={COLOR.PRIMARY}
              buttonColor={COLOR.WHITE}
              icon={IMAGES.logo}
              onPress={() => navigation.navigate(ROUTE.CREATE_QUIZ)}
            />
            <CommonButton
              style={{borderRadius: 50}}
              label={'Find Quiz'}
              labelColor={COLOR.PRIMARY}
              buttonColor={COLOR.WHITE}
              icon={IMAGES.logo}
              onPress={() => navigation.navigate(ROUTE.CHOOSE_CATEGORY)}
            />
          </View>
        </View>
      </View>
    </MainLayout>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container: {
    marginHorizontal: themeUtils.relativeWidth(1),
    alignItems: 'center',
  },
  recentQuizCard: {
    marginVertical: themeUtils.relativeHeight(2),
    alignItems: 'center',
    backgroundColor: COLOR.LIGHT_PINK,
    width: '100%',
    marginHorizontal: 10,
    borderRadius: 20,
    padding: themeUtils.relativeWidth(4),
  },
  recentQuizLogo: {
    height: themeUtils.relativeHeight(3),
    width: themeUtils.relativeHeight(3),
  },
  featuredCard: {
    backgroundColor: COLOR.SECONDARY,
  },
});
