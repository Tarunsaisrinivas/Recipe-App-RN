// Home.js
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Image style={styles.image} source={require("../assets/cheif.png")} />
        <Text style={styles.text}>Tasty Trails</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Item")}
        >
          <Text style={styles.buttonText}>Let's Begin</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#006d77",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "cover",
    marginBottom: 20,
  },
  text: {
    color: "orange",
    textShadowColor: "#000",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    fontSize: 24,
    fontWeight: "500",
  },
  button: {
    borderWidth: 1,
    backgroundColor: "orange",
    borderColor: "black",
    padding: 10,
    borderRadius: 20,
    marginTop: 30,
  },
  buttonText: {
    color: "black",
    textShadowColor: "orange",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    fontSize: 24,
    fontWeight: "500",
  },
});

export default Home;
