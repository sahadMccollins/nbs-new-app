import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import LikeAnim from '@assets/likeAnim.json';
import Lottie from 'lottie-react-native';
import {windowHeight, windowWidth} from '@theme/appConstant';
import {Wishlist} from '@utils/icons';
import {useValues} from '@App';

export default function LikeAnimation() {
  const [like, setLike] = useState(false);
  const animationProgress = useRef(new Animated.Value(0)).current;
  const {isDark} = useValues();

  useEffect(() => {
    Animated.timing(animationProgress, {
      toValue: like ? 1 : 0,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, [like, animationProgress]);

  const likeProduct = () => {
    setLike(!like);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={likeProduct}
        style={[
          styles.wishlist,
          {backgroundColor: isDark ? '#2B2B2B' : 'white'},
        ]}>
        <View style={styles.like}>
          {like ? (
            <Lottie
              source={LikeAnim}
              style={styles.like}
              progress={animationProgress}
            />
          ) : (
            <Wishlist />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  like: {
    width: windowWidth(26),
    height: windowHeight(26),
    alignItems: 'center',
    justifyContent: 'center',
  },
  wishlist: {
    height: windowHeight(22),
    width: windowWidth(32),
    borderRadius: windowWidth(16),
    position: 'absolute',
    top: windowHeight(10),
    right: windowWidth(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
