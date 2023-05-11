import React, { useEffect, useState } from 'react'
import {
   View,
   Text,
   Image,
   TextInput,
   TouchableOpacity,
   ScrollView,
   FlatList,
   ActivityIndicator
  } from 'react-native';
import Tailwind from '../libs/tailwind/Tailwind.lib';
import {PokemonList, DetailPokemon} from '../libs/fetchings/Pokemon';
import Spacer from '../components/atoms/Spacer.atom';
import CardPokemon from '../components/organisms/CardPokemon.organisms';
import { useNavigation } from '@react-navigation/native';


const Test = () => {
  const navigation = useNavigation()
  const [listPokemon, setListPokemon] = useState([])
  const [filter, setFilter] = useState("")
  const [search, setSearch] = useState("")
  const [loadingFetch, setLoadingFetch] = useState(false)
  const [isLoading, setIsLoading] = useState(true);
  const [pageCurrent, setPageCurrent] = useState(1);
  const [onEndReached, setOnEndReached] = useState(true);
  useEffect(() => {
    setListPokemon(null);
    setPageCurrent(1);
    setIsLoading(true);
    fetchDataPokemon();

    return () => setListPokemon(null);
  }, []);

  const fetchDataPokemon = async () => {
    setLoadingFetch(true);
    try {
      const response = await PokemonList(20,pageCurrent);

      setListPokemon(response)
    } catch (error) {
      console.log(error)
    } finally {
      setLoadingFetch(false);
    }
  };

const searchPokemon = async (q) => {
    const response = await DetailPokemon(q)

    setFilter(response.species.name)
}

console.log("Filter :",filter)
  const renderFooter = () => {
    return isLoading ? (
      <View style={{marginTop: 10, alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    ) : null;
  };

  const handleLoadMore = async () => {
    if (!onEndReached) {
      setIsLoading(true);
      setPageCurrent(prevPage => prevPage + 1);

      const response = await PokemonList(20,pageCurrent + 1);


      setIsLoading(false);
      setListPokemon(prevPok => [...prevPok, ...response]);

      setOnEndReached(true);
    }
  };
  return (
    <View style={Tailwind`bg-primary flex-1`}>
      <View style={Tailwind`flex-row items-center px-4 py-5`}>
        <Image style={Tailwind`w-6 h-6 mr-4`} source={require('../assets/icons/pokeball.png')}/>
        <Text style={Tailwind`text-white font-bold text-2xl`}>Pokédex</Text>
      </View>
      <View style={Tailwind`flex-row items-center px-4`}>
        <View style={Tailwind`flex-row flex-1 bg-white shadow shadow-black items-center px-2 rounded-r-full rounded-l-full mr-5`}>
            <Image style={Tailwind`w-4 h-4 mr-2`} source={require('../assets/icons/search.png')}/>
            <TextInput placeholder='search' style={Tailwind`flex-1 text-black`} placeholderTextColor={"#000"} value={search} onChangeText={value => setSearch(value)} onSubmitEditing={() => searchPokemon(search)}/>
        </View>
        <TouchableOpacity>
          <View style={Tailwind`w-8	h-8 rounded-full bg-white items-center justify-center`}>
            <Image style={Tailwind`w-4 h-4`} source={require('../assets/icons/sort.png')}/>
          </View>
        </TouchableOpacity>
      </View>
      <View style={Tailwind`bg-white mt-7 mb-3 mx-2 rounded-md`}>
      <FlatList
        nestedScrollEnabled={true}
        style={Tailwind`p-2`}
        data={filter !== "" ? filter :  listPokemon}
        showsVerticalScrollIndicator={true}
        scrollEnabled={true}
        numColumns={3}
        columnWrapperStyle={Tailwind`justify-evenly`}
        keyExtractor={(item, index) => index}
        ItemSeparatorComponent={() => <Spacer width={'full'} height={'4'} />}
        onEndReached={() => handleLoadMore()}
        onEndReachedThreshold={0.5}
        onMomentumScrollBegin={() => setOnEndReached(false)}
        renderItem={({item}) => {
          
          return (
            <CardPokemon 
            name={filter !== "" ? item : item.name}
            onPress={() => navigation.push("DetailPokemon")}
            />
          );
        }}
        />
      </View>
    </View>
  )
}

export default Test