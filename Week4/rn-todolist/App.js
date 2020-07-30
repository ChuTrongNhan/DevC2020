import * as React from "react";
import { Provider } from "react-redux";
import store from "./stores/store";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { navigationRef } from "./navigation/RootNavigation";

import useCachedResources from "./hooks/useCachedResources";

import AddTodoScreen from "./screens/AddTodoScreen";
import TodoScreen from "./screens/TodoScreen";
import TodoDetailScreen from "./screens/TodoDetailScreen";
import {
  AddTodoHeader,
  TodoListHeader,
  TodoDetailHeader,
} from "./components/common/Header";

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

export default function App() {
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator>
            <Stack.Screen
              name="TodoList"
              component={TodoScreen}
              options={{
                header: TodoListHeader,
              }}
            />
            <Stack.Screen
              name="AddTodo"
              component={AddTodoScreen}
              options={{
                header: AddTodoHeader,
              }}
            />
            <Stack.Screen
              name="TodoDetail"
              component={TodoDetailScreen}
              options={{
                header: TodoDetailHeader,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
