import React,{Component} from "react";
import { Text , View, StyleSheet, TouchableOpacity, Platform, Image, ImageBackground} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export default class HomeScreen extends Component{
    render(){
        return(<ImageBackground style={styles.bgImage} source={require("../assets/bg.png")}>
            <View style={styles.container}>
                <SafeAreaView style={styles.SafeArea}/>
                <View style={styles.title}>
                    <Text style={styles.titleText}>
                        Estação Espacial 
                    </Text>
                </View>
                <TouchableOpacity style={styles.routeButton}>
                    <Text style={styles.routeText}>rastreador de EEI</Text>
                    <Text style={styles.bgDigit}>1</Text>
                    <Image source={require("../assets/iss_icon.png")} style={styles.iconImage}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={styles.routeButton}>
                    <Text style={styles.routeText}>Tela De Meteoros</Text>
                    <Text style={styles.bgDigit}>2</Text>
                    <Image source={require("../assets/meteor_icon.png")} style={styles.iconImage}></Image>
                </TouchableOpacity>
            </View>
        </ImageBackground>)

        
    }
}

const styles=StyleSheet.create({
    bgImage:{flex:1,
    resizeMode:"cover"
    },
    container:{
        flex:1,
        backgroundColor:"rgba(0,0,0,0.3)"
    },
    SafeArea:{
        marginTop:Platform.OS==="android"?StatusBar.currentHeight:0
    },
    title:{
      flex:0.30,
      justifyContent:"center",
      alignItems:"center",
      alignSelf:"center"
    },
    titleText:{
        fontSize:40,
        fontWeight:"bold",
        color:"white",
        width:"100%"
    },
    routeButton: {
        flex: 0.25,
        marginLeft: 50,
        marginTop: 50,
        marginRight: 50,
        borderRadius: 30,
        backgroundColor: "white",
        alignItems: "center",
      },
      routeText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "black",
        marginTop: 60,
        paddingLeft: 25,
      },
     
      iconImage: {
        position: "absolute",
        height: 200,
        width: 200,
        right: -30,
        top: -90,
      },
    
      knowMore: {
        paddingLeft: 30,
        color: "red",
        fontSize: 15,
      },
    
      bgDigit: {
        position: "absolute",
        color: "rgba(183, 183, 183, 0.5)",
        fontSize: 150,
        right: 20,
        bottom: -15,
        zIndex: -1,
      },
})