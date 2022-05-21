import { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text } from 'react-native';

import { fontSizes, spacing } from '../utils/sizes';
import { colors } from '../utils/colors';

const minutesToMilliseconds = (minutes) => minutes * 60 * 1000;

const formatTime = (time) => (time < 10 ? `0${time}` : time);

export function Countdown({ minutes = 0.1, isPaused, onProgress, onEnd }) {
  const [milliseconds, setMilliseconds] = useState(null);
  const intervalRef = useRef(null);

  const reset = () => setMilliseconds(minutesToMilliseconds(minutes));

  const countDown = () => {
    setMilliseconds((time) => {
      if (time === 0) {
        clearInterval(intervalRef.current);
        onEnd(reset);
        return time;
      }

      return time - 1000;
    });
  };

  const minute = Math.floor(milliseconds / 60000) % 60;
  const seconds = Math.floor(milliseconds / 1000) % 60;

  useEffect(() => setMilliseconds(minutesToMilliseconds(minutes)), [minutes]);

  useEffect(
    () => onProgress(milliseconds / minutesToMilliseconds(minutes)),
    [milliseconds]
  );

  useEffect(() => {
    if (isPaused) {
      if (intervalRef.current) return clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(countDown, 1000);
    }

    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

  return (
    <Text style={styles.text}>
      {formatTime(minute)}:{formatTime(seconds)}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: fontSizes.xxxl,
    fontWeight: 'bold',
    color: colors.white,
    padding: spacing.lg,
    backgroundColor: 'rgba(94,132,226,0.3)',
  },
});
