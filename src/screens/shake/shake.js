import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const shakeList = [
  {
    id: "0",
    name: "Bournvitas Shake",
    image: require("../../../assets/Shakes/bournvitashake.jpeg"),
  },
  {
    id: "1",
    name: "Choco Peanut",
    image: require("../../../assets/Shakes/chocopeanut.jpeg"),
  },
  {
    id: "2",
    name: "Oreo Dessert",
    image: require("../../../assets/Shakes/oreodessertpots.jpeg"),
  },
  {
    id: "3",
    name: "Oreo Shake",
    image: require("../../../assets/Shakes/oreoshake.jpeg"),
  },
  {
    id: "4",
    name: "Salted Caramel Shake",
    image: require("../../../assets/Shakes/saltedcaramelshake.jpeg"),
  },
  {
    id: "5",
    name: "Vanilla Banana Shake",
    image: require("../../../assets/Shakes/vanillabanana.jpeg"),
  },
];
const ShakeScreen = () => {
  const [shakes, useShakes] = useState(shakeList);
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
                borderColor: "#EF5D5F",
              }}
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
          {shakes &&
            shakes.map((shake) => {
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
                      source={shake.image}
                      style={{ width: 95, height: 95, borderRadius: 10 }}
                    />
                  </View>
                  <View style={{ paddingLeft: 20, paddingTop: 20 }}>
                    <Text style={{ fontSize: 20, color: "white" }}>
                      {shake.name}
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
export default ShakeScreen;
