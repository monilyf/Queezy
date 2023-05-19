import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import MainLayout from '../../components/Layout/MainLayout';
import CommonCard from '../../components/UI/CommonCard';
import {QUIZ_CATEGORY} from '../../utils/constant';
import themeUtils from '../../utils/theme/themeUtils';
import {COLOR} from '../../utils/theme/colors';
import Label from '../../components/UI/Label';

const ChooseCategory = ({navigation}) => {
  const [selectedItem, setSelectedItem] = useState();
  const renderItem = ({item}) => {
    const labelColor = selectedItem === item.id ? COLOR.WHITE : COLOR.PRIMARY;
    return (
      <TouchableOpacity
        style={[
          styles.category,
          selectedItem === item.id && {backgroundColor: COLOR.PINK},
        ]}
        onPress={() => setSelectedItem(item.id)}>
        <View style={styles.imageBox}>
          <Image source={item.image} style={styles.image} />
        </View>
        <Label bold color={labelColor} mt={themeUtils.relativeHeight(1)}>
          {item.name}
        </Label>
        <Label
          xsmall
          color={labelColor}
          mt={themeUtils.relativeHeight(
            1,
          )}>{`${item.total_quizzes} Quizzes`}</Label>
      </TouchableOpacity>
    );
  };
  return (
    <MainLayout
      headerLabel={'Choose Category'}
      onBackPress={() => navigation.goBack()}>
      <CommonCard style={styles.container}>
        <FlatList
          data={QUIZ_CATEGORY}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
          scrollEnabled={true}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        />
      </CommonCard>
    </MainLayout>
  );
};

export default ChooseCategory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 30,
  },
  category: {
    borderRadius: 30,
    backgroundColor: COLOR.LIGHT_GRAY,
    paddingVertical: themeUtils.relativeHeight(2),
    paddingHorizontal: themeUtils.relativeHeight(5),
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBox: {
    borderRadius: 20,
    backgroundColor: COLOR.WHITE,
    padding: themeUtils.relativeHeight(1.5),
  },
  image: {
    height: themeUtils.relativeHeight(4),
    width: themeUtils.relativeHeight(4),
  },
});
