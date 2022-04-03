import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Container, Content, Header, Item, Footer, FooterTab, Spinner } from 'native-base';
import { Row, Col } from 'react-native-easy-grid';
import { useDispatch, useSelector } from 'react-redux';

const AboutApp = ({route, navigation}) => {
  const dispatch = useDispatch()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const name = useSelector((state) => state.data.name);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* isiheader */}
      </View>
      <View style={styles.body}>
        <Text style={styles.textLogin}>About App</Text>
        <View style={styles.boxAbout}>
          <Text style={[styles.textLogin,{textAlign:'center'}]}>
            Aplikasi ini sebuat aplikasi sederhananya yg didalamnya ada beberapa implementasi materi, dan dibuat untuk memenuhi tugas akhir. </Text>
        </View>
      </View>
      <View style={styles.footer}>
      <Row>
        <Col>
            <View style={styles.viewColItem}>
                <TouchableOpacity style={styles.tBeranda} onPress={() => navigation.push('Home')}>
                    <Text style={styles.textMenu}>Home</Text>
                </TouchableOpacity>
            </View>
        </Col>
        <Col>
            <View style={styles.viewColItem}>
                <TouchableOpacity style={styles.tKategori} onPress={() => navigation.push('About')}>
                    <Text style={styles.textMenu}>About</Text>
                </TouchableOpacity>
            </View>
        </Col>
        <Col>
            <View style={styles.viewColItem}>
                <TouchableOpacity style={styles.tKategori} onPress={() => navigation.push('Login')}>
                    <Text style={styles.textMenu}>Logout</Text>
                </TouchableOpacity>
            </View>
        </Col>
      </Row>
      </View>
    </View>
  )
}

export default AboutApp

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
    // justifyContent:'center'
  },
  logo: {
    width: 107,
    height: 85
  },
  footer: {
    height:'10%',
    backgroundColor:'#20CE65',
  },
  textLogin: {
    color:'white',
    fontSize: 20,
    fontWeight:'bold',
    marginTop: 10
  },
  inputField: {
    backgroundColor: '#FCF4F4',
    paddingHorizontal: 10,
    width:'60%',
    height: 50,
    borderRadius: 10
  },
  viewColItem: {
    height: '100%', 
    justifyContent: 'center',
    alignItems:'center'
  },
  textMenu: {
    color:'white',
    fontSize:20,
    fontWeight:'bold'
  },
  boxAbout: {
    height:'50%',
    width:'80%',
    borderWidth: 1,
    borderColor:'#20CE65',
    borderRadius: 10,
    marginTop: 10

  }
})