import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/RoundedButton';
import { spacing } from '../utils/sizes';

export function Focus({ setCurrentSubject }) {
  const [focusItemValue, setFocusItemValue] = useState('');

  const onPress = () => {
    if (focusItemValue.trim()) {
      setCurrentSubject(focusItemValue);
    }
  };

  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          label="What would you like to focus on?"
          value={focusItemValue}
          onChangeText={setFocusItemValue}
        />
        <RoundedButton title="+" onPress={onPress} size={50} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    padding: spacing.lg,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    flex: 0.9,
  },
});
