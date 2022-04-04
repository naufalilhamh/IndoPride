import React, {Component} from 'react';
import { View, TouchableOpacity, Text, StyleSheet, LayoutAnimation, Platform, UIManager, Image} from "react-native";

export default class Accordian extends Component{

    constructor(props) {
        super(props);
        this.state = { 
          expanded : false
        }

        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }
  
  render() {
    return (
       <View>
            <TouchableOpacity ref={this.accordian} style={styles.row} onPress={()=>this.toggleExpand()}>
                <Text style={[styles.title]}>{this.props.title}</Text>
                {
                this.state.expanded ? 
                    <Text>-</Text>
                :
                    <Text>V</Text>
                }
            </TouchableOpacity>
            <View style={styles.parentHr}/>
            {
                this.state.expanded &&
                <View style={styles.child}>
                    <Text style={styles.textLogin}>Pekerjaan EMS : {this.props.data.ems} </Text>
                    <Text style={styles.textLogin}>Pekerjaan Mekanik : {this.props.data.mekanik} </Text>
                    <Text style={styles.textLogin}>Pekerjaan Pedagang : {this.props.data.pedagang} </Text>
                    <Text style={styles.textLogin}>Pekerjaan Pengangguran : {this.props.data.players - (this.props.data.ems + this.props.data.mekanik + this.props.data.pedagang)} </Text>
                        
                </View>
            }
            
       </View>
    )
  }

  toggleExpand=()=>{
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({expanded : !this.state.expanded})
  }

}

const styles = StyleSheet.create({
    title:{
        fontSize: 14,
        fontWeight:'bold',
        color: "#000",
    },
    row:{
        flexDirection: 'row',
        justifyContent:'space-between',
        height:56,
        paddingLeft:25,
        paddingRight:18,
        alignItems:'center',
        backgroundColor: "#e3e3e3",
        borderBottomColor:"#000",
        borderBottomWidth:1,
        borderRadius:20
    },
    parentHr:{
        height:1,
        color: "white",
        width:'100%',
    },
    child:{
        backgroundColor: "#e3e3e3",
        padding:16,
        borderRadius:20
    },
    icon: {
        height: 20,
        width: 20,
      },
    
});