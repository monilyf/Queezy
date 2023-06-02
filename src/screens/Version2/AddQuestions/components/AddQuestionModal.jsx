import {
  FlatList,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {addQuestionModalvalidation} from '../../../../utils/validations';
import {useFormik} from 'formik';
import CommonInput from '../../../../components/UI/CommonInput';
import CommonButton from '../../../../components/UI/CommonButton';
import {COLOR} from '../../../../utils/theme/colors';
import themeUtils from '../../../../utils/theme/themeUtils';
import Label from '../../../../components/UI/Label';
import {ICONS} from '../../../../utils/images';
import AddOptionModal from './AddOptionModal';
import {labelValuePairedArrayObject} from '../../../../utils/helper';
import {QUIZ_LEVELS} from '../../../../utils/constant';
import CommonDropdown from '../../../../components/UI/CommonDropdown';
import { useSelector } from 'react-redux';

const AddQuestionModal = ({open, onClose, onSave}) => {
  const [showOptionModal, setOptionModal] = useState({
    isOpen: false,
    current: null,
  });
  const [dropdownList, setDropdownList] = useState();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const {newQuestionArray} = useSelector(state => state.questions);
  const {currentQuestion} = useSelector(state => state.questions);
  console.log('currentQuestion: ', currentQuestion);

  useEffect(() => {
    const list = [...QUIZ_LEVELS.map(item=>{
      return {label:item.name,value:item.id}})];
    setDropdownList(list);
    return () => {
      resetForm();
    };
  }, []);
  useEffect(() => {
 if(Object.keys(currentQuestion).length){
  setValues({
    id:currentQuestion.id,
    question:currentQuestion.question,
    level_id:currentQuestion.level_id,
    interval_time:currentQuestion.interval_time,
    option_array:currentQuestion.option_array
  })
 }
  }, [currentQuestion])
  
  const {
    handleChange,
    handleSubmit,
    values,
    touched,
    errors,
    handleBlur,
    setFieldValue,
    resetForm,
    setValues
  } = useFormik({
    initialValues: {
      id:newQuestionArray?.length ? newQuestionArray?.length+1 : 1,
      question: '',
      level_id: '',
      interval_time: '10',
      option_array: [],
    },
    validationSchema: addQuestionModalvalidation,
    onSubmit: values => {
      onSave(values);
      handleClose();
    },
  });
  const handleClose = () => {
    if (onClose) {
      resetForm();
      onClose();
    }
  };
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.optionBox}
        onPress={() => setOptionModal({isOpen: true, current: item})}>
        {!item.option && <Image source={ICONS.add} style={styles.image} />}
        <Label bold small color={COLOR.PRIMARY}>
          {item.option ? item.option : 'Add Answer'}
        </Label>
      </TouchableOpacity>
    );
  };
  const handleOptions = ({id, option, is_correct_answer}) => {
    const idd = Number(values.option_array?.length+1)
    // const optionClone = [...values.option_array,{id ,option, is_correct_answer}];
    let optionClone = [...values.option_array];
    const index = optionClone.findIndex(
      item => item.id === id,
    );
    console.log('index: ', index);
    if (index > -1) {
      optionClone[index] = {id:idd ,option, is_correct_answer}
      }else{
        optionClone= [...values.option_array,{id:idd ,option, is_correct_answer}]
      }
    setFieldValue('option_array', optionClone);
    setOptionModal({isOpen: false, id: null});
  };
  console.log('option_array==',values.option_array)
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={open}
      onRequestClose={handleClose}>
      <View style={styles.modalContainer}>
        <View style={styles.topView}>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Label large bold color={COLOR.PRIMARY}>
              Add New Question
            </Label>
            <TouchableOpacity onPress={handleClose}>
              <Image source={ICONS.close} style={styles.image} />
            </TouchableOpacity>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.optionContainer}>
              <View style={styles.option}>
                <Image source={ICONS.time} style={styles.timer} />
                <TextInput
                  maxLength={2}
                  name={'interval_time'}
                  onBlur={handleBlur}
                  value={values.interval_time}
                  keyboardType="number-pad"
                  onChangeText={handleChange('interval_time')}
                  style={{fontSize: themeUtils.fontSmall, fontWeight: '600'}}
                />
                <Label ms={themeUtils.relativeWidth(1)} small bolder>
                  Sec
                </Label>
              </View>
              <View style={styles.option}>
                <Label ms={themeUtils.relativeWidth(1)} small bolder>
                  Multiple Choices
                </Label>
              </View>
            </View>
            <CommonInput
              label={'Add Question'}
              placeholder={'Enter your question'}
              error={touched.question && errors.question}
              value={values.question}
              name={'question'}
              onChangeText={handleChange('question')}
              onBlur={handleBlur}
            />
            <CommonDropdown
              label={'Level'}
              open={isDropdownOpen}
              value={values.level_id}
              items={dropdownList}
              error={touched.level_id && errors.level_id}
              placeholder={'Choose level'}
              setOpen={() => setDropdownOpen(true)}
              closeAfterSelecting={true}
              onClose={() => setDropdownOpen(false)}
              onSelectItem={v => {
                setFieldValue('level_id', v.value);
              }}
              style={[
                {
                  borderRadius: 20,
                  height: themeUtils.relativeHeight(7),
                  marginBottom: themeUtils.relativeHeight(1),
                },
                values.open && {marginBottom: themeUtils.relativeHeight(25)},
              ]}
            />
            <View style={{zIndex: -1}}>
             <FlatList
                data={values.option_array}
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
            </View>
          </ScrollView>
          <Label bolder mt={themeUtils.relativeHeight(2)} onPress={()=>setOptionModal({isOpen: true, current: ''})}>+ Add Options</Label>

          <CommonButton
            style={{marginTop: themeUtils.relativeHeight(2)}}
            label={'Save'}
            labelColor={COLOR.WHITE}
            onPress={handleSubmit}
          />
          {showOptionModal.isOpen && (
            <AddOptionModal
              open={showOptionModal.isOpen}
              current={showOptionModal.current}
              onClose={() => setOptionModal({isOpen: false, current: null})}
              onSave={value => handleOptions(value)}
            />
          )}
        </View>
      </View>
    </Modal>
  );
};

export default AddQuestionModal;

const styles = StyleSheet.create({
  topView: {
    width: '95%',
    marginHorizontal: themeUtils.relativeWidth(3),
    padding: themeUtils.relativeWidth(5),
    borderRadius: 20,
    backgroundColor: COLOR.WHITE,
    maxHeight:themeUtils.relativeHeight(80),
    minHeight:themeUtils.relativeHeight(70)

  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  image: {
    height: themeUtils.relativeHeight(2.5),
    width: themeUtils.relativeHeight(2.5),
    marginBottom: themeUtils.relativeHeight(1),
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
    alignItems: 'center',
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

  timer: {
    height: themeUtils.relativeHeight(2.5),
    width: themeUtils.relativeHeight(2.5),
    marginRight: themeUtils.relativeWidth(1),
  },
});
