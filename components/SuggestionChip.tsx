import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type SuggestionChipProps = {
  label: string;
  onPress: () => void;
};

export function SuggestionChip({ label, onPress }: SuggestionChipProps) {
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={onPress} 
      activeOpacity={0.7}
    >
      <Text style={styles.label} numberOfLines={1}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EFF6FF',
    borderRadius: 9999,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#BFDBFE',
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1D4ED8',
  },
});