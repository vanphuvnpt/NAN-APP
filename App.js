// import React from 'react'
// import { Provider } from 'react-native-paper'
// import { NavigationContainer } from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { theme } from './src/core/theme'
// import {
//   StartScreen,
//   LoginScreen,
//   RegisterScreen,
//   ResetPasswordScreen,
//   Dashboard,
// } from './src/screens'

// const Stack = createNativeStackNavigator()

// export default function App() {
//   return (
//     <Provider theme={theme}>
//       <NavigationContainer>
//         <Stack.Navigator
//           initialRouteName="StartScreen"
//           screenOptions={{
//             headerShown: false,
//           }}
//         >
//           <Stack.Screen name="StartScreen" component={StartScreen} />
//           <Stack.Screen name="LoginScreen" component={LoginScreen} />
//           <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
//           <Stack.Screen name="Dashboard" component={Dashboard} />
//           <Stack.Screen
//             name="ResetPasswordScreen"
//             component={ResetPasswordScreen}
//           />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </Provider>
//   )
// }

import React from "react";
import MainNavigationContainer from "./src/navigation/mainNavigator";
import { theme } from "./src/core/theme";
import { Provider as PaperProvider } from "react-native-paper";
import { StyleSheet } from "react-native";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import authReducer from "./src/store/reducers/auth";

const rootReducer = combineReducers({
  auth: authReducer,
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <MainNavigationContainer />
      </PaperProvider>
    </Provider>
  );
}
