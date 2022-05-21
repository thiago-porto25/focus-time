import { StyleSheet, View } from 'react-native';
import { RoundedButton } from '../components/RoundedButton';

export function Timing({ onChangeTime }) {
  return (
    <>
      <View style={styles.container}>
        <RoundedButton size={70} title="10" onPress={() => onChangeTime(10)} />
      </View>
      <View style={styles.container}>
        <RoundedButton size={70} title="15" onPress={() => onChangeTime(15)} />
      </View>
      <View style={styles.container}>
        <RoundedButton size={70} title="20" onPress={() => onChangeTime(20)} />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
