
import { Stack } from 'expo-router';

    export const unstable_settings = {
      initialRouteName: 'index',
    };

    export default function RecipesLayout() {
      return (
        <Stack screenOptions={{headerTintColor: '#EFBF04',contentStyle: {backgroundColor: '#660033',},
        headerStyle: {borderBottomColor: '#660033', backgroundColor: '#660033',}}}>
            <Stack.Screen name="index" options={{title: 'Recipes' }} />
            <Stack.Screen name="recipe" options={{ title: 'Recipe' }} />
            <Stack.Screen name="edit" options={{ title: 'Edit' }} />
        </Stack>

      );

    }