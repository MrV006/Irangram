

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';
import ProfilePane from './components/ProfilePane';
import SettingsModal from './components/SettingsModal';
import { Contact, ChatSession, Message, Theme } from './types';
import { getGeminiResponse } from './services/geminiService';
import { subscribeToGlobalChat, sendGlobalMessage, subscribeToSystemInfo, checkAndTriggerCleanup } from './services/firebaseService';
import { RefreshCw, Download } from 'lucide-react';
import { CONFIG } from './config';

// Initialize a unique ID for this user session if not exists
const getMyUserId = () => {
    let id = localStorage.getItem('gemigram_user_id');
    if (!id) {
        id = 'user_' + Math.random().toString(36).substr(2, 9);
        localStorage.setItem('gemigram_user_id', id);
    }
    return id;
};

const MY_USER_ID = getMyUserId();

// Mock Data Initialization
const INITIAL_CONTACTS: Contact[] = [
  {
    id: 'global_chat',
    name: 'چت عمومی جهانی 🌍',
    avatar: 'https://cdn-icons-png.flaticon.com/512/921/921490.png',
    status: 'online',
    systemInstruction: '',
    bio: 'گفتگو با تمام کاربران آنلاین در سراسر جهان (متصل به سرور واقعی)',
    username: '@global_world',
    phone: '',
    type: 'group',
    isGlobal: true
  },
  {
    id: 'saved',
    name: 'پیام‌های ذخیره شده',
    avatar: '',
    status: 'online',
    systemInstruction: 'You are a helpful assistant note keeper.',
    bio: 'فضای شخصی شما برای ذخیره پیام‌ها و فایل‌ها',
    username: '@saved_messages',
    phone: '',
    type: 'user'
  },
  {
    id: '1',
    name: 'دستیار هوشمند',
    avatar: 'https://picsum.photos/200/200?random=1',
    status: 'online',
    systemInstruction: 'You are a helpful, intelligent, and polite Persian AI assistant. You answer in Persian language primarily.',
    bio: 'همیشه آنلاین و آماده کمک',
    username: '@ai_helper',
    phone: '+98 900 000 0001',
    type: 'user'
  },
  {
    id: '2',
    name: 'استاد برنامه نویسی',
    avatar: 'https://picsum.photos/200/200?random=2',
    status: 'offline',
    lastSeen: '۵ دقیقه پیش',
    systemInstruction: 'You are a senior senior software engineer and coding expert. You help with code, debugging, and architecture. You speak Persian.',
    bio: 'عاشق کدنویسی و قهوه',
    username: '@code_master',
    phone: '+98 900 000 0002',
    type: 'user'
  },
  {
    id: '3',
    name: 'گروه توسعه‌دهندگان',
    avatar: 'https://picsum.photos/200/200?random=30',
    status: 'online',
    lastSeen: '',
    systemInstruction: 'You are a group moderator.',
    bio: 'بحث و تبادل نظر درباره تکنولوژی',
    username: '@dev_group',
    phone: '',
    type: 'group'
  },
  {
    id: '4',
    name: 'مشاور خلاقیت',
    avatar: 'https://picsum.photos/200/200?random=4',
    status: 'online',
    systemInstruction: 'You are a creative director. You give ideas for art, design, and marketing. You are very energetic and speak Persian.',
    bio: 'خلاقیت مرز ندارد',
    username: '@creative_mind',
    phone: '+98 900 000 0004',
    type: 'user'
  }
];

const INITIAL_SESSIONS: Record<string, ChatSession> = {};
INITIAL_CONTACTS.forEach(c => {
  INITIAL_SESSIONS[c.id] = {
    contactId: c.id,
    messages: c.id === 'saved' ? [] : (c.id === 'global_chat' ? [] : [
        {
            id: `init-${c.id}`,
            text: c.id === '1' ? 'سلام! چطور میتونم کمکت کنم؟' : 'سلام، خوشحال میشم صحبت کنیم.',
            senderId: c.id,
            timestamp: Date.now() - 1000000,
            status: 'read',
            type: 'text'
        }
    ]),
    unreadCount: 0,
    draft: ''
  };
});

const DEFAULT_PROFILE = {
    name: 'کاربر گمی‌گرام',
    bio: 'زندگی زیباست',
    username: '@gemigram_user',
    phone: '+98 900 123 4567'
};

const App: React.FC = () => {
  // Load initial state from LocalStorage if available
  const [contacts, setContacts] = useState<Contact[]>(INITIAL_CONTACTS);
  
  const [sessions, setSessions] = useState<Record<string, ChatSession>>(() => {
    const saved = localStorage.getItem('gemigram_sessions');
    // Ensure global_chat exists in saved sessions
    let parsedSessions = saved ? JSON.parse(saved) : INITIAL_SESSIONS;
    if (!parsedSessions['global_chat']) {
        parsedSessions['global_chat'] = INITIAL_SESSIONS['global_chat'];
    }
    return parsedSessions;
  });

  const [userProfile, setUserProfile] = useState(() => {
    const saved = localStorage.getItem('gemigram_profile');
    return saved ? JSON.parse(saved) : DEFAULT_PROFILE;
  });
  
  const [wallpaper, setWallpaper] = useState<string>(() => {
      return localStorage.getItem('gemigram_wallpaper') || 'default';
  });

  const [activeContactId, setActiveContactId] = useState<string | null>(null);
  const [theme, setTheme] = useState<Theme>(() => {
     return (localStorage.getItem('gemigram_theme') as Theme) || Theme.LIGHT;
  });
  
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showProfile, setShowProfile] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [updateAvailable, setUpdateAvailable] = useState(false);
  
  // Realtime subscription ref
  const unsubscribeGlobalRef = useRef<(() => void) | null>(null);

  // Persistence Effects
  useEffect(() => {
    localStorage.setItem('gemigram_sessions', JSON.stringify(sessions));
  }, [sessions]);

  useEffect(() => {
    localStorage.setItem('gemigram_profile', JSON.stringify(userProfile));
  }, [userProfile]);

  useEffect(() => {
    localStorage.setItem('gemigram_theme', theme);
  }, [theme]);

  useEffect(() => {
      localStorage.setItem('gemigram_wallpaper', wallpaper);
  }, [wallpaper]);

  // Handle Resize for Responsiveness
  useEffect(() => {
    const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
        if (window.innerWidth < 1024) setShowProfile(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle Theme
  useEffect(() => {
    if (theme === Theme.DARK) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // System Update & Cleanup Logic
  useEffect(() => {
      // 1. Subscribe to version updates
      const unsubscribeSystem = subscribeToSystemInfo((info) => {
          if (info.currentVersion !== CONFIG.VERSION) {
              // String comparison for version (assuming standard semantic versioning)
              if (info.currentVersion > CONFIG.VERSION) {
                  setUpdateAvailable(true);
              }
          }
      });

      // 2. Trigger automated cleanup logic (Client-side trigger for Serverless architecture)
      checkAndTriggerCleanup();

      return () => {
          unsubscribeSystem();
      };
  }, []);

  // Handle Global Chat Subscription
  useEffect(() => {
      // Subscribe to global chat messages when app starts
      // In a real app, maybe only subscribe when active or notification enabled
      // Here we subscribe always to show unread badges
      
      const handleNewGlobalMessages = (messages: Message[]) => {
          // Map Firebase messages to our local format
          // Check if message is mine to set 'me' sender
          const mappedMessages = messages.map(m => ({
              ...m,
              senderId: m.senderId === MY_USER_ID ? 'me' : m.senderId,
              // If it's not me, append name to text or handle UI to show sender name (simplified here)
              text: (m.senderId !== MY_USER_ID && m.senderName) 
                 ? `${m.text}` 
                 : m.text
          }));

          setSessions(prev => {
              const currentMessages = prev['global_chat']?.messages || [];
              const lastMsgId = currentMessages.length > 0 ? currentMessages[currentMessages.length - 1].id : null;
              const newLastMsgId = mappedMessages.length > 0 ? mappedMessages[mappedMessages.length - 1].id : null;
              
              let newUnread = prev['global_chat']?.unreadCount || 0;
              
              // Simple unread logic: if we are not in global chat and new message comes
              if (activeContactId !== 'global_chat' && lastMsgId !== newLastMsgId && mappedMessages.length > 0) {
                  const lastMsg = mappedMessages[mappedMessages.length - 1];
                  if (lastMsg.senderId !== 'me') {
                      newUnread += 1;
                  }
              }

              return {
                  ...prev,
                  ['global_chat']: {
                      contactId: 'global_chat',
                      messages: mappedMessages,
                      unreadCount: activeContactId === 'global_chat' ? 0 : newUnread,
                      draft: prev['global_chat']?.draft || ''
                  }
              };
          });
      };

      unsubscribeGlobalRef.current = subscribeToGlobalChat(handleNewGlobalMessages);

      return () => {
          if (unsubscribeGlobalRef.current) unsubscribeGlobalRef.current();
      };
  }, [activeContactId]);

  const toggleTheme = () => {
    setTheme(prev => prev === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };

  const handleSelectContact = (id: string) => {
    setActiveContactId(id);
    setShowProfile(false); // Close profile on chat switch
    // Mark as read
    setSessions(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        unreadCount: 0
      }
    }));
  };

  const handleDeleteMessage = (messageId: string) => {
      if (!activeContactId) return;
      
      // Local delete only for now, real server delete requires more complex logic
      setSessions(prev => ({
          ...prev,
          [activeContactId]: {
              ...prev[activeContactId],
              messages: prev[activeContactId].messages.filter(m => m.id !== messageId)
          }
      }));
  };

  const handleEditMessage = (messageId: string, newText: string) => {
    if (!activeContactId) return;
    setSessions(prev => ({
        ...prev,
        [activeContactId]: {
            ...prev[activeContactId],
            messages: prev[activeContactId].messages.map(m => 
                m.id === messageId ? { ...m, text: newText, edited: true } : m
            )
        }
    }));
  };

  const handleSendMessage = useCallback(async (content: { text?: string; imageUrl?: string; type: 'text' | 'image' | 'audio'; audioDuration?: string; isSticker?: boolean }, replyToId?: string) => {
    if (!activeContactId) return;

    // Common Message Object
    const newMessageObj = {
      text: content.text,
      senderId: MY_USER_ID,
      type: content.type,
      imageUrl: content.imageUrl,
      audioDuration: content.audioDuration,
      isSticker: content.isSticker,
      replyToId: replyToId
    };

    // If Global Chat -> Send to Firebase
    if (activeContactId === 'global_chat') {
        // Optimistic update handled by the listener, but we can do it here too if latency is high
        // For simplicity, rely on listener
        await sendGlobalMessage(newMessageObj, { name: userProfile.name, avatar: '' }); // Avatar not uploaded to firebase storage in this demo
        return;
    }

    // --- Standard Local/Gemini Logic Below ---

    const newMessage: Message = {
        id: Date.now().toString(),
        text: content.text || (content.isSticker ? 'Sticker' : (content.type === 'image' ? 'عکس' : 'پیام صوتی')),
        senderId: 'me',
        timestamp: Date.now(),
        status: 'sending',
        type: content.type,
        imageUrl: content.imageUrl,
        audioDuration: content.audioDuration,
        isSticker: content.isSticker,
        replyToId: replyToId
    };

    // Optimistic Update
    setSessions(prev => ({
      ...prev,
      [activeContactId]: {
        ...prev[activeContactId],
        messages: [...prev[activeContactId].messages, newMessage]
      }
    }));

    // Simulate Network Delay for "sent" status
    setTimeout(() => {
        setSessions(prev => {
            const msgs = [...prev[activeContactId].messages];
            const idx = msgs.findIndex(m => m.id === newMessage.id);
            if(idx !== -1) msgs[idx].status = 'sent';
            return {
                ...prev,
                [activeContactId]: { ...prev[activeContactId], messages: msgs }
            };
        });
    }, 500);

    // If "Saved Messages", don't trigger AI
    if (activeContactId === 'saved') {
        setTimeout(() => {
            setSessions(prev => {
                const msgs = [...prev[activeContactId].messages];
                const idx = msgs.findIndex(m => m.id === newMessage.id);
                if(idx !== -1) msgs[idx].status = 'read';
                return {
                    ...prev,
                    [activeContactId]: { ...prev[activeContactId], messages: msgs }
                };
            });
        }, 1000);
        return;
    }

    // Only trigger AI for text messages for now (and not stickers)
    if (content.type === 'text' && content.text && !content.isSticker) {
        // Set contact to typing
        setContacts(prev => prev.map(c => c.id === activeContactId ? { ...c, status: 'typing...' } : c));

        // Get Gemini Response
        const activeContact = contacts.find(c => c.id === activeContactId);
        if (activeContact) {
            const history = sessions[activeContactId].messages;
            const responseText = await getGeminiResponse(
                activeContactId, 
                content.text, 
                history, 
                activeContact.systemInstruction
            );

            const botMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: responseText,
                senderId: activeContactId,
                timestamp: Date.now(),
                status: 'read',
                type: 'text',
                replyToId: replyToId 
            };

            setSessions(prev => ({
                ...prev,
                [activeContactId]: {
                ...prev[activeContactId],
                messages: [...prev[activeContactId].messages, botMessage]
                }
            }));

            // Set back to online
            setContacts(prev => prev.map(c => c.id === activeContactId ? { ...c, status: 'online' } : c));
        }
    }
  }, [activeContactId, contacts, sessions, userProfile]);

  return (
    <div className="flex flex-col h-full w-full overflow-hidden bg-white dark:bg-black font-sans relative">
      
      {/* Update Banner */}
      {updateAvailable && (
          <div className="bg-blue-600 text-white px-4 py-2 flex items-center justify-between shadow-md z-[60] animate-slide-in">
              <div className="flex items-center gap-2">
                  <RefreshCw size={18} className="animate-spin" />
                  <span className="text-sm font-medium">نسخه جدیدی از گمی‌گرام منتشر شده است!</span>
              </div>
              <button 
                onClick={() => window.location.reload()} 
                className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-bold hover:bg-blue-50 transition-colors flex items-center gap-1"
              >
                  <Download size={14} />
                  بروزرسانی
              </button>
          </div>
      )}

      <SettingsModal 
        isOpen={isSettingsOpen} 
        onClose={() => setIsSettingsOpen(false)}
        userProfile={userProfile}
        onSave={setUserProfile}
        wallpaper={wallpaper}
        onSaveWallpaper={setWallpaper}
      />

      <div className="flex-1 flex overflow-hidden">
          {/* Sidebar */}
          <div className={`
            ${isMobile ? (activeContactId ? 'hidden' : 'w-full') : 'w-80 md:w-96'} 
            h-full shrink-0 z-20 transition-all duration-300 shadow-xl
          `}>
            <Sidebar 
              contacts={contacts}
              sessions={sessions}
              activeContactId={activeContactId}
              onSelectContact={handleSelectContact}
              toggleTheme={toggleTheme}
              theme={theme}
              userProfile={userProfile}
              onOpenSettings={() => setIsSettingsOpen(true)}
            />
          </div>

          {/* Main Chat Area */}
          <div className={`
            flex-1 h-full relative z-10 flex
            ${isMobile && !activeContactId ? 'hidden' : 'block'}
          `}>
            <div className="flex-1 h-full relative flex flex-col min-w-0">
                {activeContactId ? (
                <ChatWindow 
                    contact={contacts.find(c => c.id === activeContactId)!}
                    messages={sessions[activeContactId].messages}
                    onSendMessage={handleSendMessage}
                    onEditMessage={handleEditMessage}
                    onDeleteMessage={handleDeleteMessage}
                    onBack={() => setActiveContactId(null)}
                    isMobile={isMobile}
                    onProfileClick={() => setShowProfile(true)}
                    wallpaper={wallpaper}
                />
                ) : (
                <div className="h-full w-full flex items-center justify-center bg-telegram-bg dark:bg-telegram-bgDark text-gray-400 dark:text-gray-600 pattern-bg">
                    <div className="text-center p-8 bg-white/50 dark:bg-black/50 backdrop-blur-sm rounded-2xl shadow-sm">
                        <div className="w-24 h-24 bg-telegram-secondary dark:bg-telegram-secondaryDark rounded-full mx-auto mb-4 flex items-center justify-center">
                            <span className="text-4xl">👋</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">به گمی‌گرام خوش آمدید</h3>
                        <p className="text-sm">
                            یک گفتگو را برای شروع انتخاب کنید
                        </p>
                    </div>
                </div>
                )}
            </div>

            {/* Profile Side Pane (Desktop) or Overlay (Mobile) */}
            {activeContactId && showProfile && (
                <div className={`
                    ${isMobile ? 'absolute inset-0 z-50' : 'w-80 shrink-0 border-r border-telegram-border dark:border-telegram-borderDark'}
                    h-full bg-white dark:bg-telegram-secondaryDark transition-all duration-300
                `}>
                    <ProfilePane 
                        contact={contacts.find(c => c.id === activeContactId)!}
                        onClose={() => setShowProfile(false)}
                    />
                </div>
            )}
          </div>
      </div>
    </div>
  );
};

export default App;