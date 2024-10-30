import {View, Text, ScrollView, TouchableOpacity, Image} from "react-native";
import React from "react";

export default function Actors({actors,navigation}) {

    let personName = "keanu Reevs"
    let characterName = "Tessa Young"

    return (
        <View className="my-6">
            <Text className="text-white text-lg mx-4 mb-5"> Top Cast</Text>

            <ScrollView
                horizontal
                showHorizontalScrollIndicator={false}
                contentContainerStyle={{paddingHorizontal: 15}}
            >
                {
                    actors && actors.map((person, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                className="mr-4 items-center"
                                onPress={()=>navigation.navigate('Person',person)}
                            >
                                {/*Actor Image*/}
                                <View className="overflow-hidden rounded-full h-20 w-20 items-center border border-neutral-500">
                                    <Image
                                        className = "rounded-2xl h-24 w-20"
                                        source={require('../assets/images/actor.jpg')}
                                    />
                                </View>


                                {/*Character*/}
                                <Text className="text-white text-xs mt-1">
                                    {characterName.length > 10 ? characterName.slice(0, 10) + '...' : characterName}
                                </Text>

                                {/*Person*/}
                                <Text className="text-neutral-400 text-xs mt-1">
                                    {personName.length > 10 ? personName.slice(0, 10) + '...' : personName}
                                </Text>
                            </TouchableOpacity>
                        )
                    })

                }
            </ScrollView>
        </View>

    )
}