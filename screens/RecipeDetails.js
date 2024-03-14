// RecipeDetails.js
import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

const RecipeDetails = ({ route }) => {
  const { recipe } = route.params;

  const renderListItems = (items) => {
    return items.map((item, index) => (
      <Text key={index} style={styles.listItem}>
        &bull; {item}
      </Text>
    ));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: recipe.image }} style={styles.image} />
      <Text style={styles.title}>{recipe.title}</Text>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Ingredients:</Text>
        {renderListItems(recipe.ingredients)}
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Instructions:</Text>
        {renderListItems(recipe.instructions)}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    backgroundColor:'#006d77',
    justifyContent: "center",
    paddingVertical: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 8,
    resizeMode: "cover",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
    color: "orange",
    textAlign: "center",
  },
  sectionContainer: {
    // marginVertical: 10,
    // paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "orange",
    textAlign: "center",
  },
  listItem: {
    fontSize: 16,
    color: "white",
    textAlign: "left",
    marginLeft: 20,
  },
});

export default RecipeDetails;
