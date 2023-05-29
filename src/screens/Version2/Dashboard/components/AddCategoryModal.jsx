import {
  Image,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {addCategoryModalvalidation} from '../../../../utils/validations';
import {useFormik} from 'formik';
import CommonInput from '../../../../components/UI/CommonInput';
import CommonButton from '../../../../components/UI/CommonButton';
import {COLOR} from '../../../../utils/theme/colors';
import themeUtils from '../../../../utils/theme/themeUtils';
import {ICONS} from '../../../../utils/images';
import CommonCard from '../../../../components/UI/CommonCard';

const AddCategoryModal = ({open, onClose, onSave}) => {
  const {
    handleChange,
    handleSubmit,
    values,
    touched,
    errors,
    resetForm,
  } = useFormik({
    initialValues: {
      name: '',
    },
    validationSchema: addCategoryModalvalidation,
    onSubmit: values => {
    //   onSave(values);
      handleClose();
    },
  });
  const handleClose = () => {
    if (onClose) {
      resetForm();
      onClose();
    }
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={open}
      onRequestClose={handleClose}>
      <View style={styles.modalContainer}>
        <CommonCard style={styles.topView}>
          <TouchableOpacity
            style={{alignItems: 'flex-end'}}
            onPress={handleClose}>
            <Image source={ICONS.close} style={styles.image} />
          </TouchableOpacity>
          <CommonInput
            label={'Add Category'}
            placeholder={'Add category name'}
            error={touched.name && errors.name}
            value={values.name}
            onChangeText={handleChange('name')}
            style={{width: '100%'}}
          />
          <CommonButton
            style={{marginTop: themeUtils.relativeHeight(2)}}
            label={'Save'}
            labelColor={COLOR.WHITE}
            onPress={handleSubmit}
          />
        </CommonCard>
      </View>
    </Modal>
  );
};

export default AddCategoryModal;

const styles = StyleSheet.create({
  topView: {
    marginTop: themeUtils.relativeWidth(26),
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  image: {
    height: themeUtils.relativeHeight(2.5),
    width: themeUtils.relativeHeight(2.5),
  },
});
