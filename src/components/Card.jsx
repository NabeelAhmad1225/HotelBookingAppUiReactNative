import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef} from 'react';
import COLORS from '../constants/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('screen');
const cardWidth = width / 1.8;

const Card = ({hotel, index}) => {
  // const scrollX = useRef(new Animated.Value(0)).current;
  // const inputRange = [
  //   (index - 1) * cardWidth,
  //   index * cardWidth,
  //   (index + 1) * cardWidth,
  // ];
  // const opacity = scrollX.interpolate({
  //   inputRange,
  //   outputRange: [0.7, 0, 0.7],
  // });
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => navigation.navigate('Detail', hotel)}>
      <View style={{...styles.card}}>
        <Animated.View style={[styles.cardOverlay, {opacity: 0}]} />
        <View style={styles.priceTag}>
          <Text style={{color: COLORS.white, fontSize: 20, fontWeight: 'bold'}}>
            ${hotel.price}
          </Text>
        </View>
        <Image source={hotel.image} style={styles.cardImage} />
        <View style={styles.cardDetails}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text
                style={{fontSize: 15, fontWeight: 'bold', color: COLORS.dark}}>
                {hotel.name}
              </Text>
              <Text style={{color: COLORS.grey, fontSize: 10}}>
                {hotel.location}
              </Text>
            </View>
            <Icon name="bookmark-outline" size={26} color={COLORS.primary} />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Icon name="star" size={15} color={COLORS.orange} />
              <Icon name="star" size={15} color={COLORS.orange} />
              <Icon name="star" size={15} color={COLORS.orange} />
              <Icon name="star" size={15} color={COLORS.orange} />
              <Icon name="star" size={15} color={COLORS.grey} />
            </View>
            <Text style={{fontSize: 10, color: COLORS.grey}}>356reviews</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    height: 280,
    width: cardWidth,
    elevation: 15,
    marginRight: 20,
    borderRadius: 15,
    backgroundColor: COLORS.white,
  },
  cardImage: {
    height: 200,
    width: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  priceTag: {
    height: 60,
    width: 80,
    backgroundColor: COLORS.primary,
    position: 'absolute',
    right: 0,
    zIndex: 1,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardDetails: {
    height: 100,
    borderRadius: 15,
    backgroundColor: COLORS.white,
    position: 'absolute',
    bottom: 0,
    padding: 20,
    width: '100%',
  },
  cardOverlay: {
    height: 280,
    backgroundColor: COLORS.white,
    position: 'absolute',
    zIndex: 100,
    width: cardWidth,
    borderRadius: 15,
  },
});
