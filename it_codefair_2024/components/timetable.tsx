import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { supabase } from '../lib/supabase'; 

type Unit = {
  id: number;
  code: string;
  name: string;
  location: string;
  day: string;  
  time: string;  
};

export default function Timetable() {
  const [units, setUnits] = useState<Unit[]>([]);

  useEffect(() => {
    const fetchUnits = async () => {
      const { data, error } = await supabase
        .from('unit_codes')
        .select('*');

      if (error) {
        console.error('Error fetching units:', error);
      } else {
        setUnits(data || []);  
      }
    };

    fetchUnits();
  }, []);

  const renderUnitsByDay = (day: string) => {
    const unitsForDay = units.filter(unit => unit.day === day);

    return (
      <View key={day} style={styles.dayContainer}>
        <Text style={styles.dayTitle}>{day}</Text>
        {unitsForDay.map((unit) => (
          <View key={unit.id} style={styles.unit}>
            <Text style={styles.unitText}>{unit.time}</Text>
            <Text style={styles.unitText}>{unit.name}</Text>
            <Text style={styles.unitText}>{unit.location}</Text>
          </View>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map(day => renderUnitsByDay(day))}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 20,
    },
    column: {
      flex: 1,
      marginHorizontal: 5,
    },
    unit: {
      marginBottom: 10,
      padding: 10,
      backgroundColor: '#f0f0f0',
      borderRadius: 8,
    },
    unitText: {
      fontSize: 14,
    },
  });
  
