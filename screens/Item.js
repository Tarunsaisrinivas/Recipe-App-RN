import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Image, Dimensions, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

const Item = ({ item }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('RecipeDetails', { recipe: item });
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.itemContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const ItemScreen = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/recipes");
      const json = await response.json();
      if (json.recipes && Array.isArray(json.recipes)) {
        const modifiedData = json.recipes.map(item => ({
          image: item.image,
          title: item.name,
          ingredients: item.ingredients,
          instructions: item.instructions,
          rating: item.rating,
        }));
        setData(modifiedData);
      } else {
        console.error("Invalid response format:", json);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const renderItem = ({ item }) => <Item item={item} />;

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.title}
      numColumns={2}
      contentContainerStyle={styles.flatListContainer}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  flatListContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#006d77",
  },
  itemContainer: {
    width: Dimensions.get("window").width / 2 - 20,
    margin: 10,
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "auto",
    height: 150,
    borderRadius: 8,
    resizeMode: "cover",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 5,
    color: "orange",
    textAlign: "center",
  },
});

export default ItemScreen;
