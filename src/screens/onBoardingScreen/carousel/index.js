import React, { useState } from "react";
import { View, Image, Text, Dimensions, FlatList } from "react-native";
import styles from './style';
import Data from "@utils/json";
// import Carousel from "react-native-snap-carousel";

export const SLIDER_WIDTH = Dimensions.get('window').width
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

export default carouselItem = (props) => {
    const { colors } = props
    const [key, setKey] = useState(0);

    return (
        <View style={styles.view}>
            {/* <Carousel
                layout={'default'}
                data={Data.data}
                renderItem={({ item, index }) =>
                    <View style={styles.image}>
                        <View style={styles.imageContainer} key={index}>
                            <Image
                                source={item.imgUrl}
                                style={styles.sliderImage} />
                        </View>
                    </View>
                }
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                onSnapToItem={(index) => setKey(index)} /> */}

            <FlatList
                data={Data.data}
                renderItem={({ item, index }) => (
                    <View style={styles.image}>
                        <Image source={item.imgUrl} style={styles.sliderImage} />
                    </View>
                )}
                horizontal
                pagingEnabled
                scrollEventThrottle={16}
                onScroll={(e) => {
                    const index = Math.round(e.nativeEvent.contentOffset.x / ITEM_WIDTH);
                    setKey(index);
                }}
                snapToInterval={ITEM_WIDTH}
                snapToAlignment="center"
            />
            <View style={styles.titleMainView}>
                <Text style={[styles.header, { color: colors.text }]}>{props.t(Data.data[key].title)}</Text>
                <Text style={[styles.body, { color: colors.subText }]}>{props.t(Data.data[key].body)}</Text>
            </View>
        </View>
    )
}