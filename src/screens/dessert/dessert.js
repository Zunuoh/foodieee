import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { exp } from "react-native/Libraries/Animated/src/Easing";
import PizzaScreen from '../pizza/pizza';
import ShakeScreen from '../shake/shake';

const dessertList = [
  {
    id: "0",
    name: "Chocolate cake",
    image: require("../../../assets/Dessert/chocolateice.jpeg"),
  },
  {
    id: "1",
    name: "Cheese cake",
    image: require("../../../assets/Dessert/cheesecake1.jpeg"),
  },
  {
    id: "2",
    name: "Lemon cake",
    image: require("../../../assets/Dessert/lemoncheese.jpeg"),
  },
  {
    id: "3",
    name: "Red velvet cake",
    image: require("../../../assets/Dessert/redvelvet.jpeg"),
  },
  {
    id: "4",
    name: "Cheese cake",
    image: require("../../../assets/Dessert/cheesecake1.jpeg"),
  },
  {
    id: "5",
    name: "Cheese cake",
    image: require("../../../assets/Dessert/cheesecake1.jpeg"),
  },
];
const DessertScreen = () => {
  const [desserts, useDesserts] = useState(dessertList);
  return (
    <ScrollView>
      <View style={{ flex: 1, padding: 20 }}>
        <View style={{ paddingTop: 40 }}>
          <Text style={{ fontSize: 30, fontWeight: "bold", color: "#EF5D5F" }}>
            Hi Ama, Are you hungry?
          </Text>
          <Text style={{ fontSize: 30, color: "#EF5D5F" }}>Order & Eat.</Text>
        </View>

        <View style={{ paddingTop: 30 }}>
          <Text style={{ fontSize: 25, color: "#EF5D5F" }}>Categories</Text>
        </View>

        <View style={{ marginTop: 20 }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
              style={{
                width: 120,
                height: 120,
                marginRight: 20,
                borderRadius: 10,
                borderWidth: 0.5,
                justifyContent: "center",
                alignItems: "center",
                borderColor: "#EF5D5F"
              }}
              onPress={()=>{navigation.navigate('Pizza')}}
            >
              <Image
                source={require("../../../assets/pizza3.png")}
                style={{ width: 95, height: 95, borderRadius: 10 }}
              />
              <Text style={{ fontSize: 20 }}>Pizza</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 120,
                height: 120,
                marginRight: 20,
                borderRadius: 10,
                borderWidth: 0.5,
                justifyContent: "center",
                alignItems: "center",
                borderColor: "#EF5D5F",
              }}
            >
              <Image
                source={require("../../../assets/shake1.jpeg")}
                style={{ width: 95, height: 95, borderRadius: 10 }}
              />
              <Text style={{ fontSize: 20 }}>Shakes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 120,
                height: 120,
                marginRight: 20,
                borderRadius: 10,
                borderWidth: 0.5,
                justifyContent: "center",
                alignItems: "center",
                borderColor: "#EF5D5F",
              }}
              onPress={()=>{NavigationContainer.navigate('Shake')}}
            >
              <Image
                source={require("../../../assets/dessert1.jpeg")}
                style={{ width: 95, height: 95, borderRadius: 10 }}
              />
              <Text style={{ fontSize: 20 }}>Dessert</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 30, color: "#EF5D5F" }}>Dessert</Text>
        </View>

        <View
          style={{ flexDirection: "row", flexWrap: "wrap", paddingLeft: 15 }}
        >
          {desserts &&
            desserts.map((dessert) => {
              return (
                <View
                  style={{
                    backgroundColor: "#EF5D5F",
                    width: 150,
                    height: 200,
                    marginRight: 10,
                    marginTop: 10,
                    borderRadius: 10,
                    
                  }}
                >
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: 20,
                    }}
                  >
                    <Image
                      source={dessert.image}
                      style={{ width: 95, height: 95, borderRadius: 10 }}
                    />
                  </View>
                  <View style={{ paddingLeft: 20, paddingTop: 20 }}>
                    <Text style={{ fontSize: 20, color: "white" }}>
                      {dessert.name}
                    </Text>
                    <Text style={{ paddingTop: 5, color: "white" }}>
                      GHC30.00
                    </Text>
                  </View>
                </View>
              );
            })}
        </View>
      </View>
    </ScrollView>
  );
};
export default DessertScreen;
