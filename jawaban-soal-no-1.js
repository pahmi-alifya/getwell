function angkaToTerbilang(angka) {
  const satuan = [
    "",
    "Satu",
    "Dua",
    "Tiga",
    "Empat",
    "Lima",
    "Enam",
    "Tujuh",
    "Delapan",
    "Sembilan",
  ]

  const puluhan = [
    "",
    "Sepuluh",
    "Dua Puluh",
    "Tiga Puluh",
    "Empat Puluh",
    "Lima Puluh",
    "Enam Puluh",
    "Tujuh Puluh",
    "Delapan Puluh",
    "Sembilan Puluh",
  ]

  const ratusan = [
    "",
    "Seratus",
    "Dua Ratus",
    "Tiga Ratus",
    "Empat Ratus",
    "Lima Ratus",
    "Enam Ratus",
    "Tujuh Ratus",
    "Delapan Ratus",
    "Sembilan Ratus",
  ]

  const ribuan = [
    "",
    "Seribu",
    "Dua Ribu",
    "Tiga Ribu",
    "Empat Ribu",
    "Lima Ribu",
    "Enam Ribu",
    "Tujuh Ribu",
    "Delapan Ribu",
    "Sembilan Ribu",
  ]

  // Memecah angka menjadi ribuan, ratusan, puluhan, dan satuan
  const ribu = Math.floor(angka / 1000)
  const ratus = Math.floor((angka % 1000) / 100)
  const puluh = Math.floor((angka % 100) / 10)
  const satu = angka % 10

  // Membalikkan urutan
  const terbilang = []

  if (satu > 0) terbilang.push(satuan[satu])
  if (puluh > 0) terbilang.push(puluhan[puluh])
  if (ratus > 0) terbilang.push(ratusan[ratus])
  if (ribu > 0) terbilang.push(ribuan[ribu])

  return terbilang.join(" ")
}
