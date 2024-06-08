/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  TextInput,
  StyleSheet,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator,DrawerNavigationOptions } from '@react-navigation/drawer';
import AddTwoNumber from './src/AddTwoNumber';
import TwoSum from './src/TwoSum';
const headerOptions: DrawerNavigationOptions = {
  headerTitleStyle: {
      fontWeight: 'bold',
  },
  headerRight: () => <TextInput placeholder="Search" style={styles.search} />,
};
function App(): React.JSX.Element {


  const Drawer = createDrawerNavigator();
  return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="TwoSum">
          <Drawer.Screen name="Add Two Number" component={AddTwoNumber}  options={headerOptions}/>
          <Drawer.Screen name="Two Sum" component={TwoSum}  options={headerOptions}/>
        </Drawer.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  search: {
    width: '70%',
    marginRight: 14,
    height: 30,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
},
});

export default App;
