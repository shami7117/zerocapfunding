import React from 'react';
import { Play, ArrowRight, Star, Clock, Users, BookOpen, Award, Video, FileText } from 'lucide-react';

const ResourcesTrainingPage = () => {
  // Sample data for resources
  const featuredResources = [
    {
      id: 1,
      title: "A Complete Guide to UI Data Management with React Query",
      description: "Learn how to efficiently manage server state in React applications using React Query for better UX and performance.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
      duration: "45 min",
      type: "Course",
      rating: 4.8,
      students: 2340
    }
  ];

  const resources = [
    {
      id: 1,
      title: "Advanced JavaScript ES6+ Features You Need to Know",
      image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=250&fit=crop",
      readTime: "5 min read",
      publishedDate: "Dec 15, 2024",
      author: "Sarah Johnson",
      excerpt: "Discover the most powerful ES6+ features that will transform your JavaScript development workflow and make your code more efficient.",
      category: "JavaScript"
    },
    {
      id: 2,
      title: "Mastering CSS Grid Layout for Modern Web Design",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
      readTime: "7 min read",
      publishedDate: "Dec 12, 2024",
      author: "Mike Chen",
      excerpt: "Learn how CSS Grid revolutionizes layout design and provides powerful tools for creating responsive, flexible web interfaces.",
      category: "CSS"
    },
    {
      id: 3,
      title: "Node.js Authentication with JWT and Best Practices",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",
      readTime: "8 min read",
      publishedDate: "Dec 10, 2024",
      author: "Emily Rodriguez",
      excerpt: "Implement secure authentication systems using JSON Web Tokens and learn industry-standard security practices.",
      category: "Node.js"
    },
    {
      id: 4,
      title: "React Performance Optimization Techniques",
      image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=400&h=250&fit=crop",
      readTime: "6 min read",
      publishedDate: "Dec 8, 2024",
      author: "Alex Thompson",
      excerpt: "Boost your React application's performance with proven optimization strategies and advanced rendering techniques.",
      category: "React"
    },
    {
      id: 5,
      title: "Database Design Principles and Best Practices",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=250&fit=crop",
      readTime: "10 min read",
      publishedDate: "Dec 5, 2024",
      author: "David Kim",
      excerpt: "Master the fundamentals of database design, normalization, and indexing for scalable data architecture.",
      category: "Database"
    },
    {
      id: 6,
      title: "TypeScript Advanced Types and Patterns",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
      readTime: "9 min read",
      publishedDate: "Dec 3, 2024",
      author: "Lisa Wang",
      excerpt: "Explore advanced TypeScript features including conditional types, mapped types, and complex type patterns.",
      category: "TypeScript"
    },
    {
      id: 7,
      title: "Docker Containerization for Developers",
      image: "https://images.unsplash.com/photo-1605745341112-85968b19335a?w=400&h=250&fit=crop",
      readTime: "8 min read",
      publishedDate: "Dec 1, 2024",
      author: "James Wilson",
      excerpt: "Learn Docker fundamentals and how containerization can streamline your development and deployment workflow.",
      category: "DevOps"
    },
    {
      id: 8,
      title: "API Design and Documentation Best Practices",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=250&fit=crop",
      readTime: "7 min read",
      publishedDate: "Nov 28, 2024",
      author: "Rachel Green",
      excerpt: "Design intuitive APIs and create comprehensive documentation that developers love to work with.",
      category: "API"
    },
    {
      id: 9,
      title: "Git Workflow Strategies for Team Collaboration",
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=250&fit=crop",
      readTime: "6 min read",
      publishedDate: "Nov 25, 2024",
      author: "Tom Anderson",
      excerpt: "Implement effective Git workflows that enhance team collaboration and maintain clean project history.",
      category: "Git"
    },
    {
      id: 10,
      title: "Cloud Architecture Patterns and Solutions",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
      readTime: "11 min read",
      publishedDate: "Nov 22, 2024",
      author: "Maria Santos",
      excerpt: "Discover proven cloud architecture patterns for building scalable, resilient applications in the cloud.",
      category: "Cloud"
    },
    {
      id: 11,
      title: "Machine Learning Fundamentals for Developers",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
      readTime: "12 min read",
      publishedDate: "Nov 20, 2024",
      author: "Kevin Park",
      excerpt: "Get started with machine learning concepts and practical implementation strategies for software developers.",
      category: "ML"
    },
    {
      id: 12,
      title: "Microservices Architecture Design Principles",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=250&fit=crop",
      readTime: "10 min read",
      publishedDate: "Nov 18, 2024",
      author: "Anna Lee",
      excerpt: "Learn how to design and implement microservices architecture for scalable, maintainable applications.",
      category: "Architecture"
    },
    {
      id: 13,
      title: "Security Best Practices for Web Applications",
      image: "https://images.unsplash.com/photo-1555949963-f7fe482d9142?w=400&h=250&fit=crop",
      readTime: "9 min read",
      publishedDate: "Nov 15, 2024",
      author: "Robert Zhang",
      excerpt: "Protect your web applications with essential security practices and common vulnerability prevention.",
      category: "Security"
    },
    {
      id: 14,
      title: "GraphQL Query Optimization Techniques",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      readTime: "8 min read",
      publishedDate: "Nov 12, 2024",
      author: "Sophie Brown",
      excerpt: "Optimize GraphQL queries for better performance and learn advanced techniques for efficient data fetching.",
      category: "GraphQL"
    },
    {
      id: 15,
      title: "Mobile-First Responsive Design Strategies",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
      readTime: "7 min read",
      publishedDate: "Nov 10, 2024",
      author: "Carlos Martinez",
      excerpt: "Master mobile-first design principles and create responsive layouts that work seamlessly across all devices.",
      category: "Design"
    },
    {
      id: 16,
      title: "Testing Strategies for Modern Applications",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
      readTime: "9 min read",
      publishedDate: "Nov 8, 2024",
      author: "Jennifer Taylor",
      excerpt: "Implement comprehensive testing strategies including unit, integration, and end-to-end testing approaches.",
      category: "Testing"
    },
    {
      id: 17,
      title: "Blockchain Development Fundamentals",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=250&fit=crop",
      readTime: "13 min read",
      publishedDate: "Nov 5, 2024",
      author: "Michael Johnson",
      excerpt: "Explore blockchain technology fundamentals and learn how to develop decentralized applications.",
      category: "Blockchain"
    },
    {
      id: 18,
      title: "Progressive Web App Development Guide",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop",
      readTime: "10 min read",
      publishedDate: "Nov 3, 2024",
      author: "Laura White",
      excerpt: "Build Progressive Web Apps that deliver native app experiences with modern web technologies.",
      category: "PWA"
    },
    {
      id: 19,
      title: "Advanced Python Data Structures",
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop",
      readTime: "8 min read",
      publishedDate: "Nov 1, 2024",
      author: "Daniel Lee",
      excerpt: "Master Python's advanced data structures and learn when and how to use them effectively in your projects.",
      category: "Python"
    },
    {
      id: 20,
      title: "Kubernetes Deployment Strategies",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&h=250&fit=crop",
      readTime: "11 min read",
      publishedDate: "Oct 30, 2024",
      author: "Jessica Chen",
      excerpt: "Learn Kubernetes deployment strategies and orchestration techniques for containerized applications.",
      category: "DevOps"
    },
    {
      id: 21,
      title: "Vue.js 3 Composition API Deep Dive",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop",
      readTime: "9 min read",
      publishedDate: "Oct 28, 2024",
      author: "Ryan Kim",
      excerpt: "Explore Vue.js 3's Composition API and learn how to build more maintainable and reusable components.",
      category: "Vue.js"
    },
    {
      id: 22,
      title: "AWS Lambda Serverless Architecture",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",
      readTime: "10 min read",
      publishedDate: "Oct 25, 2024",
      author: "Amanda Wilson",
      excerpt: "Build scalable serverless applications with AWS Lambda and learn best practices for function deployment.",
      category: "AWS"
    },
    {
      id: 23,
      title: "MongoDB Aggregation Pipeline Mastery",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=250&fit=crop",
      readTime: "8 min read",
      publishedDate: "Oct 22, 2024",
      author: "Steven Garcia",
      excerpt: "Master MongoDB's aggregation pipeline for complex data processing and advanced query operations.",
      category: "MongoDB"
    },
    {
      id: 24,
      title: "Flutter Cross-Platform Development",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
      readTime: "9 min read",
      publishedDate: "Oct 20, 2024",
      author: "Nicole Davis",
      excerpt: "Build beautiful cross-platform mobile applications with Flutter and learn advanced widget techniques.",
      category: "Flutter"
    }
  ];



  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Resources & Training
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive learning materials and training resources to help you master modern development skills
          </p>
        </div>

        {/* Featured Resource */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-[#39BF00] to-purple-600 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-4 py-2 mb-4">
                  <Award className="w-4 h-4" />
                  <span className="text-sm font-medium">Featured Course</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  {featuredResources[0].title}
                </h2>
                <p className="text-lg mb-6 opacity-90">
                  {featuredResources[0].description}
                </p>
                <div className="flex flex-wrap items-center gap-6 mb-8">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5" />
                    <span>{featuredResources[0].duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5" />
                    <span>{featuredResources[0].students.toLocaleString()} students</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 fill-current" />
                    <span>{featuredResources[0].rating}</span>
                  </div>
                </div>
                <button className="bg-white text-[#39BF00] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Start Learning</span>
                </button>
              </div>
              <div className="hidden lg:block">
                <img
                  src={featuredResources[0].image}
                  alt={featuredResources[0].title}
                  className="w-full h-80 object-cover rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Latest Resources Header */}
        <section className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-900">Latest resources</h2>
            <button className="text-[#39BF00] hover:text-[#39BF00] font-medium inline-flex items-center space-x-2">
              <span>View all</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => (
              <article
                key={resource.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group cursor-pointer"
              >
                <div className="relative">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#39BF00] text-white px-3 py-1 rounded-full text-xs font-medium">
                      {resource.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{resource.publishedDate}</span>
                    <span className="mx-2">•</span>
                    <span>{resource.readTime}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg group-hover:text-[#39BF00] transition-colors line-clamp-2">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {resource.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                        <span className="text-xs font-medium text-gray-600">
                          {resource.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <span className="text-sm text-gray-700">{resource.author}</span>
                    </div>
                    <button className="text-[#39BF00] hover:text-[#39BF00] p-1">
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Access Section */}
        <section className="bg-white rounded-2xl p-8 shadow-sm">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Access Our Premium (Free)
            </h2>
            <p className="text-gray-600 mb-8">
              Get unlimited access to all our courses, tutorials, and resources. Start your learning journey today with our comprehensive training materials.
            </p>
            <button className="bg-[#39BF00] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#39BF00] transition-colors inline-flex items-center space-x-2 mb-6">
              <span>Get Started With A Free Account</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <div className="text-sm text-gray-500">
              No credit card required • Access to 100+ resources • Community support
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ResourcesTrainingPage;