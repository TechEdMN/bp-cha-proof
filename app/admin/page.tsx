'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Home,
  Settings,
  Users,
  MessageSquare,
  Globe,
  Bell,
  Shield,
  Sparkles,
  Plus,
  Edit,
  Trash2,
} from 'lucide-react';
import { motion } from 'framer-motion';

interface CannedResponse {
  id: string;
  title: string;
  content: string;
  shortcut: string;
  category: string;
}

export default function AdminSettings() {
  const [activeTab, setActiveTab] = useState('canned');
  const [cannedResponses, setCannedResponses] = useState<CannedResponse[]>([
    {
      id: '1',
      title: 'Welcome Message',
      content: 'Hello! Thank you for contacting us. How can I help you today?',
      shortcut: '/welcome',
      category: 'greetings',
    },
    {
      id: '2',
      title: 'Check Status',
      content:
        'Let me check on that for you. Please give me a moment to look up your information.',
      shortcut: '/check',
      category: 'common',
    },
    {
      id: '3',
      title: 'Technical Support',
      content:
        "I understand you're experiencing a technical issue. Let me connect you with our technical support team.",
      shortcut: '/tech',
      category: 'support',
    },
  ]);

  const tabs = [
    { id: 'canned', label: 'Canned Responses', icon: MessageSquare },
    { id: 'agents', label: 'Team Management', icon: Users },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'languages', label: 'Languages', icon: Globe },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'integrations', label: 'Integrations', icon: Sparkles },
  ];

  const agents = [
    { id: '1', name: 'Sarah Johnson', email: 'sarah@example.com', role: 'Admin', status: 'online' },
    { id: '2', name: 'Mike Chen', email: 'mike@example.com', role: 'Agent', status: 'online' },
    { id: '3', name: 'Emily Davis', email: 'emily@example.com', role: 'Agent', status: 'away' },
    { id: '4', name: 'James Wilson', email: 'james@example.com', role: 'Agent', status: 'offline' },
  ];

  const languages = [
    { code: 'en', name: 'English', enabled: true },
    { code: 'es', name: 'Spanish', enabled: true },
    { code: 'fr', name: 'French', enabled: false },
    { code: 'de', name: 'German', enabled: false },
    { code: 'ja', name: 'Japanese', enabled: false },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-lg flex items-center justify-center">
              <Settings className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Admin Settings</h1>
              <p className="text-sm text-gray-500">Configure your chat system</p>
            </div>
          </div>
          <Link
            href="/"
            className="px-4 py-2 text-gray-600 hover:text-gray-800 transition flex items-center space-x-2"
          >
            <Home className="w-5 h-5" />
            <span>Home</span>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 sticky top-6">
              <div className="space-y-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <tab.icon className="w-5 h-5" />
                    <span className="font-medium">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Canned Responses */}
            {activeTab === 'canned' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl shadow-lg border border-gray-200 p-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">Canned Responses</h2>
                    <p className="text-gray-600 mt-1">Quick replies for common questions</p>
                  </div>
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition flex items-center space-x-2">
                    <Plus className="w-5 h-5" />
                    <span>Add Response</span>
                  </button>
                </div>

                <div className="space-y-4">
                  {cannedResponses.map((response, index) => (
                    <motion.div
                      key={response.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="font-semibold text-gray-800">{response.title}</h3>
                            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                              {response.shortcut}
                            </span>
                            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                              {response.category}
                            </span>
                          </div>
                          <p className="text-gray-600 text-sm">{response.content}</p>
                        </div>
                        <div className="flex items-center space-x-2 ml-4">
                          <button className="p-2 text-blue-600 hover:bg-blue-50 rounded transition">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-red-600 hover:bg-red-50 rounded transition">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Team Management */}
            {activeTab === 'agents' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl shadow-lg border border-gray-200 p-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">Team Management</h2>
                    <p className="text-gray-600 mt-1">Manage your support team</p>
                  </div>
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition flex items-center space-x-2">
                    <Plus className="w-5 h-5" />
                    <span>Add Agent</span>
                  </button>
                </div>

                <div className="space-y-4">
                  {agents.map((agent, index) => (
                    <motion.div
                      key={agent.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                            {agent.name.charAt(0)}
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-800">{agent.name}</h3>
                            <p className="text-sm text-gray-600">{agent.email}</p>
                            <div className="flex items-center space-x-2 mt-1">
                              <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs rounded">
                                {agent.role}
                              </span>
                              <div className="flex items-center space-x-1">
                                <div
                                  className={`w-2 h-2 rounded-full ${
                                    agent.status === 'online'
                                      ? 'bg-green-500'
                                      : agent.status === 'away'
                                      ? 'bg-yellow-500'
                                      : 'bg-gray-400'
                                  }`}
                                />
                                <span className="text-xs text-gray-600 capitalize">
                                  {agent.status}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button className="p-2 text-blue-600 hover:bg-blue-50 rounded transition">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-red-600 hover:bg-red-50 rounded transition">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Notifications */}
            {activeTab === 'notifications' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl shadow-lg border border-gray-200 p-6"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Notification Settings</h2>
                <div className="space-y-4">
                  {[
                    { label: 'New chat notifications', description: 'Get notified when a new chat starts' },
                    { label: 'Email notifications', description: 'Receive email alerts for important events' },
                    { label: 'Desktop notifications', description: 'Show browser notifications' },
                    { label: 'Sound alerts', description: 'Play sound when new messages arrive' },
                  ].map((setting, index) => (
                    <motion.div
                      key={setting.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                    >
                      <div>
                        <p className="font-medium text-gray-800">{setting.label}</p>
                        <p className="text-sm text-gray-600">{setting.description}</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Languages */}
            {activeTab === 'languages' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl shadow-lg border border-gray-200 p-6"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Multi-Language Support</h2>
                <div className="space-y-4">
                  {languages.map((language, index) => (
                    <motion.div
                      key={language.code}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        <Globe className="w-5 h-5 text-gray-400" />
                        <div>
                          <p className="font-medium text-gray-800">{language.name}</p>
                          <p className="text-sm text-gray-600">{language.code.toUpperCase()}</p>
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          defaultChecked={language.enabled}
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Security */}
            {activeTab === 'security' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl shadow-lg border border-gray-200 p-6"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Security Settings</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">Data Storage</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      All chat data is stored locally in JSON files. No external database is used.
                    </p>
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-800 font-medium">✓ JSON-based storage active</p>
                      <p className="text-green-700 text-sm mt-1">
                        Data is stored in /data directory
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">Access Control</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                        <span className="text-gray-700">Two-factor authentication</span>
                        <span className="text-green-600 font-medium">Enabled</span>
                      </div>
                      <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                        <span className="text-gray-700">IP whitelisting</span>
                        <span className="text-gray-600 font-medium">Disabled</span>
                      </div>
                      <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                        <span className="text-gray-700">Session timeout</span>
                        <span className="text-blue-600 font-medium">30 minutes</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Integrations */}
            {activeTab === 'integrations' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl shadow-lg border border-gray-200 p-6"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Integrations</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { name: 'Slack', description: 'Get chat notifications in Slack', color: 'from-purple-500 to-purple-600' },
                    { name: 'Email', description: 'Forward chats to email', color: 'from-red-500 to-red-600' },
                    { name: 'Webhook', description: 'Send events to custom endpoint', color: 'from-blue-500 to-blue-600' },
                    { name: 'API', description: 'Access via REST API', color: 'from-green-500 to-green-600' },
                  ].map((integration, index) => (
                    <motion.div
                      key={integration.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${integration.color} rounded-lg flex items-center justify-center mb-3`}>
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-gray-800">{integration.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">{integration.description}</p>
                      <button className="mt-3 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition text-sm font-medium">
                        Configure
                      </button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
