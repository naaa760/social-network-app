type Post = {
  id: string;
  author: {
    name: string;
    handle: string;
    avatar: string;
  };
  content: string;
  timestamp: string;
};

const DUMMY_POSTS: Post[] = [
  {
    id: "1",
    author: {
      name: "Sarah Johnson",
      handle: "@sarahj",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    content:
      "Just deployed my first Next.js app! 🚀 The developer experience is amazing. #webdev #nextjs",
    timestamp: "2h ago",
  },
  {
    id: "2",
    author: {
      name: "Alex Chen",
      handle: "@alexc",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    },
    content:
      "Working on some new UI components today. TailwindCSS makes everything so much faster! 💨",
    timestamp: "4h ago",
  },
  {
    id: "3",
    author: {
      name: "Maria Garcia",
      handle: "@mgarcia",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
    },
    content:
      "Just finished a great coding session. TypeScript is a game changer for large projects! 🎯",
    timestamp: "5h ago",
  },
  {
    id: "4",
    author: {
      name: "James Wilson",
      handle: "@jwilson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
    },
    content:
      "Anyone else excited about the new React features? The future of web dev looks promising! ✨",
    timestamp: "6h ago",
  },
  {
    id: "5",
    author: {
      name: "Emma Thompson",
      handle: "@emmathom",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    },
    content:
      "Finally mastered CSS Grid! Here's a tip: grid-template-areas is a game changer for responsive layouts 📱",
    timestamp: "8h ago",
  },
  {
    id: "6",
    author: {
      name: "David Kim",
      handle: "@dkim",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    },
    content:
      "Just discovered Tailwind's JIT compiler. My development speed has increased 10x! 🚀",
    timestamp: "10h ago",
  },
  {
    id: "7",
    author: {
      name: "Sophie Martin",
      handle: "@smartin",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie",
    },
    content:
      "Gave a tech talk on React hooks today. The community's questions were amazing! Love sharing knowledge 💡",
    timestamp: "12h ago",
  },
  {
    id: "8",
    author: {
      name: "Ryan Parker",
      handle: "@rparker",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ryan",
    },
    content:
      "Hot take: TypeScript + ESLint + Prettier = The holy trinity of frontend development 🛠️",
    timestamp: "14h ago",
  },
  {
    id: "9",
    author: {
      name: "Lisa Chen",
      handle: "@lchen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
    },
    content:
      "Just launched my portfolio using Next.js 13. The new app directory structure is so intuitive! 🎉",
    timestamp: "16h ago",
  },
  {
    id: "10",
    author: {
      name: "Tom Wilson",
      handle: "@twilson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tom",
    },
    content:
      "Debugging session turned into a refactoring party. Sometimes you just need to clean up that tech debt 🧹",
    timestamp: "18h ago",
  },
  {
    id: "11",
    author: {
      name: "Nina Sharma",
      handle: "@sharma",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nina",
    },
    content:
      "AI pair programming tools are mind-blowing! Just had a 2-hour coding session that felt like a week's worth of work 🤖",
    timestamp: "20h ago",
  },
  {
    id: "12",
    author: {
      name: "Chris Morgan",
      handle: "@cmorgan",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Chris",
    },
    content:
      "Remember folks: semantic HTML is not just about accessibility, it's about better SEO too! 🎯",
    timestamp: "22h ago",
  },
  {
    id: "13",
    author: {
      name: "Julia Santos",
      handle: "@jsantos",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Julia",
    },
    content:
      "Started contributing to open source today. The community is so welcoming! 🤝",
    timestamp: "1d ago",
  },
  {
    id: "14",
    author: {
      name: "Mike Brown",
      handle: "@mbrown",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
    },
    content:
      "Pro tip: Learn keyboard shortcuts for your IDE. Your future self will thank you! ⌨️",
    timestamp: "1d ago",
  },
];

const PostCard = ({ post }: { post: Post }) => (
  <article className="border-b border-gray-200 dark:border-gray-800 p-4 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
    <div className="flex gap-4">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={post.author.avatar}
        alt={`${post.author.name}'s avatar`}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h2 className="font-bold text-sm">{post.author.name}</h2>
          <span className="text-gray-500 dark:text-gray-400 text-sm">
            {post.author.handle}
          </span>
          <span className="text-gray-500 dark:text-gray-400 text-sm">·</span>
          <span className="text-gray-500 dark:text-gray-400 text-sm">
            {post.timestamp}
          </span>
        </div>
        <p className="mt-2 text-sm text-gray-900 dark:text-gray-100">
          {post.content}
        </p>
      </div>
    </div>
  </article>
);

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto min-h-screen bg-white dark:bg-black pt-0">
      <div className="divide-y divide-gray-200 dark:divide-gray-800">
        {DUMMY_POSTS.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}
