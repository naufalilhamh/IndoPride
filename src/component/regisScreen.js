import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Button, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setName, setRegister } from "../redux/dataSlice";
import { Formik } from 'formik'
import * as yup from 'yup'
import { SafeAreaView } from 'react-native-safe-area-context';
const RegisScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (value) => {
    dispatch(setName(value.firstname + " " + value.lastname))
    dispatch(setRegister(value))
    setTimeout(() => {
      navigation.push('Home')
    }, 700);
  }

  const regisValidationSchema = yup.object().shape({
    firstname: yup
      .string()
      .required('Firstname is required'),
    lastname: yup
      .string()
      .required('Lastname is required'),
    email: yup
      .string()
      .email("Please enter valid email")
      .required('Email Address is Required'),
    password: yup
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required'),
    confirmpassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  })

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {/* isiheader */}
      </View>
      <View style={styles.body}>
        <Image source={require('./../assets/img/logoIndoPride.png')} style={styles.logo} />
        <Text style={styles.textLogin}>Register</Text>
        <ScrollView contentContainerStyle={{alignItems:'center'}} style={{width:'90%'}}>

        <Formik
            validationSchema={regisValidationSchema}
            initialValues={{ firstname: '', lastname: '', email: '', password: '', confirmpassword:''}}
            onSubmit={values => handleSubmit(values)}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              isValid,
            }) => (
              <>
                <TextInput
                  name="firstname"
                  placeholder="First Name"
                  style={styles.inputField}
                  onChangeText={handleChange('firstname')}
                  onBlur={handleBlur('firstname')}
                  value={values.firstname}
                />
                {errors.firstname &&
                  <Text style={{ fontSize: 10, color: 'red' }}>{errors.firstname}</Text>
                }
                <TextInput
                  name="lastname"
                  placeholder="Last Name"
                  style={styles.inputField}
                  onChangeText={handleChange('lastname')}
                  onBlur={handleBlur('lastname')}
                  value={values.lastname}
                />
                {errors.lastname &&
                  <Text style={{ fontSize: 10, color: 'red' }}>{errors.lastname}</Text>
                }
                <TextInput
                  name="email"
                  placeholder="Email Address"
                  style={styles.inputField}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                />
                {errors.email &&
                  <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>
                }
                <TextInput
                  name="password"
                  placeholder="Password"
                  style={styles.inputField}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry
                  
                />
                {errors.password &&
                  <Text style={{ fontSize: 10, color: 'red' }}>{errors.password}</Text>
                }
                <TextInput
                  name="confirmpassword"
                  placeholder="Confirm Password"
                  style={styles.inputField}
                  onChangeText={handleChange('confirmpassword')}
                  onBlur={handleBlur('confirmpassword')}
                  value={values.confirmpassword}
                  secureTextEntry
                  
                />
                {errors.confirmpassword &&
                  <Text style={{ fontSize: 10, color: 'red' }}>{errors.confirmpassword}</Text>
                }
                <TouchableOpacity style={!isValid ? styles.buttonLoginDisable : styles.buttonLogin} onPress={handleSubmit} disabled={!isValid}>
                  <Text style={styles.textButton}>Register</Text>
                </TouchableOpacity>
              </>
            )}
          </Formik>
          </ScrollView>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.push('Login')} >
          <Text>Already have an account?Sign In</Text>
        </TouchableOpacity>
        <Text style={{marginTop:10}}>Copyright © #INDOPRIDE</Text>
      </View>
    </SafeAreaView>
  )
}



export default RegisScreen

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor:'#19232B'
  }, header: {
    height:'5%',
    backgroundColor:'#20CE65'
  },
  body: {
    height: '85%',
    backgroundColor: '#19232B',
    alignItems:'center',
  },
  logo: {
    width: 107,
    height: 85
  },
  footer: {
    height:'10%',
    backgroundColor:'#20CE65',
    alignItems:'center',
    justifyContent:'center',
  },
  textLogin: {
    color:'white',
    fontSize:30,
    fontWeight:'bold',
    marginTop: 30
  },
  inputField: {
    backgroundColor: '#FCF4F4',
    paddingHorizontal: 10,
    width:'60%',
    height: 50,
    borderRadius: 10,
    marginTop: 30
  },
  buttonLogin: {
    marginTop: 30,
    width:'60%',
    height: 50,
    borderRadius: 10,
    backgroundColor:'#20CE65',
    justifyContent: 'center'
  },
  buttonLoginDisable: {
    marginTop: 30,
    width:'60%',
    height: 50,
    borderRadius: 10,
    backgroundColor:'gray',
    justifyContent: 'center'
  },
  textButton: {
    fontSize:20,
    fontWeight:'bold',
    textAlign: 'center',
  },
})