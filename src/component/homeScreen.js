import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Container, Content, Header, Item, Footer, FooterTab, Spinner } from 'native-base';
import { Row, Col } from 'react-native-easy-grid';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
const baseUrl = 'https://indopride.id/api/status.json';
const homeScreen = ({route, navigation}) => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true);
  const [dataIngame, setDataIngame] = useState([]);
  const name = useSelector((state) => state.data.name);
  console.log(dataIngame)
  useEffect(() => {
    // Update the document title using the browser API
    axios.get(`${baseUrl}`).then((response) => {
      setDataIngame(response.data);
      setLoading(false)
    }).catch((error) => {
      console.log(error.response)
      setLoading(false)
    })
  });
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* isiheader */}
      </View>
      <View style={styles.body}>
        <Text style={styles.textLogin}>Selamat Datang, {name}</Text>
        { loading ? 
        <Text style={styles.textLogin}>Sedang Memuat Data ...</Text>
        : 
          <>
          <View style={{marginTop:20}}>
          <Text style={styles.textLogin}>Berikut Data Server Indopride</Text>
          <Text style={styles.textLogin}>Jumlah Pemain : {dataIngame.kota.players} </Text>
          <Text style={styles.textLogin}>Jumlah Pedagang : {dataIngame.kota.pedagang} </Text>
          </View>
          </>
        }
      </View>
      <View style={styles.footer}>
      <Row>
        <Col>
            <View style={styles.viewColItem}>
                <TouchableOpacity style={styles.tBeranda} onPress={() => navigation.push('Home')}>
                    <Text style={styles.textLogin}>Home</Text>
                </TouchableOpacity>
            </View>
        </Col>
        <Col>
            <View style={styles.viewColItem}>
                <TouchableOpacity style={styles.tKategori} onPress={() => navigation.push('About')}>
                    <Text style={styles.textLogin}>About</Text>
                </TouchableOpacity>
            </View>
        </Col>
        <Col>
            <View style={styles.viewColItem}>
                <TouchableOpacity style={styles.tKategori} onPress={() => navigation.push('Login')}>
                    <Text style={styles.textLogin}>Logout</Text>
                </TouchableOpacity>
            </View>
        </Col>
      </Row>
      </View>
    </View>
  )
}

export default homeScreen

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
    fontSize:20,
    fontWeight:'bold'
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
})