import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from '@chakra-ui/react';
import { Field, useField } from 'formik';

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <FormControl isInvalid={meta.error && meta.touched}>
      <FormLabel fontSize='smaller'>{label}</FormLabel>
      <Input as={Field} {...field} {...props} />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
  /* return (
    <FormControl isInvalid={formik.errors.username && formik.touched.username}>
      <FormLabel fontSize='smaller'>USERNAME</FormLabel>
      <Input
        type='text'
        placeholder='Enter username'
        autoComplete='off'
        size='lg'
        // value={formik.values.username}
        // name='username'
        // onBlur={formik.handleBlur}
        // onChange={formik.handleChange}
        {...formik.getFieldProps('username')}
      />
      <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
    </FormControl>
  ); */
};

export default TextField;
