import { Tabs } from 'expo-router';

export default function Layout() {

  return (
    <Tabs>
      <Tabs.Screen name='schedule' options={{title: 'Schedule'}}/>
      <Tabs.Screen name='recipes/index' options={{title: 'Recipes'}}/>
      <Tabs.Screen name='add' options={{title: 'Add'}}/>
      <Tabs.Screen name='edit' options={{title: 'Edit'}}/>
    </Tabs>
  );
}
