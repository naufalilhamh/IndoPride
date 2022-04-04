import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-native-easy-grid';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
const baseUrl = 'https://indopride.id/api/status.json';
const TweetScreen = ({route, navigation}) => {

  const [loading, setLoading] = useState(true);
  const [dataIngame, setDataIngame] = useState([]);

  useEffect(() => {
    axios.get(`${baseUrl}`).then((response) => {
      setDataIngame(response.data);
      setLoading(false)
    }).catch((error) => {
      console.log(error.response)
      setLoading(false)
    })
  }, [])

  const listTweet = () => {
    const listTweet = dataIngame.website.twitter.map((value) =>
        <View style={{ borderColor: 'black',borderBottomWidth:1, height:'auto', width:'100%', paddingHorizontal:10, paddingVertical:5}}>
            <Text style={styles.textTweet}>"{value.message}"</Text>
            <Text style={styles.textTweet}>- {value.author}</Text>
        </View>
    );
        return listTweet
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* isiheader */}
      </View>
      <View style={styles.body}>
        <Text style={styles.textLogin}>Tweet #INDOPRIDE Server</Text>
        { loading ? 
        <Text style={styles.textLogin}>Sedang Memuat Data ...</Text>
        : 
          <>
          <SafeAreaView style={{height:'95%', width:'90%',}}>
            <ScrollView style={styles.scrollView}>
              { dataIngame.website.twitter ? listTweet() : null}
            </ScrollView>
          </SafeAreaView>
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
                <TouchableOpacity style={styles.tBeranda} onPress={() => navigation.push('Tweet')}>
                    <Text style={styles.textLogin}>Tweet</Text>
                </TouchableOpacity>
            </View>
        </Col>
        <Col>
            <View style={styles.viewColItem}>
                <TouchableOpacity style={styles.tKategori} onPress={() => navigation.push('About')}>
                    <Text style={styles.textLogin}>Profile</Text>
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

export default TweetScreen

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
    paddingTop:20
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
  scrollView: {
    backgroundColor: '#FCF4F4',
    marginTop:10,
    height:'30%',
    borderRadius:10
  },
  textTweet:{
      color:'black',
      fontSize:15
  }
})