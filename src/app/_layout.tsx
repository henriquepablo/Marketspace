import { Stack } from 'expo-router';
import { useFonts, Karla_400Regular, Karla_700Bold } from '@expo-google-fonts/karla'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '@/constants/colors';

export default function RootLayou() {

    const [fontsLoaded] = useFonts({
        Karla_400Regular,
        Karla_700Bold
    });

    if (!fontsLoaded) return

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{flex: 1, backgroundColor: colors.gray[600]}} edges={['top']}>
                <Stack screenOptions={{ headerShown: false }}>
                    <Stack.Screen name='(public)' />
                    <Stack.Screen name='index' />
                </Stack>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}
