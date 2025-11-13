'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Home,
  BarChart3,
  TrendingUp,
  TrendingDown,
  MessageSquare,
  Users,
  Clock,
  Star,
  Calendar,
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Analytics() {
  const [timeRange, setTimeRange] = useState('7d');

  const stats = [
    {
      label: 'Total Chats',
      value: '2,543',
      change: '+12.5%',
      trend: 'up',
      icon: MessageSquare,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      label: 'Active Users',
      value: '892',
      change: '+8.3%',
      trend: 'up',
      icon: Users,
      color: 'from-purple-500 to-pink-500',
    },
    {
      label: 'Avg. Response Time',
      value: '2.3m',
      change: '-15.2%',
      trend: 'down',
      icon: Clock,
      color: 'from-green-500 to-emerald-500',
    },
    {
      label: 'Satisfaction Rate',
      value: '4.8',
      change: '+0.3',
      trend: 'up',
      icon: Star,
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  const chartData = [
    { day: 'Mon', chats: 120, resolved: 98, avgTime: 2.5 },
    { day: 'Tue', chats: 145, resolved: 132, avgTime: 2.1 },
    { day: 'Wed', chats: 168, resolved: 155, avgTime: 1.9 },
    { day: 'Thu', chats: 152, resolved: 140, avgTime: 2.3 },
    { day: 'Fri', chats: 189, resolved: 175, avgTime: 2.0 },
    { day: 'Sat', chats: 98, resolved: 92, avgTime: 2.8 },
    { day: 'Sun', chats: 87, resolved: 80, avgTime: 3.1 },
  ];

  const maxChats = Math.max(...chartData.map((d) => d.chats));

  const topAgents = [
    { name: 'Sarah Johnson', chats: 156, rating: 4.9, resolved: 98 },
    { name: 'Mike Chen', chats: 142, rating: 4.8, resolved: 95 },
    { name: 'Emily Davis', chats: 138, rating: 4.7, resolved: 92 },
    { name: 'James Wilson', chats: 125, rating: 4.6, resolved: 89 },
  ];

  const popularTopics = [
    { topic: 'Account Issues', count: 342, percentage: 28 },
    { topic: 'Billing Questions', count: 298, percentage: 24 },
    { topic: 'Technical Support', count: 267, percentage: 22 },
    { topic: 'Product Info', count: 189, percentage: 15 },
    { topic: 'General Inquiry', count: 134, percentage: 11 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Analytics Dashboard</h1>
              <p className="text-sm text-gray-500">Track performance and insights</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            >
              <option value="24h">Last 24 Hours</option>
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>
              <option value="90d">Last 90 Days</option>
            </select>
            <Link
              href="/"
              className="px-4 py-2 text-gray-600 hover:text-gray-800 transition flex items-center space-x-2"
            >
              <Home className="w-5 h-5" />
              <span>Home</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg border border-gray-200 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center`}
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div
                  className={`flex items-center space-x-1 text-sm font-semibold ${
                    stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {stat.trend === 'up' ? (
                    <TrendingUp className="w-4 h-4" />
                  ) : (
                    <TrendingDown className="w-4 h-4" />
                  )}
                  <span>{stat.change}</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">{stat.label}</p>
              <p className="text-3xl font-bold text-gray-800 mt-1">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Chart */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-800">Chat Volume</h3>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-600">Total Chats</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600">Resolved</span>
                  </div>
                </div>
              </div>

              {/* Simple Bar Chart */}
              <div className="space-y-4">
                {chartData.map((data, index) => (
                  <motion.div
                    key={data.day}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-sm text-gray-600 w-12">{data.day}</span>
                      <div className="flex-1 flex items-center space-x-1">
                        <div className="flex-1 bg-gray-100 rounded-full h-8 relative overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${(data.chats / maxChats) * 100}%` }}
                            transition={{ delay: index * 0.05 + 0.2, duration: 0.5 }}
                            className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                          />
                          <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs font-semibold text-gray-700">
                            {data.chats}
                          </span>
                        </div>
                        <div className="w-16 text-right">
                          <span className="text-xs font-semibold text-green-600">
                            {data.resolved}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Popular Topics */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mt-8">
              <h3 className="text-lg font-bold text-gray-800 mb-6">Popular Topics</h3>
              <div className="space-y-4">
                {popularTopics.map((topic, index) => (
                  <motion.div
                    key={topic.topic}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-800">{topic.topic}</span>
                      <span className="text-sm text-gray-600">{topic.count} chats</span>
                    </div>
                    <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${topic.percentage}%` }}
                        transition={{ delay: index * 0.05 + 0.2, duration: 0.5 }}
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Top Agents */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-6">Top Agents</h3>
              <div className="space-y-4">
                {topAgents.map((agent, index) => (
                  <motion.div
                    key={agent.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">
                      {agent.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-800">{agent.name}</p>
                      <div className="flex items-center space-x-3 text-xs text-gray-600 mt-1">
                        <span>{agent.chats} chats</span>
                        <span>•</span>
                        <span className="flex items-center space-x-1">
                          <Star className="w-3 h-3 text-yellow-500 fill-current" />
                          <span>{agent.rating}</span>
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-green-600">
                        {agent.resolved}%
                      </p>
                      <p className="text-xs text-gray-500">resolved</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg p-6 mt-6 text-white">
              <h3 className="text-lg font-bold mb-4">This Week's Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Total Conversations</span>
                  <span className="font-bold text-xl">1,230</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Resolution Rate</span>
                  <span className="font-bold text-xl">94.2%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Avg. Rating</span>
                  <span className="font-bold text-xl">4.8/5</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">First Response</span>
                  <span className="font-bold text-xl">1.8m</span>
                </div>
              </div>
            </div>

            {/* Export Button */}
            <button className="w-full mt-6 px-4 py-3 bg-white border-2 border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition flex items-center justify-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Export Report</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
