import React, { Component,useState } from 'react';
import { AppRegistry, Button, TextInput, View, StyleSheet,ImageBackground,Image,Text} from 'react-native';
import {useNavigation} from 'react-navigation';
const Navigation=()=>{
const Nav= useNavigation();
function onBackPressed(){
    Nav.goBack()
}
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Dashboard Screen</Text>
    <Button title="Click to go Back"
    onPress= {()=>onBackPressed()}
    />
    </View>
);
}
export default Navigation;