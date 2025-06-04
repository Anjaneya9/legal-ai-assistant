import { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FilePlus, Search, Filter } from 'lucide-react-native';
import { DocumentItem } from '@/components/DocumentItem';
import { EmptyState } from '@/components/EmptyState';
import { mockDocuments } from '@/utils/mockData';

export default function DocumentsScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [documents, setDocuments] = useState(mockDocuments);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredDocuments = documents.filter(doc => 
    doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddDocument = () => {
    alert('Document upload functionality would open here');
  };

  const handleDocumentPress = (id: string) => {
    alert(`Viewing document with ID: ${id}`);
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Search size={20} color="#94A3B8" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search documents..."
            placeholderTextColor="#94A3B8"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        <TouchableOpacity 
          style={styles.filterButton}
          onPress={() => setIsFilterOpen(!isFilterOpen)}
        >
          <Filter size={20} color="#475569" />
        </TouchableOpacity>
      </View>
      
      {isFilterOpen && (
        <View style={styles.filterContainer}>
          <Text style={styles.filterTitle}>Filter by:</Text>
          <View style={styles.filterChipsContainer}>
            <TouchableOpacity style={[styles.filterChip, styles.activeFilterChip]}>
              <Text style={[styles.filterChipText, styles.activeFilterChipText]}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterChip}>
              <Text style={styles.filterChipText}>Contracts</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterChip}>
              <Text style={styles.filterChipText}>Agreements</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterChip}>
              <Text style={styles.filterChipText}>Legal Forms</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      
      <FlatList
        data={filteredDocuments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <DocumentItem
            document={item}
            onPress={() => handleDocumentPress(item.id)}
          />
        )}
        contentContainerStyle={
          filteredDocuments.length === 0 ? styles.emptyList : styles.list
        }
        ListEmptyComponent={
          <EmptyState
            title="No Documents Yet"
            description={
              searchQuery 
                ? "No documents match your search. Try different keywords or clear your search."
                : "Upload legal documents to get AI-powered analysis and explanations."
            }
            iconName="file-text"
            actionLabel="Upload Document"
            onAction={handleAddDocument}
          />
        }
      />
      
      <TouchableOpacity 
        style={styles.fab}
        onPress={handleAddDocument}
      >
        <FilePlus size={24} color="#FFFFFF" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  searchContainer: {
    flexDirection: 'row',
    padding: 16,
    paddingBottom: 12,
    backgroundColor: '#F8FAFC',
    alignItems: 'center',
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F1F5F9',
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  searchIcon: {
    marginLeft: 12,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 8,
    fontSize: 16,
    color: '#0F172A',
  },
  filterButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
    borderRadius: 8,
    backgroundColor: '#F1F5F9',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  filterContainer: {
    paddingHorizontal: 16,
    paddingBottom: 12,
    backgroundColor: '#F8FAFC',
  },
  filterTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#334155',
    marginBottom: 8,
  },
  filterChipsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  filterChip: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 9999,
    backgroundColor: '#F1F5F9',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  activeFilterChip: {
    backgroundColor: '#EFF6FF',
    borderColor: '#BFDBFE',
  },
  filterChipText: {
    fontSize: 14,
    color: '#334155',
  },
  activeFilterChipText: {
    color: '#1D4ED8',
    fontWeight: '500',
  },
  list: {
    padding: 16,
  },
  emptyList: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  fab: {
    position: 'absolute',
    right: 24,
    bottom: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#2563EB',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});