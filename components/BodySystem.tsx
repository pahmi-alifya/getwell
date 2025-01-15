import { useNavigation } from "expo-router"
import React from "react"
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"
import { AnimatedCircularProgress } from "react-native-circular-progress"

const BodySystem = () => {
  const navigation = useNavigation<any>()
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>12 Body Systems Terbaru</Text>
          <Text style={styles.subTitle}>16 September 2023</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("body-system")}>
          <Text style={styles.link}>Lihat Detail &gt;</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Image
          source={require("../assets/images/body.png")}
          style={styles.bodyImage}
          resizeMode="contain"
        />

        <View style={styles.indicatorContainer}>
          <IndicatorCircle percentage={33} color="#25B2A6" label="Good" />
          <IndicatorCircle
            percentage={33}
            color="#E25151"
            label="Need Improvement"
          />
          <IndicatorCircle percentage={33} color="#747A7B" label="No Data" />
        </View>
      </View>
    </View>
  )
}

const IndicatorCircle = ({
  percentage,
  color,
  label,
}: {
  percentage: number
  color: string
  label: string
}) => {
  return (
    <View style={styles.indicator}>
      <AnimatedCircularProgress
        size={100}
        width={10}
        fill={percentage}
        tintColor={color}
        backgroundColor="#eee"
        backgroundWidth={8}
        rotation={180}
        lineCap="round"
      >
        {(fill) => (
          <Text
            style={[styles.percentage, { color }]}
          >{`${Math.round(fill)}%`}</Text>
        )}
      </AnimatedCircularProgress>
      <Text style={styles.label}>{label}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#FFF",
    top: -60,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  subTitle: {
    fontSize: 16,
    color: "#A2ABAC",
  },
  link: {
    fontSize: 14,
    color: "#25B2A6",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  bodyImage: {
    width: 200,
    height: "100%",
    marginRight: 16,
  },
  indicatorContainer: {
    flex: 1,
    alignItems: "flex-end",
    marginRight: 15,
  },
  indicator: {
    alignItems: "center",
    marginBottom: 16,
  },
  percentage: {
    fontSize: 22,
    fontWeight: "bold",
  },
  label: {
    fontSize: 14,
    color: "#757575",
  },
})

export default BodySystem
