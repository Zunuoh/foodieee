import React, { useState } from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import {Feather} from '@expo/vector-icons';

const restaurantList=[{"id":"0", "name":"Papas Pizza", "image":require('../assets/Restaurants/papaspizza.jpeg'), "location":"Osu, East Legon, North Legon"}, {"id":"1", "name":"Kareena Cake", "image":require('../assets/Restaurants/kareena.jpeg'), "location":"Osu"}, {"id":"2", "name":"Sub box", "image":require('../assets/Restaurants/subbox.png'), "location":"Labone"},
{"id":"3", "name":"Shakes and Flavour", "image":require('../assets/Restaurants/shakes.jpeg'), "location":"Labone"}, {"id":"4", "name":"Bakeshop Classics", "image":require('../assets/Restaurants/bakeshop.png'), "labone":"Tse Addo, Spintex"}, {"id":"5", "name":"Eddys Pizza", "image":require('../assets/Restaurants/eddys.jpeg'), "location":"Osu, East Legon, Dansoman"}, {"id":"6", "name":"Eat by Zoe", "image":require('../assets/Restaurants/zoe.png'), "location":"Cantonments"}]

const HomeScreen = ({navigation})=>{
    const [restaurants, setRestaurants] = useState(restaurantList);
    return(
        <ScrollView>
        <View style={{flex:1, padding:20}}>
            <View style={{paddingTop:40}}>
                <Text style={{fontSize:30, fontWeight:"bold", color:"#EF5D5F"}}>Hi Ama, Are you hungry?</Text>
                <Text style={{fontSize:30, color:"#EF5D5F"}}>Order & Eat.</Text>
            </View>

            <View style={{paddingTop:20}}>
                <Text style={{fontSize:25, color:"black"}}>Categories</Text>
            </View>

            <View style={{marginTop:20}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity style={{width:120, height:120, marginRight:20, borderRadius:10, borderWidth:.5, justifyContent:"center", alignItems:"center", borderColor:"#EF5D5F"}} onPress={()=>{navigation.navigate('Pizza')}}>
                    <Image source={require('../assets/pizza3.png')} style={{width:95, height:95, borderRadius:10}}/>
                    <Text style={{fontSize:20}}>Pizza</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:120, height:120, marginRight:20, borderRadius:10, borderWidth:.5, justifyContent:"center", alignItems:"center",  borderColor:"#EF5D5F"}} onPress={()=>{navigation.navigate('Shake')}}>
                    <Image source={require('../assets/shake1.jpeg')} style={{width:95, height:95, borderRadius:10}}/>
                    <Text style={{fontSize:20}}>Shakes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:120, height:120, marginRight:20, borderRadius:10, borderWidth:.5, justifyContent:"center", alignItems:"center",  borderColor:"#EF5D5F"}} onPress={()=>{navigation.navigate('Dessert')}}>
                    <Image source={require('../assets/dessert1.jpeg')} style={{width:95, height:95, borderRadius:10}}/>
                    <Text style={{fontSize:20}}>Dessert</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>

            <View style={{marginTop:50}}>
                <Text style={{fontSize:25, color:"black"}}>PLACES YOU CAN ORDER FROM</Text>
            </View>
            
                <View >
            {restaurants && restaurants.map((restaurant =>{
                 return(
                    <View style={{width:320, height:150, marginRight:10, marginTop:10, borderBottomWidth:.5, flexDirection:"row", borderBottomColor:"#EF5D5F"}}>
                    <View style={{ marginLeft:10,marginTop:15}}>
                    <Image source={restaurant.image} style={{width:100, height:120, borderRadius:10}}/>
                    </View>
                    <View style={{paddingLeft:20, paddingTop:20}}>
                    <Text style={{fontSize:20, color:"#EF5D5F", fontWeight:"bold"}}>{restaurant.name.toUpperCase()}</Text>
                    <Text style={{paddingTop:5, color:"#EF5D5F", fontSize:20}}>Location:</Text>
                    <Text style={{paddingTop:5, color:"#EF5D5F"}}>{restaurant.location}</Text>
                    <Feather style={{marginTop:20}}
                    name="star"
                    color="black"
                    size={24}/>
                    </View>
                    </View>
                   
                    )
            }))}
             </View>
              
        </View>
        </ScrollView>
    );
}

export default HomeScreen;