import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FileText, Clock } from 'lucide-react-native';
import { Document } from '@/types';

type DocumentItemProps = {
  document: Document;
  onPress: () => void;
};

export function DocumentItem({ document, onPress }: DocumentItemProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.iconContainer}>
        <FileText size={24} color="#2563EB" />
      </View>
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1}>
          {document.title}
        </Text>
        <View style={styles.metaContainer}>
          <Text style={styles.type}>{document.type}</Text>
          <View style={styles.dateContainer}>
            <Clock size={12} color="#64748B" style={styles.clockIcon} />
            <Text style={styles.date}>{formatDate(document.date)}</Text>
          </View>
        </View>
      </View>
      {document.analyzed && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>Analyzed</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    alignItems: 'center',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: '#EFF6FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0F172A',
    marginBottom: 4,
  },
  metaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  type: {
    fontSize: 14,
    color: '#64748B',
    marginRight: 8,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  clockIcon: {
    marginRight: 4,
  },
  date: {
    fontSize: 12,
    color: '#64748B',
  },
  badge: {
    backgroundColor: '#DCFCE7',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginLeft: 8,
  },
  badgeText: {
    fontSize: 12,
    color: '#15803D',
    fontWeight: '500',
  },
});