import React from 'react'
import {View,StyleSheet,Keyboard,KeyboardAvoidingView,TextInput,Text,Platform,Button,TouchableWithoutFeedback} from 'react-native';

function KeyboardAvoidingViews() {
    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding':'height'}
        style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.inner}>
                    <Text style={styles.header}>Header</Text>
                    <TextInput style={styles.textInput} placeholder="Username"/>
                    <View style={styles.btnContainer}>
                        <Button title="Submit" onPress={()=>null}/>
                    </View>
                </View>
            </TouchableWithoutFeedback>
            
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    inner:{
        padding:25,
        flex:1,
        justifyContent:'space-around',
    },
    header:{
        fontSize:33,
        marginBottom:33,
    },
    textInput:{
        height:40,
        borderBottomColor:"#000",
        borderBottomWidth:3,
        marginBottom:35,
    },
    btnContainer:{
        backgroundColor:"#fff",
        marginTop:12,
    }
})

export default KeyboardAvoidingViews
