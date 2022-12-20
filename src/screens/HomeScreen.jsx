import {
  Animated,
  Dimensions,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import COLORS from '../constants/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import hotels from '../constants/data';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Card, CategoriesList, TopHotelCard} from '../components';
// import Icon from 'react-native-vector-icons/FontAwesome';

const {width} = Dimensions.get('screen');
const cardWidth = width / 1.8;

const HomeScreen = ({navigation}) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={styles.header}>
        <View style={{paddingBottom: 15}}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>
            Find your hotel
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>in </Text>
            <Text
              style={{fontSize: 30, fontWeight: 'bold', color: COLORS.primary}}>
              Lahore
            </Text>
          </View>
        </View>
        <Icon
          name="person"
          size={38}
          color={COLORS.grey}
          style={{marginTop: 10}}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.searchInputContainer}>
          <Icon name="search" size={30} style={{marginLeft: 20}} />
          <TextInput
            placeholder="Search"
            style={{fontSize: 20, paddingLeft: 10}}
          />
        </View>
        <CategoriesList />
        <View>
          <Animated.FlatList
            onMomentumScrollEnd={e => {
              setActiveCardIndex(
                Math.round(e.nativeEvent.contentOffset.x / cardWidth),
              );
            }}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {useNativeDriver: true},
            )}
            horizontal
            data={hotels}
            contentContainerStyle={{paddingVertical: 30, paddingLeft: 20}}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => <Card hotel={item} index={index} />}
            // snapToInterval={cardWidth}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
          }}>
          <Text style={{fontWeight: 'bold', color: COLORS.grey}}>
            Top hotels
          </Text>
          <Text style={{color: COLORS.grey}}>Show all</Text>
        </View>
        <FlatList
          horizontal
          data={hotels}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingLeft: 20,
            marginTop: 20,
            paddingBottom: 30,
          }}
          renderItem={({item, index}) => <TopHotelCard hotel={item} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  searchInputContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    marginTop: 15,
    marginLeft: 20,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
