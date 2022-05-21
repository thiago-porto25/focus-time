import { StyleSheet, Text, View, FlatList } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

export function FocusHistory({ history }) {
  const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>;

  return (
    <View style={styles.container}>
      {!history || !history.length ? (
        <Text style={styles.title}>We haven't focused on anything yet!</Text>
      ) : (
        <>
          <Text style={styles.title}>Things we've focused on:</Text>
          <FlatList data={history} renderItem={renderItem} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.lg,
    flex: 1,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: 'bold',
  },
  item: {
    color: colors.white,
    fontSize: fontSizes.md,
    paddingTop: spacing.sm,
  },
});
