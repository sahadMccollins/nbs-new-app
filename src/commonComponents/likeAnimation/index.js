// import React, {useState, useRef, useEffect} from 'react';
// import {
//   View,
//   StyleSheet,
//   TouchableOpacity,
//   Animated,
//   Easing,
// } from 'react-native';
// import LikeAnim from '@assets/likeAnim.json';
// import Lottie from 'lottie-react-native';
// import {windowHeight, windowWidth} from '@theme/appConstant';
// import {Wishlist} from '@utils/icons';
// import {useValues} from '@App';

// export default function LikeAnimation() {
//   const [like, setLike] = useState(false);
//   const animationProgress = useRef(new Animated.Value(0)).current;
//   const {isDark} = useValues();

//   useEffect(() => {
//     Animated.timing(animationProgress, {
//       toValue: like ? 1 : 0,
//       duration: 300,
//       easing: Easing.linear,
//       useNativeDriver: true,
//     }).start();
//   }, [like, animationProgress]);

//   const likeProduct = () => {
//     setLike(!like);
//   };
//   return (
//     <View style={styles.container}>
//       <TouchableOpacity
//         activeOpacity={0.7}
//         onPress={likeProduct}
//         style={[
//           styles.wishlist,
//           {backgroundColor: isDark ? '#2B2B2B' : 'white'},
//         ]}>
//         <View style={styles.like}>
//           {like ? (
//             <Lottie
//               source={LikeAnim}
//               style={styles.like}
//               progress={animationProgress}
//             />
//           ) : (
//             <Wishlist />
//           )}
//         </View>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   like: {
//     width: windowWidth(26),
//     height: windowHeight(26),
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   wishlist: {
//     height: windowHeight(22),
//     width: windowWidth(32),
//     borderRadius: windowWidth(16),
//     position: 'absolute',
//     top: windowHeight(10),
//     right: windowWidth(10),
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });



// import React, { useState, useRef, useEffect, useCallback } from "react";
// import {
//   View,
//   StyleSheet,
//   TouchableOpacity,
//   Animated,
//   Easing,
// } from "react-native";
// import Lottie from "lottie-react-native";
// import LikeAnim from "@assets/likeAnim.json";
// import { Wishlist } from "@utils/icons";
// import { useValues } from "@App";
// import { windowHeight, windowWidth } from "@theme/appConstant";

// export default function LikeAnimation({ productId, isLiked, onToggle }) {
//   console.log("LikeAnimationComponent Rendered for productId:", productId, "isLiked:", isLiked);
//   const [like, setLike] = useState(isLiked);
//   const animationProgress = useRef(new Animated.Value(isLiked ? 1 : 0)).current;
//   const { isDark } = useValues();

//   // Sync local state when wishlist changes outside
//   useEffect(() => {
//     setLike(isLiked);

//     Animated.timing(animationProgress, {
//       toValue: isLiked ? 1 : 0,
//       duration: 300,
//       easing: Easing.linear,
//       useNativeDriver: true,
//     }).start();

//   }, [isLiked]);

//   const likeProduct = useCallback(() => {
//     onToggle(productId);       // toggle wishlist state
//     setLike(prev => !prev);    // toggle animation state

//     Animated.timing(animationProgress, {
//       toValue: !like ? 1 : 0,
//       duration: 300,
//       easing: Easing.linear,
//       useNativeDriver: true,
//     }).start();

//   }, [like, productId, onToggle]);

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity
//         activeOpacity={0.7}
//         onPress={likeProduct}
//         style={[
//           styles.wishlist,
//           { backgroundColor: isDark ? "#2B2B2B" : "white" },
//         ]}
//       >
//         <View style={styles.like}>
//           {like ? (
//             <Lottie
//               source={LikeAnim}
//               style={styles.like}
//               progress={animationProgress}
//             />
//           ) : (
//             <Wishlist />
//           )}
//         </View>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   like: {
//     width: windowWidth(26),
//     height: windowHeight(26),
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   wishlist: {
//     height: windowHeight(22),
//     width: windowWidth(32),
//     borderRadius: windowWidth(16),
//     position: "absolute",
//     top: windowHeight(10),
//     right: windowWidth(10),
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });



// import React, { useState, useRef, useEffect, useCallback } from "react";
// import {
//   View,
//   StyleSheet,
//   TouchableOpacity,
// } from "react-native";
// import Lottie from "lottie-react-native";
// import LikeAnim from "@assets/likeAnim.json";
// import { Wishlist } from "@utils/icons";
// import { useValues } from "@App";
// import { windowHeight, windowWidth } from "@theme/appConstant";

// function LikeAnimationComponent({ productId, isLiked, onToggle }) {
//   const [liked, setLiked] = useState(isLiked);
//   const animationRef = useRef(null);
//   const { isDark } = useValues();

//   useEffect(() => {
//     setLiked(isLiked);

//     // Play forward when liked
//     if (isLiked && animationRef.current) {
//       animationRef.current.play(0, 60);
//     }
//     // Play reverse when unliked
//     if (!isLiked && animationRef.current) {
//       animationRef.current.play(60, 0);
//     }
//   }, [isLiked]);

//   const likeProduct = useCallback(() => {
//     onToggle(productId);
//   }, [productId, onToggle]);

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity
//         activeOpacity={0.7}
//         onPress={likeProduct}
//         style={[
//           styles.wishlist,
//           { backgroundColor: isDark ? "#2B2B2B" : "white" },
//         ]}
//       >
//         <View style={styles.like}>
//           {liked ? (
//             <Lottie
//               ref={animationRef}
//               source={LikeAnim}
//               style={styles.like}
//               autoPlay={false}
//               loop={false}
//             />
//           ) : (
//             <Wishlist />
//           )}
//         </View>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   like: {
//     width: windowWidth(26),
//     height: windowHeight(26),
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   wishlist: {
//     height: windowHeight(22),
//     width: windowWidth(32),
//     borderRadius: windowWidth(16),
//     position: "absolute",
//     top: windowHeight(10),
//     right: windowWidth(10),
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

// // Prevent re-renders unless wishlist state changes
// export default React.memo(LikeAnimationComponent, (prev, next) => {
//   return (
//     prev.productId === next.productId &&
//     prev.isLiked === next.isLiked
//   );
// });


import React, { useEffect, useRef } from "react";
import { View, TouchableOpacity, Animated, StyleSheet } from "react-native";
import { Wishlist, WishlistFilled } from "@utils/icons";
// Make sure you have both outlined + filled icons
import { windowHeight, windowWidth } from "@theme/appConstant";
import { useValues } from "@App";

export default function LikeAnimation({ productId, isLiked, onToggle }) {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const { isDark } = useValues();

  const animate = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.4,
        duration: 120,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 120,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handlePress = () => {
    onToggle(productId); // toggle wishlist
    animate(); // pop animation
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={handlePress}
      style={[
        styles.wishlist,
        { backgroundColor: isDark ? "#2B2B2B" : "white" },
      ]}
    >
      <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
        {isLiked ? <WishlistFilled /> : <Wishlist />}
      </Animated.View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wishlist: {
    height: windowHeight(22),
    width: windowWidth(32),
    borderRadius: windowWidth(16),
    position: "absolute",
    top: windowHeight(10),
    right: windowWidth(10),
    alignItems: "center",
    justifyContent: "center",
  },
});