import React from 'react';
import {Text, View, Image, ScrollView} from 'react-native';

const HomeScreen = ()=>{
    return(
        <View style={{flex:1, padding:20}}>
            <View style={{paddingTop:40}}>
                <Text style={{fontSize:30, fontWeight:"bold"}}>Hi Ama, Are you hungry?</Text>
                <Text style={{fontSize:30}}>Order & Eat.</Text>
            </View>

            <View style={{paddingTop:30}}>
                <Text style={{fontSize:25}}>Categories</Text>
            </View>

            <View style={{marginTop:20}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={{width:120, height:120, marginRight:20, borderRadius:10, borderWidth:1, justifyContent:"center", alignItems:"center"}}>
                    <Image source={require('../assets/pizza3.png')} style={{width:95, height:95, borderRadius:10, marginTop:-5}}/>
                    <Text style={{fontSize:20}}>Pizza</Text>
                    </View>
                    <View style={{backgroundColor:"red", width:120, height:120, marginRight:20, borderRadius:10, borderWidth:1, justifyContent:"center", alignItems:"center"}}>
                    <Image source={require('../assets/shake1.jpeg')} style={{width:95, height:95, borderRadius:10, marginTop:-5}}/>
                    <Text style={{fontSize:20}}>Shakes</Text>
                    </View>
                    <View style={{backgroundColor:"red", width:120, height:120, marginRight:20, borderRadius:10, borderWidth:1, justifyContent:"center", alignItems:"center"}}>
                    <Image source={require('../assets/dessert1.jpeg')} style={{width:95, height:95, borderRadius:10, marginTop:-5}}/>
                    <Text style={{fontSize:20}}>Dessert</Text>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

export default HomeScreen;