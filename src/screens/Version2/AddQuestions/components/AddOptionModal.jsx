import {Image, Modal, StyleSheet, Switch, Text, TouchableOpacity, View} from 'react-native';
import React, { useEffect } from 'react';
import {addOptionModalvalidation} from '../../../../utils/validations';
import {useFormik} from 'formik';
import CommonInput from '../../../../components/UI/CommonInput';
import CommonButton from '../../../../components/UI/CommonButton';
import {COLOR} from '../../../../utils/theme/colors';
import themeUtils from '../../../../utils/theme/themeUtils';
import Label from '../../../../components/UI/Label';
import {ICONS} from '../../../../utils/images';

const AddOptionModal = ({open, onClose, onSave, current}) => {
  const {
    handleChange,
    handleSubmit,
    values,
    touched,
    errors,
    setFieldValue,
    resetForm,
    setValues
  } = useFormik({
    initialValues: {
      option: '',
      is_correct_answer: false,
    },
    validationSchema: addOptionModalvalidation,
    onSubmit: values => {
      console.log('values: ', values);
        onSave(values);
        handleClose();   
    },
  });
  useEffect(() => {
   if(Object.keys(current).length){
    setValues({
      option:current.option,
      is_correct_answer:current.is_correct_answer
    })
   }
  }, [current])
  
  const handleClose = () => {
    if(onClose){
        resetForm();
        onClose()
    }
  }
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={open}
      onRequestClose={handleClose}>
      <View style={styles.modalContainer}>
        <View style={styles.topView}>
          <TouchableOpacity style={{  alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',}} onPress={handleClose}>
          <Label large bold color={COLOR.PRIMARY}>
              Add Option
            </Label>
            <Image source={ICONS.close} style={styles.image} />
          </TouchableOpacity>
          <CommonInput
            placeholder={'Add option'}
            error={touched.option && errors.option}
            value={values.option}
            onChangeText={handleChange('option')}
            style={{width: '100%'}}
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Label bold>Correct answer</Label>
            <Switch
              trackColor={{false: COLOR.GRAY_BORDER, true: COLOR.PRIMARY}}
              thumbColor={
                values.is_correct_answer ? COLOR.WHITE : COLOR.LIGHT_GRAY
              }
              onValueChange={value => setFieldValue('is_correct_answer', value)}
              value={values.is_correct_answer}
            />
          </View>
          <CommonButton
            style={{marginTop: themeUtils.relativeHeight(2)}}
            label={'Add'}
            labelColor={COLOR.WHITE}
            onPress={handleSubmit}
          />
        </View>
      </View>
    </Modal>
  );
};

export default AddOptionModal;

const styles = StyleSheet.create({
  topView: {
    width: '95%',
    marginHorizontal: themeUtils.relativeWidth(3),
    // marginTop: themeUtils.relativeWidth(26),
    padding: themeUtils.relativeWidth(5),
    borderRadius: 20,
    backgroundColor: COLOR.WHITE,
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
justifyContent:'center',

    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  image: {
    height: themeUtils.relativeHeight(2.5),
    width: themeUtils.relativeHeight(2.5),
  },
});
