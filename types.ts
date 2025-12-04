

export interface Message {
  id: string;
  text: string;
  senderId: string; // 'me' or contactId
  senderName?: string; // Added for Global Chat
  senderAvatar?: string; // Added for Global Chat
  timestamp: number;
  status: 'sending' | 'sent' | 'read';
  replyToId?: string;
  type: 'text' | 'image' | 'audio';
  imageUrl?: string;
  audioDuration?: string; // e.g., "0:14"
  edited?: boolean;
  isSticker?: boolean;
}

export interface Contact {
  id: string;
  name: string;
  avatar: string;
  status: 'online' | 'offline' | 'typing...';
  lastSeen?: string;
  systemInstruction: string; // For Gemini Persona
  bio: string;
  username: string;
  phone: string;
  type: 'user' | 'group' | 'channel';
  isGlobal?: boolean; // New flag for real server connection
}

export interface ChatSession {
  contactId: string;
  messages: Message[];
  unreadCount: number;
  draft: string;
}

export interface SystemInfo {
  currentVersion: string;
  lastCleanup: number;
}

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface ChatWindowProps {
  contact: Contact;
  messages: Message[];
  onSendMessage: (content: { text?: string; imageUrl?: string; type: 'text' | 'image' | 'audio'; audioDuration?: string; isSticker?: boolean }, replyToId?: string) => void;
  onEditMessage: (messageId: string, newText: string) => void;
  onDeleteMessage: (messageId: string) => void;
  onBack: () => void;
  isMobile: boolean;
  onProfileClick: () => void;
  wallpaper: string;
}