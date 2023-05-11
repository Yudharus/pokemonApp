import React, {Fragment, useState, useEffect} from 'react';
import {
  Image,
  Text,
  TouchableHighlight,
  View,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Tailwind from '../../libs/tailwind/Tailwind.lib';
import { ImagePokemon, DetailPokemon } from '../../libs/fetchings/Pokemon';

const CardPokemon = ({
    name,
    image,
    onPress
}) => {
    const [imageUrl, setimageUrl] = useState("")
    useEffect(() => {
        // setKaryaK(null);
        // setPageCurrent(1);
        // setIsLoading(true);
        initData();
    
        // return () => setListPokemon(null);
      }, []);
    
      const initData = async () => {
        try {
          const response = await ImagePokemon(name);
          

          setimageUrl(response)
        } catch (error) {
          console.log(error)
        }
      };
    
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={Tailwind`mt-2 w-26 h-28 bg-white rounded-lg shadow shadow-black mb-1`}>
        <View style={Tailwind`w-full h-7/12 bg-white rounded-lg`}/>
        <View style={Tailwind`w-full h-11.6 bg-gray--primary rounded-t-lg rounded-b-lg items-center justify-center`}>
            <Image style={Tailwind`w-[72px] h-[72px] absolute -top-12 left-4`} source={{uri: imageUrl.front_shiny}}/>
            <Text style={Tailwind`text-black text-[10px] font-normal mt-5`}>{name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardPokemon;
