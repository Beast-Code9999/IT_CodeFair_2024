import React from 'react';
import { SafeAreaView } from 'react-native';
import Timetable from '@/components/timetable';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Timetable />
    </SafeAreaView>
  );
}
