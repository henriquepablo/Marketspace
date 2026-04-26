import { colors } from "@/constants/colors";
import { Slot, Tabs } from "expo-router";
import { HouseIcon } from "phosphor-react-native";

export default function Privateayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: colors.gray[200],
                tabBarInactiveTintColor: colors.gray[400]
            }}
        >
            <Tabs.Screen name="home" 
                options={{
                    tabBarIcon: ({size}) => (
                        <HouseIcon size={size}/>
                    )
                }}
            />
        </Tabs>
    )
}