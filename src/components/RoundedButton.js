import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';

export function RoundedButton({
  style = {},
  textStyle = {},
  size = 125,
  onPress,
  title,
}) {
  return (
    <TouchableOpacity style={[styles(size).radius, style]} onPress={onPress}>
      <Text style={[styles(size).text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = (size) =>
  StyleSheet.create({
    radius: {
      width: size,
      height: size,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: size / 2,
      backgroundColor: colors.white,
    },
    text: {
      fontSize: size / 3.5,
      color: colors.darkBlue,
    },
  });
