'use client';

import { ChatWidget } from '@/components/widget/ChatWidget';
import Link from 'next/link';
import { Home, Code } from 'lucide-react';

export default function WidgetDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Chat Widget Demo</h1>
          <Link
            href="/"
            className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg shadow hover:shadow-lg transition"
          >
            <Home className="w-5 h-5" />
            <span>Home</span>
          </Link>
        </div>

        {/* Demo Content */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Description */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Live Chat Widget Features
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm mr-3 mt-0.5">
                  ✓
                </span>
                <span>Real-time messaging with smooth animations</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm mr-3 mt-0.5">
                  ✓
                </span>
                <span>Typing indicators for better UX</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm mr-3 mt-0.5">
                  ✓
                </span>
                <span>Minimize/maximize functionality</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm mr-3 mt-0.5">
                  ✓
                </span>
                <span>Feedback collection on close</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm mr-3 mt-0.5">
                  ✓
                </span>
                <span>File attachment support</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm mr-3 mt-0.5">
                  ✓
                </span>
                <span>Emoji reactions</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm mr-3 mt-0.5">
                  ✓
                </span>
                <span>Mobile responsive design</span>
              </li>
            </ul>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Try it out!</h3>
              <p className="text-gray-600 text-sm">
                Click the chat button in the bottom right corner to start a conversation.
                Try sending messages, and experience the feedback form when closing the chat.
              </p>
            </div>
          </div>

          {/* Embed Code */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center space-x-2 mb-4">
              <Code className="w-6 h-6 text-purple-500" />
              <h2 className="text-2xl font-bold text-gray-800">Embed Code</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Add this code to your website to embed the chat widget:
            </p>
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-gray-100">
                <code>{`<!-- LiveChat Pro Widget -->
<script src="https://your-domain.com/widget.js"></script>
<script>
  LiveChatPro.init({
    apiKey: 'your-api-key',
    position: 'bottom-right',
    theme: 'light',
    greeting: 'Hi! How can we help?'
  });
</script>`}</code>
              </pre>
            </div>

            <h3 className="font-semibold text-gray-800 mt-6 mb-3">
              Customization Options
            </h3>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex justify-between p-2 bg-gray-50 rounded">
                <span className="font-medium">Position:</span>
                <span className="text-gray-600">bottom-right, bottom-left</span>
              </div>
              <div className="flex justify-between p-2 bg-gray-50 rounded">
                <span className="font-medium">Theme:</span>
                <span className="text-gray-600">light, dark, custom</span>
              </div>
              <div className="flex justify-between p-2 bg-gray-50 rounded">
                <span className="font-medium">Language:</span>
                <span className="text-gray-600">en, es, fr, de, etc.</span>
              </div>
              <div className="flex justify-between p-2 bg-gray-50 rounded">
                <span className="font-medium">Auto-open:</span>
                <span className="text-gray-600">true, false</span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl shadow-xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
          <p className="mb-6">
            This widget can be easily integrated into any website. It's built with React and
            supports all modern browsers. No external dependencies required!
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/agent"
              className="px-6 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:shadow-lg transition"
            >
              View Agent Panel
            </Link>
            <Link
              href="/chatbot"
              className="px-6 py-3 bg-white/20 backdrop-blur text-white rounded-lg font-semibold hover:bg-white/30 transition"
            >
              Build Chatbot
            </Link>
          </div>
        </div>
      </div>

      {/* Chat Widget */}
      <ChatWidget />
    </div>
  );
}
