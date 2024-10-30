import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    TouchableWithoutFeedback,
    Image
} from "react-native";
import React, {useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {XMarkIcon} from "react-native-heroicons/outline";
import {useNavigation} from "@react-navigation/native";
import Loading from "../components/loading";

const {width, height} = Dimensions.get('window');
export default function SearchScreen() {
    const navigation = useNavigation();
    const [results, setResults] = useState([1, 2, 3, 4]);
    let movieName = 'Ant-Man and the Wasp: Quantumania';
    const [loading, setLoading] = useState(false);

    return (
        <SafeAreaView className="bg-neutral-900 flex-1">
            {/*SearchBar, */}
            <View
                className="mx-4 my-1 mb-3 flex-row justify-between items-center border border-neutral-500 rounded-full">

                {/* SearchBar */}
                <TextInput
                    placeholder='Search Movie'
                    placeholderTextColor={'lightgray'}
                    className='pb-1 pl-6 flex-1 font-semibold text-white tracking-wider'
                />

                {/* close */}
                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                    className="rounded-full p-3 m-1 bg-neutral-500"
                >
                    <XMarkIcon size="25" color={'white'}/>
                </TouchableOpacity>
            </View>

            {/* Result */}
            {
                loading ? (
                        <Loading/>
                    ) :
                    results.length > 0 ? ( /*if result > 0*/
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{paddingHorizontal: 15}}
                            className="space-y-3"
                        >
                            {/* results */}
                            <Text className="text-white font-semibold ml-1">Results ({results.length})</Text>

                            {/* Movies */}
                            <View className='flex-row justify-between flex-wrap'>
                                {
                                    results.map((item, index) => {
                                        return (
                                            <TouchableWithoutFeedback
                                                key={index}
                                                onPress={() => navigation.push('Movie', item)}
                                            >
                                                <View className="space-y-2 mb-4">
                                                    <Image className="rounded-3xl"
                                                           source={require("../assets/images/movie-poster.jpg")}
                                                           style={{width: width * 0.44, height: height * 0.3}}
                                                    />
                                                    <Text className="text-neutral-300 ml-1">
                                                        {movieName.length > 22 ? movieName.slice(0, 22) + "..." : movieName}
                                                    </Text>
                                                </View>
                                            </TouchableWithoutFeedback>
                                        )
                                    })
                                }
                            </View>
                        </ScrollView>
                    ) : (
                        /* 404 Page */
                        <View className="flex-row justify-center mt-8">
                            <Image
                                source={require("../assets/images/pngwing.com (1).png")}
                                className="h-80 w-40"
                            />
                        </View>
                    )
            }


        </SafeAreaView>
    )
}