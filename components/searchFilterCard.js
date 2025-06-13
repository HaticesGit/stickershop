import { View, TextInput, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const searchFilterCard = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  sortOption,
  onSortChange,
  categories = []
}) => {
  return (
    <>
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        placeholderTextColor="#999"
        value={searchQuery}
        onChangeText={onSearchChange}
      />

      <View style={styles.pickerContainer}>
        <Picker selectedValue={selectedCategory} onValueChange={onCategoryChange}>
          <Picker.Item label="All categories" value="" />
          {categories.map((category) => (
            <Picker.Item key={category} label={category} value={category} />
          ))}
        </Picker>
      </View>

      <View style={styles.pickerContainer}>
        <Picker selectedValue={sortOption} onValueChange={onSortChange}>
          <Picker.Item label="Price (low to high)" value="price-asc" />
          <Picker.Item label="Price (high to low)" value="price-desc" />
          <Picker.Item label="Name (A-Z)" value="name-asc" />
          <Picker.Item label="Name (Z-A)" value="name-desc" />
        </Picker>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  searchInput: {
    backgroundColor: '#fffefc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
    color: '#000',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  pickerContainer: {
    backgroundColor: '#fffefc',
    borderRadius: 8,
    marginBottom: 16,
    padding: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
});

export default searchFilterCard;
