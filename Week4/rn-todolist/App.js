import * as React from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import store from "./stores/store";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import useCachedResources from "./hooks/useCachedResources";

import AllTodoScreen from "./screens/AllTodoScreen";
import ActiveTodoScreen from "./screens/ActiveTodoScreen";
import CompleteTodoScreen from "./screens/CompleteTodoScreen";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const HomeScreen = (props) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="All" component={AllTodoScreen} />
      <Tab.Screen name="Active" component={ActiveTodoScreen} />
      <Tab.Screen name="Completed" component={CompleteTodoScreen} />
    </Tab.Navigator>
  );
};

export default function App() {
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <View>
            <Header />
            <Tab.Navigator>
              <Tab.Screen name="All" component={AllTodoScreen} />
              <Tab.Screen name="Active" component={ActiveTodoScreen} />
              <Tab.Screen name="Completed" component={CompleteTodoScreen} />
            </Tab.Navigator>
            <Footer />
          </View>
        </NavigationContainer>
      </Provider>
    );
  }
}
