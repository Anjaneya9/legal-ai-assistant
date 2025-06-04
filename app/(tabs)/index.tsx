import { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { Send } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChatMessage } from '@/components/ChatMessage';
import { SuggestionChip } from '@/components/SuggestionChip';
import { EmptyState } from '@/components/EmptyState';

export default function AssistantScreen() {
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState<Array<{ id: string; content: string; sender: 'user' | 'assistant' }>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);

  const suggestions = [
    'What are my rights as a tenant?',
    'How do I form an LLC?',
    'Explain this contract',
    'Review my NDA'
  ];

  const handleSend = () => {
    if (inputText.trim() === '') return;
    
    const userMessage = {
      id: Date.now().toString(),
      content: inputText.trim(),
      sender: 'user' as const
    };
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);
    
    setTimeout(() => {
      const assistantMessage = {
        id: (Date.now() + 1).toString(),
        content: generateResponse(userMessage.content),
        sender: 'assistant' as const
      };
      setMessages(prev => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const handleSuggestionPress = (suggestion: string) => {
    setInputText(suggestion);
  };

  const generateResponse = (question: string): string => {
    if (question.toLowerCase().includes('tenant') || question.toLowerCase().includes('rights')) {
      return "As a tenant, you generally have rights to: 1) habitable living conditions, 2) privacy from landlord intrusion, 3) security deposit protection, and 4) protection against illegal discrimination. Specific rights vary by location. Would you like me to explain any of these in more detail?";
    } else if (question.toLowerCase().includes('llc')) {
      return "Forming an LLC typically involves: 1) Choosing a name, 2) Filing articles of organization with your state, 3) Creating an operating agreement, and 4) Obtaining necessary permits and licenses. Would you like me to explain the process for a specific state?";
    } else if (question.toLowerCase().includes('contract') || question.toLowerCase().includes('nda')) {
      return "To properly review a legal document, I'd need to see its contents. In the future, you'll be able to upload documents for analysis. Would you like some general advice about what to look for in contracts?";
    } else {
      return "I understand you're asking about: \"" + question + "\". To give you the most accurate legal information, I'd need more specifics. Could you provide additional details about your situation?";
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <KeyboardAvoidingView 
        style={styles.keyboardAvoid}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={80}
      >
        <ScrollView 
          ref={scrollViewRef}
          style={styles.scrollView}
          contentContainerStyle={
            messages.length === 0 ? styles.emptyScrollContent : styles.scrollContent
          }
          onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
        >
          {messages.length === 0 ? (
            <EmptyState 
              title="Your Legal Assistant"
              description="Ask any legal question, and I'll help explain it in simple terms. You can also try one of the suggestions below."
              iconName="message-square"
            />
          ) : (
            messages.map(message => (
              <ChatMessage 
                key={message.id}
                content={message.content}
                sender={message.sender}
              />
            ))
          )}
          
          {isLoading && (
            <View style={styles.loadingContainer}>
              <ActivityIndicator color="#2563EB" />
              <Text style={styles.loadingText}>Processing your question...</Text>
            </View>
          )}
        </ScrollView>
        
        {messages.length === 0 && (
          <View style={styles.suggestionsContainer}>
            <Text style={styles.suggestionsTitle}>Suggested questions:</Text>
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.suggestionsScroll}
            >
              {suggestions.map((suggestion, index) => (
                <SuggestionChip 
                  key={index} 
                  label={suggestion} 
                  onPress={() => handleSuggestionPress(suggestion)}
                />
              ))}
            </ScrollView>
          </View>
        )}
        
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={inputText}
            onChangeText={setInputText}
            placeholder="Ask a legal question..."
            placeholderTextColor="#94A3B8"
            multiline
            maxLength={500}
          />
          <TouchableOpacity 
            style={[
              styles.sendButton,
              (!inputText.trim() || isLoading) && styles.sendButtonDisabled
            ]}
            onPress={handleSend}
            disabled={!inputText.trim() || isLoading}
          >
            <Send size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  keyboardAvoid: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  emptyScrollContent: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 24,
  },
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F1F5F9',
    borderRadius: 16,
    marginTop: 8,
  },
  loadingText: {
    marginLeft: 8,
    color: '#64748B',
    fontSize: 14,
  },
  suggestionsContainer: {
    paddingHorizontal: 16,
    paddingTop: 0,
  },
  suggestionsTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#64748B',
    marginBottom: 8,
  },
  suggestionsScroll: {
    paddingBottom: 8,
    flexDirection: 'row',
    gap: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#F1F5F9',
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
    alignItems: 'flex-end',
  },
  input: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    maxHeight: 120,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  sendButton: {
    marginLeft: 8,
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#2563EB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButtonDisabled: {
    backgroundColor: '#94A3B8',
  },
});