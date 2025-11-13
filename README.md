# LiveChat Pro - Feature-Rich Live Chat Application

A comprehensive, production-ready live chat application built with React, Next.js, and TypeScript. Features real-time messaging, chatbot builder, agent panel, support articles, and analytics dashboard - all powered by JSON-based storage (no database required).

## 🚀 Features

### Core Functionality
- **Live Chat Widget**: Embeddable chat widget with real-time messaging, typing indicators, and animations
- **Agent Panel**: Comprehensive dashboard for managing customer conversations
- **Chatbot Builder**: Visual flow builder for creating intelligent chatbot interactions
- **Support Articles**: Knowledge base and help center for self-service support
- **Analytics Dashboard**: Track performance metrics and customer satisfaction
- **Admin Settings**: Configure teams, canned responses, notifications, and more

### Advanced Features
- ✅ Real-time messaging with smooth animations
- ✅ Typing indicators and read receipts
- ✅ File attachment support
- ✅ Emoji and reaction support
- ✅ Feedback collection with star ratings
- ✅ Canned responses for quick replies
- ✅ Multi-language support
- ✅ Chat transfer between agents
- ✅ Mobile-responsive design
- ✅ JSON-based data storage (no database needed)
- ✅ High-tech UI with Framer Motion animations
- ✅ Deployment-ready for Vercel

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with PostCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **State Management**: Zustand
- **Date Handling**: date-fns
- **Real-time**: Socket.io (optional)

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/TechEdMN/bp-cha-proof.git
cd bp-cha-proof

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Pages & Routes

- `/` - Landing page with feature showcase
- `/widget` - Live chat widget demo
- `/agent` - Agent panel for managing conversations
- `/chatbot` - Visual chatbot flow builder
- `/articles` - Support article center
- `/analytics` - Analytics and performance dashboard
- `/admin` - Admin settings and configuration

## 💾 Data Storage

All data is stored in JSON files in the `/data` directory:
- `chats.json` - Chat sessions and metadata
- `messages.json` - All chat messages
- `users.json` - User information
- `agents.json` - Agent profiles and status
- `articles.json` - Support articles
- `canned-responses.json` - Quick reply templates
- `chatbot-flows.json` - Chatbot configurations
- `analytics.json` - Performance metrics

## 🚀 Deployment on Vercel

1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy with default settings
4. Your live chat app is ready!

No environment variables or database configuration needed!

## 📝 Usage

### Embedding the Chat Widget

Add this code to any website:

```html
<!-- LiveChat Pro Widget -->
<script src="https://your-domain.com/widget.js"></script>
<script>
  LiveChatPro.init({
    apiKey: 'your-api-key',
    position: 'bottom-right',
    theme: 'light',
    greeting: 'Hi! How can we help?'
  });
</script>
```

### Customization

The widget supports various customization options:
- Position: `bottom-right`, `bottom-left`
- Theme: `light`, `dark`, `custom`
- Language: `en`, `es`, `fr`, `de`, etc.
- Auto-open behavior
- Custom colors and branding

## 🔧 Configuration

Edit `next.config.js` for Next.js settings
Edit `tailwind.config.js` for styling customization
Modify components in `/components` directory for UI changes

## 📁 Project Structure

```
bp-cha-proof/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Landing page
│   ├── widget/            # Chat widget demo
│   ├── agent/             # Agent panel
│   ├── chatbot/           # Chatbot builder
│   ├── articles/          # Support articles
│   ├── analytics/         # Analytics dashboard
│   └── admin/             # Admin settings
├── components/            # React components
│   ├── ui/               # UI components
│   ├── chat/             # Chat components
│   ├── widget/           # Widget components
│   └── ...
├── lib/                  # Utility functions
│   ├── types.ts         # TypeScript types
│   └── storage.ts       # JSON storage utilities
├── data/                # JSON data storage
└── public/              # Static assets
```

## 🎨 Features Showcase

### Chat Widget
- Floating chat button with notification indicator
- Minimizable chat window
- Real-time message updates
- Typing indicators
- File attachments
- Emoji support
- Feedback collection on close

### Agent Panel
- Live chat queue management
- Multi-chat handling
- Quick replies (canned responses)
- Chat transfer functionality
- Performance metrics
- User information display

### Chatbot Builder
- Visual flow designer
- Drag-and-drop node creation
- Multiple node types (message, question, action)
- Branch logic support
- Test mode for flow validation

### Support Articles
- Searchable knowledge base
- Category organization
- View tracking
- Helpful/not helpful ratings
- Popular articles display

### Analytics
- Real-time chat volume metrics
- Agent performance tracking
- Customer satisfaction ratings
- Response time analytics
- Popular topics analysis

## 🔐 Security

- JSON-based storage (no SQL injection risks)
- No external database connections
- Local data storage
- Configurable access controls
- Session management

## 📱 Responsive Design

Fully responsive and mobile-optimized for all screen sizes.

## 🤝 Contributing

This is a demonstration project showcasing a complete live chat system implementation.

## 📄 License

ISC License

## 🎯 Key Highlights

- **No Database Required**: Uses JSON files for data persistence
- **Easy Deployment**: One-click deployment to Vercel
- **Production Ready**: Complete feature set for real-world use
- **Modern Stack**: Built with latest Next.js and React
- **Beautiful UI**: High-tech design with smooth animations
- **Fully Typed**: Complete TypeScript coverage
- **Scalable**: Modular architecture for easy extensions

## 🚀 Quick Start

```bash
npm install
npm run dev
# Visit http://localhost:3000
```

That's it! No database setup, no complex configuration needed.

---

Built with ❤️ using React, Next.js, and TypeScript