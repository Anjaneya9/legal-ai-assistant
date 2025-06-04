import { Document, User, Conversation } from '@/types';

export const mockDocuments: Document[] = [
  {
    id: '1',
    title: 'Apartment Lease Agreement',
    type: 'Contract',
    date: '2023-11-15',
    analyzed: true,
    pages: 12,
    size: '2.4 MB'
  },
  {
    id: '2',
    title: 'Employment Agreement',
    type: 'Contract',
    date: '2023-10-22',
    analyzed: true,
    pages: 8,
    size: '1.7 MB'
  },
  {
    id: '3',
    title: 'Last Will and Testament',
    type: 'Legal Form',
    date: '2023-09-05',
    analyzed: false,
    pages: 6,
    size: '1.2 MB'
  },
  {
    id: '4',
    title: 'Non-Disclosure Agreement',
    type: 'Agreement',
    date: '2023-08-30',
    analyzed: true,
    pages: 4,
    size: '0.8 MB'
  },
  {
    id: '5',
    title: 'Business Partnership Agreement',
    type: 'Contract',
    date: '2023-07-14',
    analyzed: false,
    pages: 15,
    size: '3.2 MB'
  }
];

export const mockUser: User = {
  id: '1',
  name: 'Sarah Johnson',
  email: 'sarah.johnson@example.com',
  profileImage: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg',
  plan: 'free',
  docsRemaining: 3,
  createdAt: '2023-06-15'
};

export const mockConversations: Conversation[] = [
  {
    id: '1',
    title: 'Tenant Rights Question',
    createdAt: '2023-11-20T14:30:00Z',
    updatedAt: '2023-11-20T15:05:00Z',
    messages: [
      {
        id: '101',
        content: 'What are my rights as a tenant if my landlord hasn\'t fixed a major plumbing issue for weeks?',
        sender: 'user',
        timestamp: '2023-11-20T14:30:00Z',
        read: true
      },
      {
        id: '102',
        content: 'As a tenant, you generally have the right to habitable living conditions. For a major plumbing issue that affects habitability, you typically have several options:\n\n1. Send a formal written notice to your landlord\n2. Withhold rent in some jurisdictions (but follow specific legal procedures)\n3. Repair and deduct the cost from rent (subject to limitations)\n4. Break the lease without penalty if the issue makes the unit uninhabitable\n\nThe specific remedies available depend on your location. Would you like me to provide more specific information based on your jurisdiction?',
        sender: 'assistant',
        timestamp: '2023-11-20T14:35:00Z',
        read: true
      }
    ]
  },
  {
    id: '2',
    title: 'LLC Formation',
    createdAt: '2023-11-18T09:15:00Z',
    updatedAt: '2023-11-18T10:00:00Z',
    messages: [
      {
        id: '201',
        content: 'I want to start a small business. How do I form an LLC?',
        sender: 'user',
        timestamp: '2023-11-18T09:15:00Z',
        read: true
      },
      {
        id: '202',
        content: 'Forming an LLC involves several steps:\n\n1. Choose a business name (must be unique in your state)\n2. File Articles of Organization with your state\'s business filing office\n3. Pay the filing fee (typically $50-$500 depending on state)\n4. Create an operating agreement (not required in all states but highly recommended)\n5. Obtain any necessary business licenses and permits\n6. Get an EIN (Employer Identification Number) from the IRS\n\nWould you like more details about any specific step?',
        sender: 'assistant',
        timestamp: '2023-11-18T09:20:00Z',
        read: true
      }
    ]
  }
];