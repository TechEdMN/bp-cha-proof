'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  MessageSquare,
  Users,
  Clock,
  CheckCircle,
  Home,
  Settings,
  LogOut,
  Send,
  Search,
  MoreVertical,
  Star,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';

interface Chat {
  id: string;
  userName: string;
  userEmail: string;
  status: 'waiting' | 'active' | 'closed';
  lastMessage: string;
  timestamp: Date;
  unreadCount: number;
}

interface Message {
  id: string;
  sender: 'user' | 'agent';
  content: string;
  timestamp: Date;
}

export default function AgentPanel() {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [messageInput, setMessageInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample data
  const [chats] = useState<Chat[]>([
    {
      id: '1',
      userName: 'John Doe',
      userEmail: 'john@example.com',
      status: 'active',
      lastMessage: 'I need help with my account',
      timestamp: new Date(Date.now() - 5 * 60000),
      unreadCount: 2,
    },
    {
      id: '2',
      userName: 'Jane Smith',
      userEmail: 'jane@example.com',
      status: 'waiting',
      lastMessage: 'Can you help me with billing?',
      timestamp: new Date(Date.now() - 15 * 60000),
      unreadCount: 1,
    },
    {
      id: '3',
      userName: 'Bob Johnson',
      userEmail: 'bob@example.com',
      status: 'closed',
      lastMessage: 'Thank you for your help!',
      timestamp: new Date(Date.now() - 60 * 60000),
      unreadCount: 0,
    },
  ]);

  const [messages] = useState<Record<string, Message[]>>({
    '1': [
      {
        id: '1',
        sender: 'user',
        content: 'Hi, I need help with my account',
        timestamp: new Date(Date.now() - 10 * 60000),
      },
      {
        id: '2',
        sender: 'agent',
        content: "Hi! I'd be happy to help. What seems to be the issue?",
        timestamp: new Date(Date.now() - 8 * 60000),
      },
      {
        id: '3',
        sender: 'user',
        content: 'I cannot access my dashboard',
        timestamp: new Date(Date.now() - 5 * 60000),
      },
    ],
  });

  const stats = [
    {
      label: 'Active Chats',
      value: '3',
      icon: MessageSquare,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      label: 'Waiting',
      value: '5',
      icon: Clock,
      color: 'from-yellow-500 to-orange-500',
    },
    {
      label: 'Resolved Today',
      value: '12',
      icon: CheckCircle,
      color: 'from-green-500 to-emerald-500',
    },
    {
      label: 'Avg. Response',
      value: '2.5m',
      icon: Users,
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const filteredChats = chats.filter(
    (chat) =>
      chat.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chat.userEmail.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSendMessage = () => {
    if (!messageInput.trim() || !selectedChat) return;
    console.log('Sending message:', messageInput);
    setMessageInput('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Agent Panel</h1>
              <p className="text-sm text-gray-500">Manage customer conversations</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-gray-600 hover:text-gray-800 transition">
              <Home className="w-5 h-5" />
            </Link>
            <button className="text-gray-600 hover:text-gray-800 transition">
              <Settings className="w-5 h-5" />
            </button>
            <button className="text-gray-600 hover:text-gray-800 transition">
              <LogOut className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
              <span className="text-sm font-medium text-gray-700">Agent Smith</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-800 mt-1">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 pb-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Chat List */}
          <div className="col-span-12 lg:col-span-4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-4 border-b border-gray-200">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search conversations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
              </div>
              <div className="overflow-y-auto h-[600px]">
                {filteredChats.map((chat) => (
                  <motion.div
                    key={chat.id}
                    whileHover={{ backgroundColor: '#f9fafb' }}
                    onClick={() => setSelectedChat(chat.id)}
                    className={`p-4 border-b border-gray-200 cursor-pointer transition ${
                      selectedChat === chat.id ? 'bg-blue-50' : ''
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3 flex-1">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-semibold">
                          {chat.userName.charAt(0)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold text-gray-800 truncate">{chat.userName}</h4>
                            {chat.unreadCount > 0 && (
                              <span className="ml-2 px-2 py-0.5 bg-blue-500 text-white text-xs rounded-full">
                                {chat.unreadCount}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-gray-500">{chat.userEmail}</p>
                          <p className="text-sm text-gray-600 truncate mt-1">{chat.lastMessage}</p>
                          <div className="flex items-center space-x-2 mt-2">
                            <span
                              className={`px-2 py-0.5 text-xs rounded-full ${
                                chat.status === 'active'
                                  ? 'bg-green-100 text-green-700'
                                  : chat.status === 'waiting'
                                  ? 'bg-yellow-100 text-yellow-700'
                                  : 'bg-gray-100 text-gray-700'
                              }`}
                            >
                              {chat.status}
                            </span>
                            <span className="text-xs text-gray-500">
                              {format(chat.timestamp, 'HH:mm')}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Chat Window */}
          <div className="col-span-12 lg:col-span-8">
            {selectedChat ? (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden h-[700px] flex flex-col">
                {/* Chat Header */}
                <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-semibold">
                      {chats.find((c) => c.id === selectedChat)?.userName.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {chats.find((c) => c.id === selectedChat)?.userName}
                      </h3>
                      <p className="text-xs text-gray-500">
                        {chats.find((c) => c.id === selectedChat)?.userEmail}
                      </p>
                    </div>
                  </div>
                  <button className="text-gray-600 hover:text-gray-800">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                  {(messages[selectedChat] || []).map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.sender === 'agent' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[70%] rounded-2xl px-4 py-2 ${
                          message.sender === 'agent'
                            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                            : 'bg-white border border-gray-200'
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                        <p
                          className={`text-xs mt-1 ${
                            message.sender === 'agent' ? 'text-white/70' : 'text-gray-500'
                          }`}
                        >
                          {format(message.timestamp, 'HH:mm')}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Input */}
                <div className="p-4 border-t border-gray-200">
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      value={messageInput}
                      onChange={(e) => setMessageInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      placeholder="Type a message..."
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={!messageInput.trim()}
                      className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="mt-2 flex items-center space-x-2">
                    <button className="text-xs text-gray-600 hover:text-gray-800 px-3 py-1 rounded bg-gray-100">
                      Quick Reply
                    </button>
                    <button className="text-xs text-gray-600 hover:text-gray-800 px-3 py-1 rounded bg-gray-100">
                      Transfer Chat
                    </button>
                    <button className="text-xs text-gray-600 hover:text-gray-800 px-3 py-1 rounded bg-gray-100">
                      Close Chat
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 h-[700px] flex items-center justify-center">
                <div className="text-center">
                  <MessageSquare className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">Select a conversation to start chatting</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
