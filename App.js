import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar as StatusBarNative,
  Platform,
} from 'react-native';

import { Focus } from './src/features/Focus';
import { Timer } from './src/features/Timer';
import { colors } from './src/utils/colors';
import { FocusHistory } from './src/features/FocusHistory';

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  const [history, setHistory] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      {!currentSubject ? (
        <>
          <Focus setCurrentSubject={setCurrentSubject} />
          <FocusHistory history={history} />
        </>
      ) : (
        <Timer
          focusSubject={currentSubject}
          setCurrentSubject={setCurrentSubject}
          onTimerEnd={(subject) => setHistory([...history, subject])}
          clearSubject={() => setCurrentSubject(null)}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBarNative.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  },
});
