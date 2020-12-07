import React, { useState } from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';

const LoginScreen = ()=>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const handleLogin = ()=>{
        if(username == ""  || password == ""){
            alert("Kindly fill all fields")
            
            
        }
        else{
            alert("Success")
        
        }
        return;

    }

    // const handleLogin =()=>{
    //     if(username.length && password.length != ""){
    //         alert("Success")
    //     }
    //     else
    //     alert("Fill fields")
    // }
    
   
    return(
        <View style={{flex:1, padding:20, backgroundColor:"#EF5D5F"}}>
         <View style={{flexDirection:"row", paddingTop:50}}>
             <View style={{}}>
             <Image source={require('../assets/pizza1.png')} style={{width:90, height:90}}/>
             </View>
             <View>
                 <Text style={{fontSize:40,color:"#FDF7F6"}}>Pizza</Text>
                 <Text style={{fontSize:40,color:"#FDF7F6", marginLeft:20}}>Hunter</Text>
             </View>
         </View>

         <View style={{backgroundColor:"white", height:"60%", marginTop:40, borderRadius:40, padding:30}}>
             <View style={{marginTop:40}}>
             <Text style={{fontSize:30, color:"#EF5D5F", fontWeight:"bold"}}>LOG IN</Text>
             </View>

             <View style={{marginTop:20}}>
             <Text style={{fontSize:30, color:"#EF5D5F", fontWeight:"300"}}>Username</Text>
             <View style={{borderBottomWidth:.5, marginTop:20}}>
             <TextInput
             placeholder=""
             onChangeText={setUsername}
             value={username}
             />
             </View>
             </View>

             <View style={{marginTop:20}}>
             <Text style={{fontSize:30, color:"#EF5D5F", fontWeight:"300"}}>Password</Text>
             <View style={{borderBottomWidth:.5, marginTop:20}}>
             <TextInput
             placeholder=""
             onChangeText={setPassword}
             value={password}
             />
             </View>
             </View>

             <TouchableOpacity style={{width:"90%", height:50, backgroundColor:"#EF5D5F", justifyContent:"center", alignItems:"center", marginTop:60, marginLeft:20, borderRadius:10}} onPress={()=>handleLogin()}>
                 <Text style={{fontSize:20,color:"#FDF7F6", }}>Log In</Text>
             </TouchableOpacity>
             

         </View>
        </View>
    );
}

export default LoginScreen;