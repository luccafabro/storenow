import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Initial from "./pages/Initial";
import Login from "./pages/Login";
import Plans from "./pages/Plans";
import Register from "./pages/Register";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}}  name="Initial" component={Initial} />
        <Stack.Screen options={{headerShown: false}}  name="Login" component={Login} />
        <Stack.Screen options={{headerShown: false}}  name="Register" component={Register} />
        <Stack.Screen options={{headerShown: false}}  name="Plans" component={Plans} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
