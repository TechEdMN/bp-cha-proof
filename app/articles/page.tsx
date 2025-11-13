'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Home,
  BookOpen,
  Search,
  ThumbsUp,
  ThumbsDown,
  Eye,
  TrendingUp,
  Star,
  Filter,
} from 'lucide-react';
import { motion } from 'framer-motion';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  views: number;
  helpful: number;
  notHelpful: number;
  tags: string[];
}

export default function SupportArticles() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Articles', icon: BookOpen, count: 24 },
    { id: 'getting-started', name: 'Getting Started', icon: Star, count: 8 },
    { id: 'billing', name: 'Billing', icon: TrendingUp, count: 6 },
    { id: 'technical', name: 'Technical', icon: Filter, count: 10 },
  ];

  const articles: Article[] = [
    {
      id: '1',
      title: 'How to Get Started with LiveChat Pro',
      excerpt: 'Learn the basics of setting up and using LiveChat Pro for your business...',
      category: 'getting-started',
      views: 1234,
      helpful: 89,
      notHelpful: 5,
      tags: ['beginner', 'setup', 'tutorial'],
    },
    {
      id: '2',
      title: 'Understanding Your Billing Dashboard',
      excerpt: 'A comprehensive guide to managing your subscription and billing information...',
      category: 'billing',
      views: 892,
      helpful: 67,
      notHelpful: 8,
      tags: ['billing', 'subscription', 'payment'],
    },
    {
      id: '3',
      title: 'Integrating LiveChat with Your Website',
      excerpt: 'Step-by-step instructions for embedding the chat widget on your site...',
      category: 'technical',
      views: 2103,
      helpful: 145,
      notHelpful: 12,
      tags: ['integration', 'website', 'embed'],
    },
    {
      id: '4',
      title: 'Creating Effective Chatbot Flows',
      excerpt: 'Best practices for designing conversational chatbot experiences...',
      category: 'getting-started',
      views: 1567,
      helpful: 98,
      notHelpful: 7,
      tags: ['chatbot', 'automation', 'design'],
    },
    {
      id: '5',
      title: 'Advanced Agent Panel Features',
      excerpt: 'Discover powerful features to enhance your agent productivity...',
      category: 'technical',
      views: 945,
      helpful: 72,
      notHelpful: 4,
      tags: ['agent', 'productivity', 'features'],
    },
    {
      id: '6',
      title: 'Managing Your Team and Permissions',
      excerpt: 'Learn how to add team members and configure access controls...',
      category: 'getting-started',
      views: 1189,
      helpful: 81,
      notHelpful: 6,
      tags: ['team', 'permissions', 'management'],
    },
  ];

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory =
      selectedCategory === 'all' || article.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const popularArticles = [...articles]
    .sort((a, b) => b.views - a.views)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Support Center</h1>
              <p className="text-sm text-gray-500">Find answers to common questions</p>
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

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search for articles, topics, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-16 pr-6 py-5 text-lg border-2 border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none shadow-lg"
              />
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 sticky top-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <category.icon className="w-5 h-5" />
                      <span className="font-medium">{category.name}</span>
                    </div>
                    <span
                      className={`text-sm ${
                        selectedCategory === category.id
                          ? 'text-white/80'
                          : 'text-gray-500'
                      }`}
                    >
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Popular Articles</h3>
                <div className="space-y-3">
                  {popularArticles.map((article) => (
                    <div
                      key={article.id}
                      className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition cursor-pointer"
                    >
                      <p className="text-sm font-medium text-gray-800 line-clamp-2">
                        {article.title}
                      </p>
                      <div className="flex items-center space-x-2 mt-2">
                        <Eye className="w-3 h-3 text-gray-500" />
                        <span className="text-xs text-gray-500">{article.views} views</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="lg:col-span-3">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-gray-600">
                {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''}{' '}
                found
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {filteredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow cursor-pointer"
                >
                  <div className="mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                      {categories.find((c) => c.id === article.category)?.name}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{article.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <ThumbsUp className="w-4 h-4 text-green-600" />
                        <span>{article.helpful}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <ThumbsDown className="w-4 h-4 text-red-600" />
                        <span>{article.notHelpful}</span>
                      </div>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                      Read more →
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">No articles found matching your search</p>
              </div>
            )}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-xl p-8 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Can't find what you're looking for?</h2>
          <p className="text-white/90 mb-6">
            Our support team is here to help. Start a live chat or send us a message.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/widget"
              className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-lg transition"
            >
              Start Live Chat
            </Link>
            <button className="px-6 py-3 bg-white/20 backdrop-blur text-white rounded-lg font-semibold hover:bg-white/30 transition">
              Contact Support
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
