import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username == "" || password == "") {
      alert("Kindly fill all fields");
    } else {
      alert("Success");
      navigation.navigate("core");
    }
  };

  // const handleLogin =()=>{
  //     if(username.length && password.length != ""){
  //         alert("Success")
  //     }
  //     else
  //     alert("Fill fields")
  // }

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flexDirection: "row", paddingTop: 70 }}>
        <View style={{}}>
          <Image
            source={require("../../../assets/pizza3.png")}
            style={{ width: 100, height: 100 }}
          />
        </View>
        <View>
          <Text style={{ fontSize: 60, color: "#EF5D5F", marginLeft: 10 }}>
            Pizza
          </Text>
          <Text style={{ fontSize: 60, color: "#EF5D5F", marginLeft: 30 }}>
            Hunter
          </Text>
        </View>
      </View>

      <View style={{ backgroundColor: "#EF5D5F", marginTop: 180, height: 480 }}>
        <View
          style={{
            backgroundColor: "#EF5D5F",
            height: "90%",
            borderRadius: 10,
            padding: 30,
            marginTop: -100,
            width: "80%",
            marginLeft: 40,
            borderWidth: 1,
            borderColor: "#EF5D5F",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}
        >
          <View style={{ marginTop: 40 }}>
            <Text style={{ fontSize: 30, color: "white", fontWeight: "bold" }}>
              LOG IN
            </Text>
          </View>

          <View style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 30, color: "white", fontWeight: "300" }}>
              Username
            </Text>
            <View
              style={{
                borderBottomWidth: 1,
                marginTop: 20,
                borderBottomColor: "white",
              }}
            >
              <TextInput
                placeholder=""
                onChangeText={setUsername}
                value={username}
              />
            </View>
          </View>

          <View style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 30, color: "white", fontWeight: "300" }}>
              Password
            </Text>
            <View
              style={{
                borderBottomWidth: 1,
                marginTop: 20,
                borderBottomColor: "white",
              }}
            >
              <TextInput
                placeholder=""
                onChangeText={setPassword}
                value={password}
              />
            </View>
          </View>

          <TouchableOpacity
            style={{
              width: "90%",
              height: 50,
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 60,
              marginLeft: 20,
              borderRadius: 10,
            }}
            onPress={() => handleLogin()}
          >
            <Text style={{ fontSize: 20, color: "#EF5D5F" }}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
