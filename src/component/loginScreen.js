import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setName } from "../redux/dataSlice";
const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    dispatch(setName(username))
    if (password == '12345678') {
      navigation.push('Home', {username: username})
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* isiheader */}
      </View>
      <View style={styles.body}>
        <Image source={require('./../assets/img/logoIndoPride.png')} style={styles.logo} />
        <Text style={styles.textLogin}>LOGIN</Text>
        <TextInput style={styles.inputField} placeholder={'Username/Email'} onChangeText={setUsername} />
        <TextInput style={styles.inputField} placeholder={'Password'} onChangeText={setPassword} />
        <TouchableOpacity style={styles.buttonLogin} onPress={handleSubmit}  >
          <Text style={styles.textButton}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.push('Regis')} >
          <Text>Don't have an account yet? Create Account</Text>
        </TouchableOpacity>
        <Text style={{marginTop:10}}>Copyright © #INDOPRIDE</Text>
      </View>
    </View>
  )
}



export default LoginScreen

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
    justifyContent:'center'
  },
  logo: {
    width: 107,
    height: 85
  },
  footer: {
    height:'10%',
    backgroundColor:'#20CE65',
    alignItems:'center',
    justifyContent:'center'
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
  textButton: {
    fontSize:20,
    fontWeight:'bold',
    textAlign: 'center',
  },
})