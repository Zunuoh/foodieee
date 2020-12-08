import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { exp } from 'react-native/Libraries/Animated/src/Easing';

const dessertList = [{"id":"0", "name":"Chocolate cake", "image":require('../assets/Dessert/chocolateice.jpeg')}, {"id":"1", "name":"Cheese cake", "image":require('../assets/Dessert/cheesecake1.jpeg')}, {"id":"2", "name":"Lemon cake", "image":require('../assets/Dessert/lemoncheese.jpeg')},
{"id":"3", "name":"Red velvet cake", "image":require('../assets/Dessert/redvelvet.jpeg')}, {"id":"4", "name":"Cheese cake", "image":require('../assets/Dessert/cheesecake1.jpeg')}, {"id":"5", "name":"Cheese cake", "image":require('../assets/Dessert/cheesecake1.jpeg')}]
const DessertScreen =()=>{
    return(
        <ScrollView>
        <View style={{flex:1, padding:20}}>
        <View style={{paddingTop:40}}>
                <Text style={{fontSize:30, fontWeight:"bold", color:"#EF5D5F"}}>Hi Ama, Are you hungry?</Text>
                <Text style={{fontSize:30, color:"#EF5D5F"}}>Order & Eat.</Text>
            </View>

            <View style={{paddingTop:30}}>
                <Text style={{fontSize:25, color:"#EF5D5F"}}>Categories</Text>
            </View>

            <View style={{marginTop:20}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity style={{width:120, height:120, marginRight:20, borderRadius:10, borderWidth:.5, justifyContent:"center", alignItems:"center", borderColor:"#EF5D5F"}}>
                    <Image source={require('../assets/pizza3.png')} style={{width:95, height:95, borderRadius:10}}/>
                    <Text style={{fontSize:20}}>Pizza</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:120, height:120, marginRight:20, borderRadius:10, borderWidth:.5, justifyContent:"center", alignItems:"center",  borderColor:"#EF5D5F"}}>
                    <Image source={require('../assets/shake1.jpeg')} style={{width:95, height:95, borderRadius:10}}/>
                    <Text style={{fontSize:20}}>Shakes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:120, height:120, marginRight:20, borderRadius:10, borderWidth:.5, justifyContent:"center", alignItems:"center",  borderColor:"#EF5D5F"}}>
                    <Image source={require('../assets/dessert1.jpeg')} style={{width:95, height:95, borderRadius:10}}/>
                    <Text style={{fontSize:20}}>Dessert</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
        </ScrollView>
        
    )
}
export default DessertScreen;