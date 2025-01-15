import React from "react"
import { View, Text, StyleSheet, Image, ScrollView } from "react-native"
import { FontAwesome } from "@expo/vector-icons"

const TeleconsultationResult = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={{
                uri: "https://avatar.iran.liara.run/public/boy?username=ads",
              }}
              style={styles.profileImage}
            />
            <View style={styles.headerInfo}>
              <Text style={styles.name}>dr. Nanda Wibowo</Text>
              <Text style={styles.specialist}>Dokter Umum</Text>
            </View>
          </View>
          <View style={{ marginTop: 10 }}>
            <View style={styles.row}>
              <Text style={styles.label}>Appointment: </Text>
              <Text style={styles.value}>APT/220817/GDR-02GP/T-004</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Tanggal: </Text>
              <Text style={styles.value}>
                Sen, 17 Sep 2023, 09:00 - 09:15 WIB
              </Text>
            </View>
          </View>
        </View>

        {/* Subject Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Subject</Text>
          <Text style={styles.subTitle}>Keluhan</Text>
          <View style={styles.bulletList}>
            <Text style={styles.bulletItem}>• Pusing</Text>
            <Text style={styles.bulletItem}>• Demam</Text>
            <Text style={styles.bulletItem}>• Sakit Kepala</Text>
            <Text style={styles.bulletItem}>• Batuk</Text>
          </View>
        </View>

        {/* Medical History */}
        <View style={styles.section}>
          <Text style={styles.subTitle}>Riwayat medis sekarang</Text>
          <Text style={styles.value}>Asam Lambung</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subTitle}>Riwayat Obat yang masih diminum</Text>
          <Text style={styles.value}>
            Ambroxol, Amoxilin, Paracetamol, FG Troches
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subTitle}>Riwayat Penyakit Dahulu</Text>
          <Text style={styles.value}>Gerd</Text>
        </View>

        {/* Object Section */}
        <View style={[styles.section, { marginTop: 10 }]}>
          <Text style={styles.sectionTitle}>Object</Text>
          <Text style={styles.subTitle}>Tanda - tanda vital</Text>
          <Text style={styles.value}>Tidak ada</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subTitle}>Pemeriksaan Fisik</Text>
          <Text style={styles.value}>Tidak ada</Text>
        </View>

        {/* Assesment Section */}
        <View style={[styles.section, { marginTop: 10 }]}>
          <Text style={styles.sectionTitle}>Assessment</Text>
          <Text style={styles.subTitle}>Diagnosa Utama</Text>
          <Text style={styles.value}>A.37 Whooping Cough</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subTitle}>Diagnosa Tambahan</Text>
          <Text style={styles.value}>Tidak ada</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subTitle}>Laboratorium/Imaging</Text>
          <Text style={styles.value}>Tidak ada</Text>
        </View>

        <View style={{ marginBottom: 60 }} />
      </ScrollView>

      {/* Floating Button */}
      <View style={styles.floatingButton}>
        <Image
          source={require("@/assets/images/nav.png")}
          style={{ height: 50, width: 50 }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  header: {
    padding: 20,
    backgroundColor: "white",
    marginBottom: 10,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  headerInfo: {
    marginLeft: 15,
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  specialist: {
    fontSize: 14,
    color: "#777",
    marginVertical: 5,
  },
  row: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginVertical: 5,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#555",
  },
  value: {
    fontSize: 14,
    color: "#333",
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#A2ABAC",
    marginBottom: 10,
  },
  section: {
    backgroundColor: "white",
    padding: 20,
    marginBottom: 3,
  },
  subTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#555",
    marginBottom: 10,
  },
  bulletList: {
    marginLeft: 10,
  },
  bulletItem: {
    fontSize: 14,
    color: "#333",
    marginVertical: 2,
  },
  floatingButton: {
    position: "absolute",
    bottom: 10,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignSelf: "center",
  },
})

export default TeleconsultationResult
