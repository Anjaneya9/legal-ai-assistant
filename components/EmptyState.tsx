import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MessageSquare, FileText, User } from 'lucide-react-native';

type EmptyStateProps = {
  title: string;
  description: string;
  iconName: 'message-square' | 'file-text' | 'user';
  actionLabel?: string;
  onAction?: () => void;
};

export function EmptyState({ 
  title, 
  description, 
  iconName,
  actionLabel,
  onAction
}: EmptyStateProps) {
  const renderIcon = () => {
    const iconProps = { size: 48, color: '#93C5FD' };
    
    switch (iconName) {
      case 'message-square':
        return <MessageSquare {...iconProps} />;
      case 'file-text':
        return <FileText {...iconProps} />;
      case 'user':
        return <User {...iconProps} />;
      default:
        return <MessageSquare {...iconProps} />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        {renderIcon()}
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      
      {actionLabel && onAction && (
        <TouchableOpacity 
          style={styles.button}
          onPress={onAction}
        >
          <Text style={styles.buttonText}>{actionLabel}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#EFF6FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#0F172A',
    marginBottom: 8,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#64748B',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 22,
  },
  button: {
    backgroundColor: '#2563EB',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 16,
  },
});