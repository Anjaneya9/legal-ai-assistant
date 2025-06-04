# Legal AI Assistant

A React Native mobile application that bridges the gap between complex legal AI systems and real people making decisions. This app provides an intuitive interface for users to interact with legal AI, analyze documents, and access legal knowledge.

## Technologies Used

- **React Native + Expo**: Core framework for cross-platform mobile development
- **Expo Router**: For navigation and routing
- **TypeScript**: For type safety and better developer experience
- **React Native StyleSheet**: For styling components
- **Lucide Icons**: For consistent and beautiful iconography

## Design Rationale

This application follows a human-first design approach, focused on making complex legal concepts accessible to everyone. The design emphasizes:

1. **Clarity and Simplicity**: Legal concepts are presented in plain language with a clean interface
2. **Progressive Disclosure**: Complex information is revealed gradually to avoid overwhelming users
3. **Contextual Assistance**: The AI assistant provides relevant guidance based on user needs
4. **Aesthetic Minimalism**: A clean design that focuses on content and functionality

## Nielsen's Heuristics Implementation

1. **Visibility of system status**

   - Loading indicators when the AI is processing
   - Clear feedback on document upload and analysis status
   - Visual indicators for chat message status (sent, received)

2. **Match between system and real world**

   - Legal terms explained in plain language
   - Familiar chat interface similar to messaging apps
   - Document representations that match real-world counterparts

3. **User control and freedom**

   - Easy navigation with bottom tabs
   - Ability to cancel operations
   - Clear paths to return to previous screens

4. **Consistency and standards**

   - Consistent UI patterns throughout the app
   - Standard mobile interaction patterns
   - Uniform color scheme and typography

5. **Error prevention**

   - Confirmations for critical actions
   - Input validation
   - Clear instructions and placeholder text

6. **Recognition rather than recall**

   - Suggested questions in the chat interface
   - Labeled icons and buttons
   - Visual categorization of documents

7. **Flexibility and efficiency of use**

   - Quick action buttons for common tasks
   - Filters for document management
   - Shortcut suggestions

8. **Aesthetic and minimalist design**

   - Clean, uncluttered interface
   - Focused content areas
   - Thoughtful use of white space

9. **Help users recognize, diagnose, and recover from errors**

   - Clear error messages
   - Suggestions for resolving issues
   - Graceful error handling

10. **Help and documentation**
    - Contextual help throughout the app
    - Accessible help center
    - Tooltips for complex features

## How to Run the App Locally

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. Open the app in your browser or on a device using Expo Go by scanning the QR CODE

## Building for iOS

To build the app for iOS:

```
eas build --platform ios
```

This will create a build that can be submitted to the App Store or installed directly on devices.

### 🔧 iOS Development Build (Staged Branch)

An iOS development build was created from the `staged` branch. You can use the link below to verify and test the build:

🔗 [Verify iOS Build](https://expo.dev/accounts/vmanjaneya/projects/legal-ai-assistant/builds/023ec802-a963-4b4a-b6af-3146d8d901d7)

#### 🧪 Test Account Credentials

👤 Username: vmanjaneya
🔑 Password: Anil@123

This account is provided for demo and testing purposes only.
