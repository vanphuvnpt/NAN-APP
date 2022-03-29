import React from "react";
import { View, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen, StartScreen } from "../screens";
import HomeScreen from "../screens/HomeScreen";
import NotificationScreen from "../screens/NotificationScreen";
import ProfileScreen from "../screens/ProfileScreen";

import {
  BottomNavigation,
  Text,
  Card,
  Title,
  Paragraph,
  List,
  Provider as PaperProvider,
} from "react-native-paper";

const HomePageTabNavigatorComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "home", title: "Trang chủ", icon: "queue-music" },
    { key: "notification", title: "Thông báo", icon: "album" },
    { key: "profile", title: "Cá nhân", icon: "history" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    notification: NotificationScreen,
    profile: ProfileScreen,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

const MainStackNavigator = createNativeStackNavigator();
const MainNavigationContainer = ({ navigation }) => {
  return (
    <NavigationContainer>
      <MainStackNavigator.Navigator>
        <MainStackNavigator.Screen
          name="StartUp"
          component={StartScreen}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />
        <MainStackNavigator.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />
        <MainStackNavigator.Group>
          <MainStackNavigator.Screen
            name="HomePageTab"
            component={HomePageTabNavigatorComponent}
            options={{
              headerShown: false,
              gestureEnabled: false,
            }}
          />
        </MainStackNavigator.Group>
      </MainStackNavigator.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigationContainer;
