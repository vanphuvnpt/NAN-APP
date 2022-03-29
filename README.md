1. Install dependencies
   -----begin navigation--------

- yarn add @react-navigation/native
- expo install react-native-screens react-native-safe-area-context
- yarn add @react-navigation/native-stack
  --------end begin -------------
  ----- begin react-native-paper -------
- yarn add react-native-paper
  yarn add react-native-vector-icons
  react-native link react-native-vector-icons
  yarn add @react-navigation/material-bottom-tabs
  Specifically MaterialCommunityIcons icon pack needs to be included in the project, because some components use those internally (e.g. AppBar.BackAction on Android).
  --format code
  yarn add --dev --exact prettier

yarn add @react-native-async-storage/async-storage

yarn add @reduxjs/toolkit
yarn add react-redux redux redux-thunk

yarn add @react-navigation/drawer
expo install react-native-gesture-handler react-native-reanimated
