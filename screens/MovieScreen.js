import {Dimensions, Image, Platform, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {useNavigation, useRoute} from "@react-navigation/native";
import {useEffect, useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {ChevronLeftIcon} from "react-native-heroicons/outline";
import {styles, theme} from "../theme";
import {HeartIcon} from "react-native-heroicons/solid";
import {LinearGradient} from "expo-linear-gradient";
import Actors from "../components/actors";
import MovieList from "../components/movieList";
import Loading from "../components/loading";

var {width, height} = Dimensions.get('window');
const ios = Platform.OS === 'ios'
const topMargin = ios ? '' : 'mt-3';

export default function MovieScreen({data}) {
    const {params: item} = useRoute();
    const navigation = useNavigation();
    const [isFavourite, toggleFavourite] = useState(false);
    const [actors, setActors] = useState([1, 2, 3, 4, 5]);
    const [similarMovies, setSimilarMovies] = useState([1, 2, 3, 4, 5]);
    const [loading, setLoading] = useState(false);


    const movieName = "Ant-Man and the Wasp: Quantumanim"
    useEffect(() => {
        //
    }, [item]);


    return (
        <ScrollView
            contentContainerStyle={{paddingBottom: 20}}
            className="flex-1 bg-neutral-900"
        >
            {/*back button and movie image*/}
            <View className="w-full">
                {/*backButton and Hart*/}
                <SafeAreaView
                    className={"absolute z-20 w-full flex-row justify-between items-center px-4 " + topMargin}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.background}
                                      className="rounded-xl p-1">
                        <ChevronLeftIcon size="28" strokeWidth={2.5} color="white"/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)}>
                        <HeartIcon size="35" color={isFavourite ? theme.background : "white"}/>
                    </TouchableOpacity>
                </SafeAreaView>

                {/*Movie Image*/}

                {
                    loading ? (
                        <Loading/>
                    ) : (
                        <View>
                            <Image
                                source={require('../assets/images/movie-poster.jpg')}
                                style={{width, height: height * 0.66}}
                            />
                            {/*This Linear Gradiant for added faded look for movie image and get it over the image using absolute*/}
                            <LinearGradient
                                colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(23,23,23,1)']}
                                style={{width, height: height * 0.40}}
                                start={{x: 0.5, y: 0}}
                                end={{x: 0.5, y: 1}}
                                className="absolute bottom-0"
                            />
                        </View>
                    )
                }

            </View>

            {/*Movie Details*/}
            {/*use height - to letter push to over the gradient*/}
            <View style={{marginTop: -(height * 0.09)}} className="space-y-3">
                {/*Title*/}
                <Text className="text-white text-center text-3xl font-bold tracking-wider">
                    {movieName}
                </Text>

                {/*status, release*/}
                <Text className="text-neutral-400 font-semibold text-base text-center">
                    Released • 2020 • 170 min
                </Text>

                {/*genres*/}
                <View className="flex-row justify-center mx-4 space-x-2">
                    <Text className="text-neutral-400 font-semibold text-base text-center">
                        Action •
                    </Text>
                    <Text className="text-neutral-400 font-semibold text-base text-center">
                        Thrill •
                    </Text>
                    <Text className="text-neutral-400 font-semibold text-base text-center">
                        Comedy
                    </Text>
                </View>

                {/*description*/}
                <Text className="text-neutral-400 mx-4 tracking-wide">
                    Tessa Young is a dedicated student, dutiful daughter and loyal girlfriend to her high school
                    sweetheart. Entering her first semester of college, Tessa's guarded world opens up when she
                    meets Hardin Scott, a mysterious and brooding rebel who makes her question all she thought she
                    knew about herself -- and what she wants out of life.
                </Text>

                {/*Actors*/}
                <Actors navigation={navigation} actors={actors}/>

                {/*Similar movies*/}
                <MovieList title="Similar Movies" hideSeeAll={true} data={similarMovies}/>
            </View>
        </ScrollView>
    )
}