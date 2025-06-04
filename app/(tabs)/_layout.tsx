import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';
import { MessageSquare, FileText, User } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#2563EB',
        tabBarInactiveTintColor: '#94A3B8',
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitle,
        headerTintColor: '#0F172A',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Assistant',
          tabBarIcon: ({ color, size }) => (
            <MessageSquare size={size} color={color} />
          ),
          headerTitle: 'Legal Assistant',
        }}
      />
      <Tabs.Screen
        name="documents"
        options={{
          title: 'Documents',
          tabBarIcon: ({ color, size }) => (
            <FileText size={size} color={color} />
          ),
          headerTitle: 'My Documents',
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <User size={size} color={color} />
          ),
          headerTitle: 'My Profile',
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#F8FAFC',
    borderTopColor: '#E2E8F0',
    height: 60,
    paddingBottom: 6,
    paddingTop: 6,
  },
  tabBarLabel: {
    fontSize: 12,
    fontWeight: '500',
  },
  header: {
    backgroundColor: '#F8FAFC',
    shadowColor: '#0F172A',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
    elevation: 2,
  },
  headerTitle: {
    fontWeight: '600',
    fontSize: 18,
  },
});