import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Row, Col } from 'react-native-easy-grid';

const AboutApp = ({route, navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* isiheader */}
      </View>
      <View style={styles.body}>
        <Text style={styles.textHeader}>Profile</Text>
        <Image source={require('./../assets/img/user.png')} style={styles.logo} />
        <Text style={[styles.text,{textAlign:'center'}]}>Khoerul Ageng Oktaviana</Text>
        <Text style={[styles.text,{textAlign:'center', fontSize:15, marginBottom:10}]}>React Native Developer</Text>
        <Row style={{ justifyContent:'center', height:'12%'}}>
          <Col style={{alignItems:'center', justifyContent:'center'}}>
            <Image source={require('./../assets/img/github.png')} style={styles.logoCV} />
            <Text style={{color:'white'}}>@khoerulageng</Text>
          </Col>
          <Col style={{alignItems:'center', justifyContent:'center'}}>
            <Image source={require('./../assets/img/gitlab.png')} style={styles.logoCV} />
            <Text style={{color:'white'}}>@khoerulageng</Text>
          </Col>
        </Row>
        <View style={styles.boxAbout}>
          <Text style={[styles.text,{textAlign:'center', color: '#20CE65'}]}>
            Program Language 
          </Text>
          <View style={{flexDirection:'row', marginLeft:20, alignItems:'center'}}>
            <Image source={require('./../assets/img/js.png')} style={styles.logoCV} />
            <Text style={[styles.text,{textAlign:'center'}]}> Javascript Basic</Text>
            <Text style={[styles.text,{textAlign:'center', color: '#20CE65'}]}> 80%</Text>
          </View>
          <View style={{flexDirection:'row', marginLeft:20, alignItems:'center'}}>
            <Image source={require('./../assets/img/html.png')} style={styles.logoCV} />
            <Text style={[styles.text,{textAlign:'center' }]}> HTML Basic</Text>
            <Text style={[styles.text,{textAlign:'center', color: '#20CE65'}]}> 70%</Text>
          </View>
          <View style={{flexDirection:'row', marginLeft:20, alignItems:'center'}}>
            <Image source={require('./../assets/img/css.png')} style={styles.logoCV} />
            <Text style={[styles.text,{textAlign:'center'}]}> CSS Basic</Text>
            <Text style={[styles.text,{textAlign:'center', color: '#20CE65'}]}> 60%</Text>
          </View>
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
                <TouchableOpacity style={styles.tBeranda} onPress={() => navigation.push('Tweet')}>
                    <Text style={styles.text}>Tweet</Text>
                </TouchableOpacity>
            </View>
        </Col>
        <Col>
            <View style={styles.viewColItem}>
                <TouchableOpacity style={styles.tKategori} onPress={() => navigation.push('About')}>
                    <Text style={styles.textMenu}>Profile</Text>
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
    width: 100,
    height: 100
  },
  logoCV: {
    width: 50,
    height: 50
  },
  footer: {
    height:'10%',
    backgroundColor:'#20CE65',
  },
  text: {
    color:'white',
    fontSize: 20,
    fontWeight:'bold',
    marginTop: 10
  },
  textHeader:{
    color:'white',
    fontSize: 40,
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
    height:'30%',
    width:'85%',
    borderWidth: 1,
    borderColor:'#20CE65',
    marginTop: 10

  }
})