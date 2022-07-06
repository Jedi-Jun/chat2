import {
  VStack,
  ButtonGroup,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Heading,
} from '@chakra-ui/react';
import { Form, Formik, useFormik } from 'formik';
import * as Yup from 'yup';

function Login() {
  /* const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required('Username required!')
        .min(10, 'Username too short!')
        .max(28, 'Username too long!'),
      password: Yup.string()
        .required('Password required!')
        .min(10, 'Password too short!'),
    }),
    onSubmit: (values, actions) => {
      alert(JSON.stringify(values, null, 2));
      actions.resetForm();
    },
  }); */

  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      validationSchema={Yup.object({
        username: Yup.string()
          .required('Username required!')
          .min(10, 'Username too short!')
          .max(28, 'Username too long!'),
        password: Yup.string()
          .required('Password required!')
          .min(10, 'Password too short!'),
      })}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2));
        actions.resetForm();
      }}
    >
      {formik => (
        <VStack
          as={Form}
          // as='form'
          w={{ base: '80%', md: '450px' }}
          m='auto'
          justify='center'
          height='100vh'
          spacing='1rem'
          // onSubmit={formik.handleSubmit}
        >
          <Heading>Log In</Heading>
          <FormControl
            isInvalid={formik.errors.username && formik.touched.username}
          >
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
          <FormControl
            isInvalid={formik.errors.password /* && formik.touched.username */}
          >
            <FormLabel fontSize='smaller'>PASSWORD</FormLabel>
            <Input
              type='password'
              placeholder='Enter password'
              size='lg'
              // name='password'
              // value={formik.values.password}
              // onBlur={formik.handleBlur}
              // onChange={formik.handleChange}
              {...formik.getFieldProps('password')}
            />
            <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
          </FormControl>
          <ButtonGroup pt='1rem'>
            <Button colorScheme='teal' type='submit'>
              Login
            </Button>
            <Button type='button'>Create Account</Button>
          </ButtonGroup>
        </VStack>
      )}
    </Formik>
  );
}

export default Login;
