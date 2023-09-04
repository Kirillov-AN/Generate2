const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import IPhone14Signup from "./screens/IPhone14Signup";
import HistoryIcon from "./components/HistoryIcon";
import HistoryIcon1 from "./components/HistoryIcon1";
import AddIcon from "./components/AddIcon";
import AddIcon1 from "./components/AddIcon1";
import Statistics1Icon from "./components/Statistics1Icon";
import Home31Icon from "./components/Home31Icon";
import ZyroImage1 from "./components/ZyroImage1";
import Frame from "./screens/Frame";
import IPhone14 from "./screens/IPhone14";
import IPhone141 from "./screens/IPhone141";
import IPhone142 from "./screens/IPhone142";
import IPhone143 from "./screens/IPhone143";
import IPhone144 from "./screens/IPhone144";
import IPhone145 from "./screens/IPhone145";
import IPhone146 from "./screens/IPhone146";
import IPhone147 from "./screens/IPhone147";
import IPhone148 from "./screens/IPhone148";
import IPhone149 from "./screens/IPhone149";
import Frame1 from "./screens/Frame1";
import IPhone1410 from "./screens/IPhone1410";
import IPhone1411 from "./screens/IPhone1411";
import IPhone1412 from "./screens/IPhone1412";
import IPhone1413 from "./screens/IPhone1413";
import Frame2 from "./components/Frame2";
import IPhone1414 from "./screens/IPhone1414";
import IPhone1415 from "./screens/IPhone1415";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
function BottomTabsRoot({ navigation }: any) {
  const [bottomTabItemsNormal] = React.useState([
    <Statistics1Icon />,
    <AddIcon />,
    <HistoryIcon />,
  ]);
  const [bottomTabItemsActive] = React.useState([
    <Home31Icon />,
    <AddIcon1 />,
    <HistoryIcon1 />,
  ]);
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={({ state, descriptors, navigation }: any) => {
        const activeIndex = state.index;
        return (
          <View
            style={{
              width: 390,
              flexDirection: "row",
              paddingHorizontal: 25,
              paddingVertical: 0,
              alignItems: "flex-start",
              justifyContent: "space-between",
              height: 83,
            }}
          >
            {bottomTabItemsNormal.map((item: any, index: any) => {
              const isFocused = state.index === index;
              return (
                <Pressable
                  key={index}
                  onPress={() => {
                    navigation.navigate({
                      name: state.routes[index].name,
                      merge: true,
                    });
                  }}
                >
                  {activeIndex === index
                    ? bottomTabItemsActive[index] || item
                    : item}
                </Pressable>
              );
            })}
          </View>
        );
      }}
    >
      <Tab.Screen
        name="IPhone1415"
        component={IPhone1415}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="IPhone1414"
        component={IPhone1414}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="IPhone1413"
        component={IPhone1413}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
import {
  GestureHandlerRootView,
  RectButton,
} from "react-native-gesture-handler";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    "ChivoMono-Light": require("./assets/fonts/ChivoMono-Light.ttf"),
    "ChivoMono-Regular": require("./assets/fonts/ChivoMono-Regular.ttf"),
    "ChivoMono-Medium": require("./assets/fonts/ChivoMono-Medium.ttf"),
    "ChivoMono-Bold": require("./assets/fonts/ChivoMono-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          {hideSplashScreen ? (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="BottomTabsRoot" component={BottomTabsRoot} />
              <Stack.Screen
                name="IPhone14Signup"
                component={IPhone14Signup}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="HistoryIcon"
                component={HistoryIcon}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="HistoryIcon1"
                component={HistoryIcon1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AddIcon"
                component={AddIcon}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AddIcon1"
                component={AddIcon1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Statistics1Icon"
                component={Statistics1Icon}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Home31Icon"
                component={Home31Icon}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ZyroImage1"
                component={ZyroImage1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Frame"
                component={Frame}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="IPhone14"
                component={IPhone14}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="IPhone141"
                component={IPhone141}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="IPhone142"
                component={IPhone142}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="IPhone143"
                component={IPhone143}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="IPhone144"
                component={IPhone144}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="IPhone145"
                component={IPhone145}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="IPhone146"
                component={IPhone146}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="IPhone147"
                component={IPhone147}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="IPhone148"
                component={IPhone148}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="IPhone149"
                component={IPhone149}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Frame1"
                component={Frame1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="IPhone1410"
                component={IPhone1410}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="IPhone1411"
                component={IPhone1411}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="IPhone1412"
                component={IPhone1412}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Frame2"
                component={Frame2}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          ) : null}
        </NavigationContainer>
      </GestureHandlerRootView>
    </>
  );
};
export default App;
