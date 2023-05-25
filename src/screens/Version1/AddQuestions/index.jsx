import {
  Alert,
  FlatList,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useMemo, useState} from 'react';
import MainLayout from '../../components/Layout/MainLayout';
import CommonCard from '../../components/UI/CommonCard';
import Label from '../../components/UI/Label';
import themeUtils from '../../utils/theme/themeUtils';
import {COLOR} from '../../utils/theme/colors';
import CommonButton from '../../components/UI/CommonButton';
import ImageUpload from '../../components/UI/ImageUpload';
import {ROUTE} from '../../routes/routes';
import {useFormik} from 'formik';
import CommonInput from '../../components/UI/CommonInput';
import {ICONS} from '../../utils/images';
import AddOptionModal from './components/AddOptionModal';

const AddQuestions = ({navigation, route}) => {
  const {totalQuestion} = route.params;
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [showOptionModal, setOptionModal] = useState({
    isOpen: false,
    current: null,
  });

  const totalPages = useMemo(() => {
    let newArray = Array(totalQuestion)
      .fill()
      .map((_, id) => id + 1);
    return totalQuestion ? newArray : [];
  }, [totalQuestion]);
  const {
    handleChange,
    handleSubmit,
    values,
    touched,
    errors,
    handleBlur,
    setFieldValue,
    resetForm,
  } = useFormik({
    initialValues: {
      questionImage: '',
      question: '',
      options: [{id: 1}, {id: 2}, {id: 3}, {id: 4}],
      intervalTime: '10',
      questionArray:[{queNo:1}]
    },
    // validationSchema: createQuizValidation,
    onSubmit: async values => {
    //   navigation.navigate(ROUTE.ADD_QUESTIONS, {
    //     totalQuestion: Number(values.totalQuestion),
    //   });
    // setFieldValue()
    const questionArrayClone = values.questionArray
    const index = values.questionArray.findIndex((que)=>que.queNo===currentQuestion)

    },
  });
  const handleOptions = ({option, isCorrectAnswer}) => {
    const optionClone = [...values.options];
    const index = optionClone.findIndex(
      item => item.id === showOptionModal.current,
    );
    if (index > -1) {
      optionClone[index] = {
        ...values.options[index],
        option,
        isCorrectAnswer,
      };
    }
    setFieldValue('options', optionClone);
    setOptionModal({isOpen: false, id: null});
  };
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.optionBox}
        onPress={() => setOptionModal({isOpen: true, current: item.id})}>
        {!item.option && <Image source={ICONS.add} style={styles.image} />}
        <Label
          bold
          small
          color={COLOR.PRIMARY}
          mt={themeUtils.relativeHeight(1)}>
          {item.option ? item.option : 'Add Answer'}
        </Label>
      </TouchableOpacity>
    );
  };
  return (
    <MainLayout
      headerLabel={'Create Quiz'}
      onBackPress={() => navigation.goBack()}>
      <CommonCard style={styles.container}>
        <ScrollView
          horizontal={true}
          alwaysBounceVertical
          contentContainerStyle={styles.pageContainer}
          showsHorizontalScrollIndicator={false}>
          {totalPages.map(item => {
            return (
              <TouchableHighlight
                onPress={() => setCurrentQuestion(item)}
                style={[
                  styles.pageNumber,
                  {
                    backgroundColor:
                      currentQuestion === item ? COLOR.BLACK : COLOR.WHITE,
                  },
                ]}>
                <Label
                  align={'center'}
                  color={currentQuestion === item ? COLOR.WHITE : COLOR.GRAY}>
                  {item}
                </Label>
              </TouchableHighlight>
            );
          })}
        </ScrollView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ImageUpload onImageUpload={() => {}} />
          <View style={styles.optionContainer}>
            <View style={styles.option}>
              <TextInput
                maxLength={2}
                name={'intervalTime'}
                onBlur={handleBlur}
                value={values.intervalTime}
                keyboardType="number-pad"
                onChangeText={handleChange('intervalTime')}
                style={{fontSize: themeUtils.fontSmall, fontWeight: '600'}}
              />
              <Label ms={themeUtils.relativeWidth(1)} small bolder>
                Sec
              </Label>
            </View>
            <View style={styles.option}>
              <Label ms={themeUtils.relativeWidth(1)} small bolder>
                Multiple Answer
              </Label>
            </View>
          </View>
          <CommonInput
            label={'Add Question'}
            placeholder={'Enter your question'}
            error={touched.question && errors.question}
            value={values.question}
            onChangeText={handleChange('question')}
          />
          <FlatList
            data={values.options}
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
        </ScrollView>
        <CommonButton
          label={`Save Question ${currentQuestion}`}
          labelColor={COLOR.WHITE}
          onPress={handleSubmit}
        />
      </CommonCard>
      <AddOptionModal
        open={showOptionModal.isOpen}
        onClose={() => setOptionModal({isOpen: false, current: null})}
        onSave={value => handleOptions(value)}
      />
    </MainLayout>
  );
};

export default AddQuestions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pageContainer: {
    // height: themeUtils.relativeHeight(6),
    paddingBottom: themeUtils.relativeHeight(2),
  },
  pageNumber: {
    marginHorizontal: themeUtils.relativeWidth(1),
    height: themeUtils.relativeHeight(4),
    width: themeUtils.relativeHeight(4),
    borderRadius: 50,
    justifyContent: 'center',
  },
  optionContainer: {
    marginVertical: themeUtils.relativeHeight(2),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  option: {
    borderWidth: 0.5,
    borderColor: COLOR.GRAY,
    borderRadius: 12,
    padding: themeUtils.relativeHeight(1),
    flexDirection: 'row',
  },
  optionBox: {
    borderRadius: 20,
    backgroundColor: COLOR.LIGHT_GRAY,
    paddingVertical: themeUtils.relativeHeight(2.5),
    paddingHorizontal: themeUtils.relativeHeight(3.5),
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: themeUtils.relativeWidth(40),
  },

  image: {
    height: themeUtils.relativeHeight(2),
    width: themeUtils.relativeHeight(2),
  },
});
