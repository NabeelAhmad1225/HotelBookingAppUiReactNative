import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {useState} from 'react';

import COLORS from '../constants/colors';
const CategoriesList = () => {
  const categories = ['All', 'Popular', 'Top Rated', 'Feature', 'luxury'];

  const [selectCategoryIndex, setSelectCategoryIndex] = useState(0);
  return (
    <View style={styles.CategoriesListContainer}>
      {categories.map((item, i) => (
        <TouchableOpacity
          key={i}
          activeOpacity={0.8}
          onPress={() => setSelectCategoryIndex(i)}>
          <View>
            <Text
              style={{
                ...styles.CategoriesListText,
                color: selectCategoryIndex == i ? COLORS.primary : COLORS.grey,
              }}>
              {item}
            </Text>
            {selectCategoryIndex == i && (
              <View
                style={{
                  height: 3,
                  width: 30,
                  backgroundColor: COLORS.primary,
                  marginTop: 2,
                }}
              />
            )}
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};
export default CategoriesList;

const styles = StyleSheet.create({
  CategoriesListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 30,
  },
  CategoriesListText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
