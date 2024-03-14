// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import ItemScreen from './screens/Item';
import RecipeDetails from './screens/RecipeDetails';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen
    name="Item"
    component={ItemScreen}
    options={{
      title: 'Recipes',
      headerStyle: {
        backgroundColor: '#006d77',
      },
      headerTintColor: 'white', 
    }}
  />
  <Stack.Screen
    name="RecipeDetails"
    component={RecipeDetails}
    options={{
      title: 'Recipe Details',
      headerStyle: {
        backgroundColor: '#006d77',
      },
      headerTintColor: 'white', 
    }}
  />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
