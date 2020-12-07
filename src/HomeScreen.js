import React, { useState } from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';

const pizzaList=[{"id":"0", "name":"Barbecue Pizza", "image":require('../assets/Pizza/barbecuepizza.png')}, {"id":"1", "name":"Hawaiian Pizza", "image":require('../assets/Pizza/hawaianpizza.png')}, {"id":"2", "name":"Meat Lovers Pizza", "image":require('../assets/Pizza/meatlovers.png')},
{"id":"3", "name":"Mozarellac Cheese Pizza", "image":require('../assets/Pizza/mozarellacheese.jpeg')}, {"id":"4", "name":"Peperoni Pizza", "image":require('../assets/Pizza/peperoni.png')}, {"id":"5", "name":"Veggie Supreme Pizza", "image":require('../assets/Pizza/veggiesupreme.jpeg')}]

const HomeScreen = ()=>{
    const [pizzas, setPizzas] = useState(pizzaList);
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

            <View style={{marginTop:20}}>
                <Text style={{fontSize:30, color:"#EF5D5F"}}>Pizza</Text>
            </View>
            
                <View style={{flexDirection:"row", flexWrap:"wrap", paddingLeft:15}}>
                {pizzas && pizzas.map((pizza)=>{
                return(
                <View style={{backgroundColor:"#EF5D5F", width:150, height:200, marginRight:10, marginTop:10, borderRadius:10}}>
                <View style={{justifyContent:"center", alignItems:"center", marginTop:20}}>
                <Image source={pizza.image} style={{width:95, height:95, borderRadius:10}}/>
                </View>
                <View style={{paddingLeft:20, paddingTop:20}}>
                <Text style={{fontSize:20, color:"white"}}>{pizza.name}</Text>
                <Text style={{paddingTop:5, color:"white"}}>GHC30.00</Text>
                </View>
                </View>
               
                )
            })}
             </View>
              
        </View>
        </ScrollView>
    );
}

export default HomeScreen;