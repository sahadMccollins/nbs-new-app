import React, { useState } from "react";
import {View,Image,Text,Dimensions} from "react-native";
import styles from "./styles";
import Data from "@utils/json";
import Carousel from "react-native-snap-carousel";

export const SLIDER_WIDTH = Dimensions.get('window').width
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

export default carouselItem = (props) => {
    const {colors} = props
    const [key, setKey] = useState(0);

    return (
        <View style={styles.view}>
            <Carousel
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
                onSnapToItem={(index) => setKey(index)} />
            <View style={styles.titleMainView}>
                <Text style={[styles.header,{color:colors.text}]}>{props.t(Data.data[key].title)}</Text>
                <Text style={[styles.body,{color:colors.subText}]}>{props.t(Data.data[key].body)}</Text>
            </View>
        </View>
    )
}