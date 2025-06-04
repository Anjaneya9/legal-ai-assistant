import { useEffect, useState } from 'react';
import { View, Text, ScrollView, Switch, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { ChevronRight, Bell, Shield, CircleHelp, Settings, LogOut, Camera } from 'lucide-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProfileScreen() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [profileImage, setProfileImage] = useState('https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=400');

  const handleSignOut = () => {
    router.replace('/auth/login');
  };

  const handleSaveProfile = () => {
    setIsEditMode(false);
  };
  
  const loadUserData = async () => {
    try {
      const stored = await AsyncStorage.getItem('user');
      if (stored) {
        const user = JSON.parse(stored);
        const nameFromEmail = user.email.split('@')[0];
        setName(nameFromEmail|| 'Sarah Johnson');
        setEmail(user.email || 'sarah.johnson@example.com');
      }
    } catch (error) {
      console.error('Failed to load user data:', error);
    } finally {
    }
  };

  useEffect(() => {
    loadUserData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <View style={styles.imageContainer}>
            <Image 
              source={{ uri: profileImage }}
              style={styles.profileImage}
              resizeMode="cover"
            />
            {isEditMode && (
              <TouchableOpacity style={styles.cameraButton}>
                <Camera size={20} color="#FFFFFF" />
              </TouchableOpacity>
            )}
          </View>
          
          {isEditMode ? (
            <View style={styles.editForm}>
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Full Name"
              />
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <View style={styles.buttonRow}>
                <TouchableOpacity 
                  style={[styles.button, styles.cancelButton]}
                  onPress={() => setIsEditMode(false)}
                >
                  <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={[styles.button, styles.saveButton]}
                  onPress={handleSaveProfile}
                >
                  <Text style={styles.saveButtonText}>Save Changes</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.email}>{email}</Text>
              <TouchableOpacity 
                style={styles.editButton}
                onPress={() => setIsEditMode(true)}
              >
                <Text style={styles.editButtonText}>Edit Profile</Text>
              </TouchableOpacity>
            </>
          )}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>
          
          <View style={styles.menuItem}>
            <View style={styles.menuIcon}>
              <Bell size={20} color="#2563EB" />
            </View>
            <View style={styles.menuContent}>
              <Text style={styles.menuText}>Notifications</Text>
              <Switch 
                trackColor={{ false: '#CBD5E1', true: '#60A5FA' }}
                thumbColor="#FFFFFF"
                ios_backgroundColor="#CBD5E1"
                value={true}
              />
            </View>
          </View>
          
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIcon}>
              <Shield size={20} color="#2563EB" />
            </View>
            <View style={styles.menuContent}>
              <Text style={styles.menuText}>Privacy & Security</Text>
              <ChevronRight size={20} color="#94A3B8" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIcon}>
              <Settings size={20} color="#2563EB" />
            </View>
            <View style={styles.menuContent}>
              <Text style={styles.menuText}>Preferences</Text>
              <ChevronRight size={20} color="#94A3B8" />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Subscription</Text>
          
          <View style={styles.subscriptionCard}>
            <View style={styles.subscriptionHeader}>
              <Text style={styles.planName}>Free Plan</Text>
              <Text style={styles.planBadge}>ACTIVE</Text>
            </View>
            
            <View style={styles.features}>
              <Text style={styles.feature}>• 5 document analyses per month</Text>
              <Text style={styles.feature}>• Basic legal information</Text>
              <Text style={styles.feature}>• Standard response time</Text>
            </View>
            
            <TouchableOpacity style={styles.upgradeButton}>
              <Text style={styles.upgradeButtonText}>Upgrade to Pro</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Support</Text>
          
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIcon}>
              <CircleHelp size={20} color="#2563EB" />
            </View>
            <View style={styles.menuContent}>
              <Text style={styles.menuText}>Help Center</Text>
              <ChevronRight size={20} color="#94A3B8" />
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.menuItem}
            onPress={handleSignOut}
          >
            <View style={styles.menuIcon}>
              <LogOut size={20} color="#DC2626" />
            </View>
            <View style={styles.menuContent}>
              <Text style={styles.signOutText}>Sign Out</Text>
            </View>
          </TouchableOpacity>
        </View>

        <Text style={styles.version}>Version 1.0.0</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
    paddingTop: 24,
  },
  imageContainer: {
    position: 'relative',
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#DBEAFE',
    marginBottom: 12,
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  cameraButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#2563EB',
    padding: 8,
    borderRadius: 9999,
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
    color: '#0F172A',
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    color: '#64748B',
    marginBottom: 16,
  },
  editButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: '#EFF6FF',
    borderWidth: 1,
    borderColor: '#BFDBFE',
    borderRadius: 9999,
  },
  editButtonText: {
    color: '#1D4ED8',
    fontWeight: '500',
  },
  editForm: {
    width: '100%',
    paddingHorizontal: 16,
  },
  input: {
    backgroundColor: '#F1F5F9',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 12,
    fontSize: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#E2E8F0',
    marginRight: 8,
  },
  saveButton: {
    backgroundColor: '#2563EB',
  },
  cancelButtonText: {
    color: '#334155',
    fontWeight: '600',
    fontSize: 16,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 16,
  },
  section: {
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0F172A',
    marginBottom: 12,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  menuIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#EFF6FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  menuContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuText: {
    fontSize: 16,
    color: '#334155',
  },
  signOutText: {
    fontSize: 16,
    color: '#DC2626',
  },
  subscriptionCard: {
    backgroundColor: '#F1F5F9',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  subscriptionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  planName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0F172A',
  },
  planBadge: {
    fontSize: 12,
    fontWeight: '600',
    color: '#15803D',
    backgroundColor: '#DCFCE7',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 9999,
  },
  features: {
    marginBottom: 16,
  },
  feature: {
    fontSize: 14,
    color: '#334155',
    marginBottom: 8,
  },
  upgradeButton: {
    backgroundColor: '#2563EB',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  upgradeButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 16,
  },
  version: {
    textAlign: 'center',
    color: '#64748B',
    fontSize: 12,
    marginBottom: 16,
  },
});