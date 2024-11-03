import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface TimetableItemProps {
  item: {
    code: string;
    name: string;
    location: string;
    day: string;
    time: string;
  };
}

const TimetableItem = ({ item }: TimetableItemProps) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.details}>{item.location}</Text>
      <Text style={styles.details}>{item.day} - {item.time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 15,
    backgroundColor: '#e8f0ff',
    marginVertical: 5,
    borderRadius: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 14,
    color: '#555',
  },
});

export default TimetableItem;
