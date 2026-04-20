import { Stack } from 'expo-router';
import { useFonts, Karla_400Regular, Karla_700Bold } from '@expo-google-fonts/karla'

export default function RootLayou() {

    const [fontsLoaded] = useFonts({
        Karla_400Regular,
        Karla_700Bold
    });

    if (!fontsLoaded) return

    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name='(public)' />
            <Stack.Screen name='index' />
        </Stack>
    )
}
