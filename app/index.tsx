import { Redirect } from 'expo-router';

export default function Index() {
  // In a real app, check if user is authenticated
  const isAuthenticated = false;
  
  if (!isAuthenticated) {
    return <Redirect href="/auth/login" />;
  }
  
  return <Redirect href="/(tabs)" />;
}