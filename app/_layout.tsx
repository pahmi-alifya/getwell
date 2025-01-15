import FontAwesome from "@expo/vector-icons/FontAwesome"
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native"
import { useFonts } from "expo-font"
import { Stack } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { useEffect } from "react"
import "react-native-reanimated"

import { useColorScheme } from "@/components/useColorScheme"
import Header from "@/components/Header"
import { Text } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler"

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router"

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  })

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error
  }, [error])

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <GestureHandlerRootView>
      <RootLayoutNav />
    </GestureHandlerRootView>
  )
}

function RootLayoutNav() {
  const colorScheme = useColorScheme()

  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="electronic-medical-record"
          options={{
            header: () => (
              <Header title={"Electronic Medical Record"} subTitle="2 Hasil" />
            ),
          }}
        />
        <Stack.Screen
          name="teleconsultation-result"
          options={{
            header: () => (
              <Header title={"Teleconsultation Result"} subTitle="Get Doctor" />
            ),
          }}
        />
        <Stack.Screen
          name="laboratory-test-result"
          options={{
            header: () => (
              <Header title={"Laboratory Test Result"} subTitle="10 Hasil" />
            ),
          }}
        />
        <Stack.Screen
          name="body-system"
          options={{
            header: () => (
              <Header
                title={"12 Body Systems"}
                subTitle="30 September 2024"
                headerRight={
                  <Text
                    style={{
                      fontWeight: "700",
                      fontSize: 14,
                      color: "#25B2A6",
                    }}
                  >
                    Lihat Dokumen MCU
                  </Text>
                }
              />
            ),
          }}
        />
        <Stack.Screen name="modal" options={{ presentation: "modal" }} />
      </Stack>
    </ThemeProvider>
  )
}
