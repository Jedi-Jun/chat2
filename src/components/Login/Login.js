import { useNavigate } from 'react-router-dom';
import { VStack, ButtonGroup, Button, Heading } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import TextField from './TextField';

function Login() {
  const navigate = useNavigate();

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
      <VStack
        as={Form}
        w={{ base: '80%', md: '450px' }}
        m='auto'
        justify='center'
        height='100vh'
        spacing='1rem'
        // onSubmit={formik.handleSubmit}
      >
        <Heading>Log In</Heading>
        <TextField
          label='USERNAME'
          name='username'
          type='text'
          placeholder='Enter username'
          autoComplete='off'
          size='lg'
        />
        <TextField
          label='PASSWORD'
          name='password'
          type='password'
          placeholder='Enter password'
          size='lg'
        />
        <ButtonGroup pt='1rem'>
          <Button colorScheme='teal' type='submit'>
            Log In
          </Button>
          <Button type='button' onClick={() => navigate('/signup')}>
            Create Account
          </Button>
        </ButtonGroup>
      </VStack>
    </Formik>
  );
}

export default Login;
