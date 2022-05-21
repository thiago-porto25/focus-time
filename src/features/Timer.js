import { useState } from 'react';
import { StyleSheet, Text, View, Vibration } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { useKeepAwake } from 'expo-keep-awake';

import { Countdown } from '../components/Countdown';
import { RoundedButton } from '../components/RoundedButton';
import { Timing } from './Timing';

import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

export function Timer({ focusSubject, clearSubject, onTimerEnd }) {
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);
  useKeepAwake();

  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setProgress(1);
    onTimerEnd(focusSubject);
    reset();
    setIsStarted(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={setProgress}
          onEnd={onEnd}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Focusing on:</Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>
      <View style={{ paddingTop: spacing.sm }}>
        <ProgressBar
          progress={progress}
          color={colors.progressBar}
          style={{ height: spacing.sm }}
        />
      </View>
      <View style={styles.timingWrapper}>
        <Timing onChangeTime={setMinutes} />
      </View>
      <View style={styles.buttonWrapper}>
        {!isStarted ? (
          <RoundedButton
            title="start"
            size={100}
            onPress={() => setIsStarted(true)}
          />
        ) : (
          <RoundedButton
            title="pause"
            size={100}
            onPress={() => setIsStarted(false)}
          />
        )}
      </View>
      <View style={styles.clearWrapper}>
        <RoundedButton title="clear" size={60} onPress={clearSubject} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    flex: 0.35,
  },
  titleContainer: {
    paddingTop: spacing.xxl,
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: fontSizes.lg,
  },
  task: {
    color: colors.white,
    textAlign: 'center',
    fontSize: fontSizes.md,
  },
  timingWrapper: {
    flex: 0.1,
    paddingTop: spacing.xxl,
    flexDirection: 'row',
  },
  clearWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
