
import React, { Component, useState } from 'react'
import BtnComp from './components/BtnComp'
import { View, Text, FlatList, TouchableOpacity, StatusBar, Image, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';


const App = () => {

  const [kategory, setKategory] = useState([
    { nama: 'ayam' },
    { nama: 'sayur' },
    { nama: 'minuman' },
    { nama: 'salad' },
    { nama: 'gorengan' },
    { nama: 'Rebus' },
    { nama: 'Telur' },
  ])

  const [dataTranding, setDataTranding] = useState([
    {
      namaResep: "Ayam Goreng Matap",
      author: 'Anggi',
      image: require('./assets/img/gambar1.jpg')
    },
    {
      namaResep: "Ayam Goreng Mentega",
      author: 'Pado',
      image: require('./assets/img/gambar2.jpg')
    },
    {
      namaResep: "Ayam Bakar Rica",
      author: 'Nia Tumbelka',
      image: require('./assets/img/gambar3.jpg')
    },
    {
      namaResep: "Ayam Santan",
      author: 'Nia Tumbelka',
      image: require('./assets/img/gambar4.jpg')
    },
    {
      namaResep: "Ayam Balado",
      author: 'Rivo Pelu',
      image: require('./assets/img/gambar5.jpg')
    },


  ])
  const [dataVidio, setDataVidio] = useState([
    {
      namaResep: "Ayam Goreng Matap",
      author: 'Anggi',
      image: require('./assets/img/gambar1.jpg')
      , duration: '10 : 13'
    },
    {
      namaResep: "Ayam Goreng Mentega",
      author: 'Pado',
      image: require('./assets/img/gambar2.jpg')
      , duration: '10 : 13'
    },
    {
      namaResep: "Ayam Bakar Rica",
      author: 'Nia Tumbelka',
      image: require('./assets/img/gambar3.jpg')
      , duration: '10 : 13'
    },
    {
      namaResep: "Ayam Santan",
      author: 'Nia Tumbelka',
      image: require('./assets/img/gambar4.jpg')
      , duration: '10 : 13'
    },
    {
      namaResep: "Ayam Balado",
      author: 'Rivo Pelu',
      image: require('./assets/img/gambar5.jpg')
      , duration: '10 : 13'
    },


  ])
  const [kategorySeleksi, setKategorySeleksi] = useState({
    nama: 'ayam'
  })


  return (
    <>



      <View style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
        <StatusBar backgroundColor="#f5f5f5" barStyle='dark-content' />


        <View style={{ marginHorizontal: 20, marginVertical: 20 }}>

          <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#4169e1' }}>Resep<Text style={{ color: '#212121' }}>Ku</Text></Text>
        </View>
        <ScrollView>
          <View>

            <FlatList data={kategory}
              showsHorizontalScrollIndicator={false}
              style={{ marginLeft: 10 }}
              horizontal
              renderItem={({ item }) => (
                <TouchableOpacity>
                  <View style={{
                    marginRight: 10,
                    backgroundColor: kategorySeleksi.nama == item.nama ? '#4169e1' : '#ffff',


                    elevation: 3,
                    paddingHorizontal: 10,
                    marginBottom: 10,
                    borderRadius: 15,
                    paddingVertical: 8,
                    marginLeft: 5,
                    marginRight: 5,
                  }}>
                    <Text style={{ color: kategorySeleksi.nama == item.nama ? '#ffff' : '#212121', }}>{item.nama}</Text>
                  </View>
                </TouchableOpacity>

              )}


            />
          </View>
          <View style={{ marginHorizontal: 20, marginVertical: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>

            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#212121' }}>Tranding</Text>
            <TouchableOpacity style={{ justifyContent: 'flex-end', alignItems: 'center', flex: 1, flexDirection: 'row' }}>

              <Text style={{ fontSize: 14, }}>Lihat Semua</Text>
              <Icon name='chevron-forward' size={20} color={'#bdbdbd'} />

            </TouchableOpacity>
          </View>
          {/* Gamabar Makanan */}
          <View style={{}}>
            <FlatList data={dataTranding}

              style={{ marginLeft: 10 }}
              showsHorizontalScrollIndicator={false}
              horizontal
              renderItem={({ item }) => (
                <TouchableOpacity>
                  <View style={{
                    marginRight: 10,
                    backgroundColor: kategorySeleksi.nama == item.nama ? '#4169e1' : '#ffff',


                    elevation: 3,
                    paddingHorizontal: 10,
                    marginBottom: 10,
                    borderRadius: 15,
                    paddingVertical: 8,
                    marginLeft: 5,
                    marginRight: 5,
                  }}>
                    <Image source={item.image} style={{ width: 200, height: 150, borderRadius: 15 }} resizeMode={'cover'} />
                    <Text style={{ color: '#1b1b1b', fontSize: 18, fontWeight: 'bold' }}>{item.namaResep}</Text>
                    <Text style={{ color: 'gray' }}>{item.author}</Text>
                  </View>
                </TouchableOpacity>

              )}


            />
          </View>
          <View style={{ marginHorizontal: 20, marginVertical: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>

            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#212121' }}>Vidio Masak</Text>
            <TouchableOpacity style={{ justifyContent: 'flex-end', alignItems: 'center', flex: 1, flexDirection: 'row' }}>

              <Text style={{ fontSize: 14, }}>Lihat Semua</Text>
              <Icon name='chevron-forward' size={20} color={'#bdbdbd'} />

            </TouchableOpacity>
          </View>
          {/* Gamabar Makanan */}
          <View style={{}}>
            <FlatList data={dataTranding}

              style={{ marginLeft: 10 }}
              showsHorizontalScrollIndicator={false}
              horizontal
              renderItem={({ item }) => (
                <TouchableOpacity>
                  <View style={{
                    marginRight: 10,
                    backgroundColor: kategorySeleksi.nama == item.nama ? '#4169e1' : '#ffff',


                    elevation: 3,
                    paddingHorizontal: 10,
                    marginBottom: 10,
                    borderRadius: 15,
                    paddingVertical: 8,
                    marginLeft: 5,
                    marginRight: 5,
                  }}>
                    <Image source={item.image} style={{ width: 200, height: 150, borderRadius: 15 }} resizeMode={'cover'} />
                    <Text style={{ color: '#1b1b1b', fontSize: 18, fontWeight: 'bold' }}>{item.namaResep}</Text>
                    <Text style={{ color: 'gray' }}>{item.author}</Text>
                  </View>
                </TouchableOpacity>

              )}


            />
          </View>
        </ScrollView>
      </View>

    </>
  )

}

export default App