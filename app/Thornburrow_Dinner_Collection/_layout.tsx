import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from 'expo-router';

export default function Layout() {

  return (
    <Tabs screenOptions={{headerShown: false,headerTintColor: '#EFBF04',
      tabBarActiveTintColor: '#EFBF04', tabBarInactiveTintColor: '#c4c4c4', headerStyle: {
            backgroundColor: '#660033', borderBottomColor: '#660033',}, 
          tabBarStyle: {
              backgroundColor: '#660033',
              borderTopColor: '#660033',
            },}}>
      <Tabs.Screen name='schedule' options={{sceneStyle: { backgroundColor: '#660033' }, title: 'Schedule', headerShown: true, 
        tabBarIcon: ({ color, focused }) => (
          <MaterialCommunityIcons 
            name={focused ? 'calendar' : 'calendar'} 
            size={24} 
            color={color} 
          />
        ),
      }}/>
      <Tabs.Screen name='recipes' options={{title: 'Recipes', headerShown: false,
        tabBarIcon: ({ color, focused }) => (
          <MaterialCommunityIcons 
            name={focused ? 'bookshelf' : 'bookshelf'} 
            size={24} 
            color={color} 
          />
        ),
      }}/>
      <Tabs.Screen name='add' options={{sceneStyle: { backgroundColor: '#660033' }, title: 'Add', headerShown: true,
        tabBarIcon: ({ color, focused }) => (
          <MaterialCommunityIcons 
            name={focused ? 'script-text' : 'script-text'} 
            size={24} 
            color={color} 
          />
        ),
      }}/>
    </Tabs>
  );
}
