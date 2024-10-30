import {View, Text, Dimensions, Platform, ScrollView, TouchableOpacity, Image} from "react-native";
import React, {useState} from 'react'
import {styles, theme} from "../theme";
import {ChevronLeftIcon} from "react-native-heroicons/outline";
import {HeartIcon} from "react-native-heroicons/solid";
import {SafeAreaView} from "react-native-safe-area-context";
import {useNavigation} from "@react-navigation/native";
import MovieList from "../components/movieList";
import Loading from "../components/loading";

var {width, height} = Dimensions.get('window');
const ios = Platform.OS == 'ios';
const verticalMargin = ios ? '' : 'my-3';
export default function PersonScreen() {
    const navigation = useNavigation();
    const [isFavourite, toggleFavourite] = useState(false)
    const [personMovies, setPersonMovies] = useState([1, 2, 3]);
    const [loading, setLoading] = useState(false);

    return (
        <ScrollView className="flex-1 bg-neutral-900" contentContainerStyle={{paddingBottom: 20}}>

            {/*Back Button*/}
            <SafeAreaView
                className={"z-20 w-full flex-row justify-between items-center px-4 " + verticalMargin}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.background}
                                  className="rounded-xl p-1">
                    <ChevronLeftIcon size="28" strokeWidth={2.5} color="white"/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)}>
                    <HeartIcon size="35" color={isFavourite ? 'red' : "white"}/>
                </TouchableOpacity>
            </SafeAreaView>

            {/*Person Details*/}

            {
                loading ? (
                    <Loading/>
                ) : (
                    <View>
                        <View className="flex-row justify-center rounded-full"
                              style={{
                                  shadowColor: 'gray',
                                  shadowRadius: 80,
                                  shadowOffset: {width: 0, height: 5},
                                  shadowOpacity: 0.1,
                                  borderRadius: 1,
                                  elevation: 50,
                                  // overflow: 'hidden'
                              }}
                        >
                            <View
                                className="items-center rounded-full overflow-hidden w-72 h-72 border-2 border-neutral-500"
                            >
                                <Image
                                    source={require('../assets/images/tessaAc.webp')}
                                    style={{height: height * 0.43, width: width * 0.74}}
                                />
                            </View>
                        </View>

                        {/*Name, City*/}
                        <View>
                            <View className="mt-6">
                                <Text className="text-3xl text-white font-bold text-center">Tessa Young</Text>
                                <Text className="text-base text-neutral-500 text-center">London, United Kingdom</Text>
                            </View>
                        </View>

                        {/*Gender, Birthday, knownFor, Popularity*/}
                        <View
                            className="mx-3 p-4 mt-6 flex-row justify-between items-center bg-neutral-700 rounded-full">
                            <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                                <Text className="text-white font-semibold">Gender</Text>
                                <Text className="text-neutral-300 text-sm">Male</Text>
                            </View>
                            <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                                <Text className="text-white font-semibold">Birthday</Text>
                                <Text className="text-neutral-300 text-sm">2001-11-28</Text>
                            </View>
                            <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                                <Text className="text-white font-semibold">Known for</Text>
                                <Text className="text-neutral-300 text-sm">Acting</Text>
                            </View>
                            <View className=" px-2 items-center">
                                <Text className="text-white font-semibold">Popularity</Text>
                                <Text className="text-neutral-300 text-sm">64.23</Text>
                            </View>
                        </View>

                        {/*Biography*/}
                        <View className="my-6 mx-4 space-y-2">
                            <Text className="text-white text-lg">Biography</Text>
                            <Text className="text-neutral-400 tracking-wide">
                                Josephine Langford (born 18 August 1997) is an Australian actress. She is best known for
                                her starring role as Tessa Young in the After film series. She also portrayed Emma
                                Cunningham in the Netflix film Moxie while also portraying Zoey in upcoming Netflix
                                romcom The Other Zoey and Katy Gibson in Gigi & Nate.
                            </Text>
                        </View>

                        {/*Movies*/}
                        <MovieList title="Movies" data={personMovies} hideSeeAll={true}></MovieList>
                    </View>
                )
            }


        </ScrollView>
    )
}