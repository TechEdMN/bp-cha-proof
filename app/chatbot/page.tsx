'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Home, Bot, Plus, Save, Play, MessageSquare, HelpCircle, Zap, GitBranch } from 'lucide-react';
import { motion } from 'framer-motion';

interface ChatbotNode {
  id: string;
  type: 'message' | 'question' | 'action';
  content: string;
  options?: string[];
  x: number;
  y: number;
}

export default function ChatbotBuilder() {
  const [nodes, setNodes] = useState<ChatbotNode[]>([
    {
      id: '1',
      type: 'message',
      content: 'Welcome to our support! How can I help you today?',
      options: ['Billing Question', 'Technical Issue', 'General Inquiry'],
      x: 100,
      y: 100,
    },
  ]);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [flowName, setFlowName] = useState('Customer Support Flow');

  const addNode = (type: ChatbotNode['type']) => {
    const newNode: ChatbotNode = {
      id: Date.now().toString(),
      type,
      content: type === 'message' ? 'New message' : 'Ask a question',
      options: type === 'question' ? ['Option 1', 'Option 2'] : undefined,
      x: 300,
      y: 200,
    };
    setNodes([...nodes, newNode]);
  };

  const nodeTypes = [
    {
      type: 'message' as const,
      icon: MessageSquare,
      label: 'Message',
      color: 'from-blue-500 to-cyan-500',
      description: 'Send a message',
    },
    {
      type: 'question' as const,
      icon: HelpCircle,
      label: 'Question',
      color: 'from-purple-500 to-pink-500',
      description: 'Ask for input',
    },
    {
      type: 'action' as const,
      icon: Zap,
      label: 'Action',
      color: 'from-orange-500 to-red-500',
      description: 'Trigger action',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <input
                type="text"
                value={flowName}
                onChange={(e) => setFlowName(e.target.value)}
                className="text-xl font-bold text-gray-800 bg-transparent border-none outline-none focus:ring-2 focus:ring-blue-500 rounded px-2"
              />
              <p className="text-sm text-gray-500">Visual chatbot flow builder</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Link
              href="/"
              className="px-4 py-2 text-gray-600 hover:text-gray-800 transition flex items-center space-x-2"
            >
              <Home className="w-5 h-5" />
              <span>Home</span>
            </Link>
            <button className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:shadow-lg transition flex items-center space-x-2">
              <Play className="w-5 h-5" />
              <span>Test Flow</span>
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition flex items-center space-x-2">
              <Save className="w-5 h-5" />
              <span>Save</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex h-[calc(100vh-73px)]">
        {/* Sidebar - Node Types */}
        <div className="w-80 bg-white border-r border-gray-200 p-6 overflow-y-auto">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Node Types</h3>
          <div className="space-y-3">
            {nodeTypes.map((nodeType) => (
              <motion.button
                key={nodeType.type}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => addNode(nodeType.type)}
                className="w-full p-4 bg-gradient-to-r hover:shadow-lg transition rounded-xl text-left"
                style={{
                  background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                }}
              >
                <div className={`w-full bg-gradient-to-r ${nodeType.color} p-4 rounded-xl text-white`}>
                  <div className="flex items-center space-x-3 mb-2">
                    <nodeType.icon className="w-6 h-6" />
                    <span className="font-semibold">{nodeType.label}</span>
                  </div>
                  <p className="text-sm text-white/80">{nodeType.description}</p>
                </div>
              </motion.button>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Flow Statistics</h3>
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">Total Nodes</p>
                <p className="text-2xl font-bold text-gray-800">{nodes.length}</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">Connections</p>
                <p className="text-2xl font-bold text-gray-800">
                  {nodes.reduce((acc, node) => acc + (node.options?.length || 0), 0)}
                </p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">Status</p>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-green-700">Active</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">Quick Tips</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Drag nodes to reposition</li>
              <li>• Click to select and edit</li>
              <li>• Connect nodes with arrows</li>
              <li>• Test your flow before deploying</li>
            </ul>
          </div>
        </div>

        {/* Canvas */}
        <div className="flex-1 bg-gray-100 relative overflow-auto">
          {/* Grid pattern */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, #e5e7eb 1px, transparent 1px),
                linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px',
            }}
          />

          {/* Nodes */}
          <div className="relative p-8">
            {nodes.map((node, index) => (
              <motion.div
                key={node.id}
                drag
                dragMomentum={false}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedNode(node.id)}
                className={`absolute w-72 bg-white rounded-xl shadow-lg border-2 cursor-move ${
                  selectedNode === node.id ? 'border-blue-500' : 'border-gray-200'
                }`}
                style={{ left: node.x, top: node.y }}
              >
                <div className="p-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        node.type === 'message'
                          ? 'bg-gradient-to-r from-blue-500 to-cyan-500'
                          : node.type === 'question'
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                          : 'bg-gradient-to-r from-orange-500 to-red-500'
                      }`}
                    >
                      {node.type === 'message' ? (
                        <MessageSquare className="w-4 h-4 text-white" />
                      ) : node.type === 'question' ? (
                        <HelpCircle className="w-4 h-4 text-white" />
                      ) : (
                        <Zap className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <span className="text-xs font-semibold text-gray-500 uppercase">
                      {node.type}
                    </span>
                  </div>

                  <textarea
                    value={node.content}
                    onChange={(e) => {
                      const updated = nodes.map((n) =>
                        n.id === node.id ? { ...n, content: e.target.value } : n
                      );
                      setNodes(updated);
                    }}
                    className="w-full p-2 text-sm border border-gray-200 rounded-lg mb-3 resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    rows={3}
                  />

                  {node.options && (
                    <div className="space-y-2">
                      {node.options.map((option, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <GitBranch className="w-4 h-4 text-gray-400" />
                          <input
                            type="text"
                            value={option}
                            onChange={(e) => {
                              const updated = nodes.map((n) =>
                                n.id === node.id
                                  ? {
                                      ...n,
                                      options: n.options?.map((o, i) =>
                                        i === idx ? e.target.value : o
                                      ),
                                    }
                                  : n
                              );
                              setNodes(updated);
                            }}
                            className="flex-1 text-xs px-2 py-1 border border-gray-200 rounded"
                          />
                        </div>
                      ))}
                      <button
                        onClick={() => {
                          const updated = nodes.map((n) =>
                            n.id === node.id
                              ? { ...n, options: [...(n.options || []), 'New option'] }
                              : n
                          );
                          setNodes(updated);
                        }}
                        className="text-xs text-blue-600 hover:text-blue-700 flex items-center space-x-1"
                      >
                        <Plus className="w-3 h-3" />
                        <span>Add option</span>
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}

            {nodes.length === 0 && (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <Bot className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">Add nodes from the sidebar to build your chatbot flow</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Properties Panel */}
        {selectedNode && (
          <motion.div
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            className="w-80 bg-white border-l border-gray-200 p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-800">Node Properties</h3>
              <button
                onClick={() => {
                  setNodes(nodes.filter((n) => n.id !== selectedNode));
                  setSelectedNode(null);
                }}
                className="text-red-500 hover:text-red-700 text-sm"
              >
                Delete
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Node Type</label>
                <p className="text-gray-600 capitalize">
                  {nodes.find((n) => n.id === selectedNode)?.type}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Node ID</label>
                <p className="text-gray-600 font-mono text-xs">{selectedNode}</p>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-2">Actions</h4>
                <div className="space-y-2">
                  <button className="w-full px-3 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition">
                    Duplicate Node
                  </button>
                  <button className="w-full px-3 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition">
                    Add Connection
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
