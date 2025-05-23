import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';


import home from './source/screens/home';
import home2 from './source/screens/home2';
import plus from './source/screens/plus';
import plus2 from './source/screens/plus2';
import search from './source/screens/search';
import search2 from './source/screens/search2';
import settings from './source/screens/settings';

const StackA = createNativeStackNavigator();
const StackB = createNativeStackNavigator();
const StackC = createNativeStackNavigator();

function homeNavigator() {
  return (
    <StackA.Navigator>
      <StackA.Screen name="home" component={home} />
      <StackA.Screen name="home2" component={home2} />
    </StackA.Navigator>
  );
}

function plusNavigator() {
  return (
    <StackB.Navigator>
      <StackB.Screen name="plus" component={plus} />
      <StackB.Screen name="plus2" component={plus2} />
    </StackB.Navigator>
  );
}

function searchNavigator() {
  return (
    <StackC.Navigator>
      <StackC.Screen name="search" component={search} />
      <StackC.Screen name="search2" component={search2} />
    </StackC.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Datos') iconName = 'person';
          else if (route.name === 'Buscar') iconName = 'search';
          else if (route.name === 'Search') iconName = 'person-circle';
          else if (route.name === 'Extra') iconName = 'star';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Datos" component={homeNavigator} />
      <Tab.Screen name="Buscar" component={plusNavigator} />
      <Tab.Screen name="Search" component={searchNavigator} />
      <Tab.Screen name="Extra" component={settings} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
