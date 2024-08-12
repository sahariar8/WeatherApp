import { StyleSheet, Text, View,Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { theme } from '../theme'
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { MapPinIcon } from 'react-native-heroicons/solid'

const Home = () => {

    const [showSearch,toggleSearch] = useState(false);
    const [locations,setLocations]= useState([1,2,3])

  return (
    <View className="flex-1 relative">
        <StatusBar style="light" />
        <Image blurRadius={70}
         source={require('../assets/images/bg.png')}
          className="absolute h-full w-full"
        />
        <SafeAreaView className="flex flex-1">
            {/* search setion */}
            <View className="mx-4 my-4 relative x-50" style={{ height:'7%'}}>
                <View className="flex-row justify-end items-center rounded-full"
                 style={{ backgroundColor:showSearch?theme.bgWhite(0.2): 'transparent'}}
                >
                {
                    showSearch?(
                        <TextInput
                        placeholder='Search City'
                        placeholderTextColor={'lightgray'}
                        className="pl-6 h-10 flex-1 text-base text-white"
                       />
                    ):null
                }
                    <TouchableOpacity 
                        onPress={()=> toggleSearch(!showSearch)}
                        style={{ backgroundColor:theme.bgWhite(0.3)}} 
                        className="rounded-full p-3 m-1">
                        <MagnifyingGlassIcon size='25' color="white"></MagnifyingGlassIcon>
                    </TouchableOpacity>
                </View>

                {
                    locations.length > 0 && showSearch?(
                        <View className="absolute w-full bg-gray-300 top-16 rounded-3xl">
                            {
                                locations.map((loc,index)=>{

                                    let showBorder = index+1 != locations.length;
                                   
                                    return(
                                        <TouchableOpacity key={index}
                                            className={`flex-row items-center border-0 p-3 px-4 mb-1 ${showBorder ? 'border-b-2 border-b-gray-400' : ''}`}
                                            
                                        >
                                            <MapPinIcon size='20' color='gray' />
                                            <Text>London,Unted Kingdom</Text>
                                        </TouchableOpacity>
                                    )
                                })
                            }
                        </View>
                    ):""
                }

            </View>
        </SafeAreaView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})