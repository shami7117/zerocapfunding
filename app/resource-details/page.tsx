"use client";
import React, { useState } from 'react';
import { ArrowLeft, Clock, Calendar, User, Share2, Bookmark, Twitter, Facebook, Linkedin, Copy, ArrowRight, Eye, ThumbsUp, MessageCircle } from 'lucide-react';

const BlogDetailsPage = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copied, setCopied] = useState(false);

  // Sample blog data
  const blogPost = {
    id: 1,
    title: "Advanced JavaScript ES6+ Features You Need to Know",
    image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=1200&h=600&fit=crop",
    readTime: "5 min read",
    publishedDate: "December 15, 2024",
    author: "Sarah Johnson",
    authorBio: "Senior Full-Stack Developer with 8+ years of experience in modern JavaScript frameworks and backend technologies.",
    authorAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=100&h=100&fit=crop&crop=face",
    excerpt: "Discover the most powerful ES6+ features that will transform your JavaScript development workflow and make your code more efficient.",
    category: "JavaScript",
    views: 2847,
    likes: 156,
    comments: 23,
    content: `
      <p>JavaScript has evolved tremendously since the introduction of ES6 (ECMAScript 2015). The language continues to grow with new features that make development more efficient, readable, and powerful. In this comprehensive guide, we'll explore the most impactful ES6+ features that every modern JavaScript developer should master.</p>

      <h2>1. Destructuring Assignment</h2>
      <p>Destructuring allows you to extract values from arrays or properties from objects into distinct variables. This feature dramatically reduces the amount of code needed for common operations.</p>

      <pre><code>// Array Destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(rest);  // [3, 4, 5]

// Object Destructuring
const { name, age, city = 'Unknown' } = person;
console.log(name, age, city);</code></pre>

      <h2>2. Template Literals and Tagged Templates</h2>
      <p>Template literals provide a more powerful way to work with strings, supporting multi-line strings and expression interpolation.</p>

      <pre><code>// Basic template literal
const message = \`Hello, \${name}! 
Welcome to \${city}.\`;

// Tagged template
function highlight(strings, ...values) {
  return strings.reduce((result, string, i) => {
    return result + string + (values[i] ? \`<mark>\${values[i]}</mark>\` : '');
  }, '');
}</code></pre>

      <h2>3. Arrow Functions and Lexical This</h2>
      <p>Arrow functions provide a concise syntax for writing functions and automatically bind the lexical scope, solving common issues with 'this' binding.</p>

      <pre><code>// Traditional function vs Arrow function
const multiply = (a, b) => a * b;

// Lexical this binding
class Timer {
  constructor() {
    this.seconds = 0;
    setInterval(() => {
      this.seconds++; // 'this' refers to Timer instance
    }, 1000);
  }
}</code></pre>

      <h2>4. Async/Await and Promise Improvements</h2>
      <p>Async/await syntax makes asynchronous code more readable and easier to debug, while new Promise methods provide better control over concurrent operations.</p>

      <pre><code>// Async/await
async function fetchUserData(userId) {
  try {
    const response = await fetch(\`/api/users/\${userId}\`);
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error('Failed to fetch user:', error);
  }
}

// Promise.allSettled for handling multiple promises
const results = await Promise.allSettled([
  fetch('/api/users'),
  fetch('/api/posts'),
  fetch('/api/comments')
]);</code></pre>

      <h2>5. Modules and Dynamic Imports</h2>
      <p>ES6 modules provide a standardized way to organize and share code, while dynamic imports enable code splitting and lazy loading.</p>

      <pre><code>// Static imports
import { fetchData, processData } from './utils.js';
import React, { useState, useEffect } from 'react';

// Dynamic imports for code splitting
const LazyComponent = React.lazy(() => import('./LazyComponent'));

// Conditional imports
if (feature.enabled) {
  const { advancedFeature } = await import('./advanced.js');
  advancedFeature.initialize();
}</code></pre>

      <h2>6. Advanced Object Features</h2>
      <p>Modern JavaScript provides powerful tools for working with objects, including property shorthand, computed properties, and the spread operator.</p>

      <pre><code>// Property shorthand and computed properties
const createUser = (name, age) => {
  const role = 'user';
  return {
    name, // shorthand for name: name
    age,
    role,
    [\`is\${role.charAt(0).toUpperCase() + role.slice(1)}\`]: true // computed property
  };
};

// Object spread and rest
const updatedUser = { ...user, age: 30, ...additionalInfo };
const { password, ...publicUserData } = user;</code></pre>

      <h2>Conclusion</h2>
      <p>These ES6+ features represent just a fraction of what modern JavaScript has to offer. By mastering these concepts, you'll write more concise, readable, and maintainable code. The key is to practice these features in real projects and gradually incorporate them into your development workflow.</p>

      <p>Remember that while these features are powerful, it's important to consider your target environment and use appropriate transpilation when necessary. Tools like Babel can help ensure your modern JavaScript code works across different browsers and environments.</p>
    `
  };

  const relatedPosts = [
    {
      id: 2,
      title: "Mastering CSS Grid Layout for Modern Web Design",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop",
      readTime: "7 min read",
      category: "CSS"
    },
    {
      id: 3,
      title: "React Performance Optimization Techniques",
      image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=400&h=200&fit=crop",
      readTime: "6 min read",
      category: "React"
    },
    {
      id: 4,
      title: "Node.js Authentication with JWT and Best Practices",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=200&fit=crop",
      readTime: "8 min read",
      category: "Node.js"
    }
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      {/* <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Blog</span>
            </button>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`p-2 rounded-full transition-colors ${
                  isBookmarked 
                    ? 'bg-[#39BF00] text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Bookmark className="w-5 h-5" />
              </button>
              <div className="relative">
                <button
                  onClick={() => setShowShareMenu(!showShareMenu)}
                  className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                >
                  <Share2 className="w-5 h-5" />
                </button>
                {showShareMenu && (
                  <div className="absolute right-0 top-12 bg-white rounded-lg shadow-lg border border-gray-200 p-4 w-48">
                    <div className="space-y-2">
                      <button className="flex items-center space-x-3 w-full p-2 text-left rounded-lg hover:bg-gray-50">
                        <Twitter className="w-4 h-4 text-blue-400" />
                        <span className="text-sm">Twitter</span>
                      </button>
                      <button className="flex items-center space-x-3 w-full p-2 text-left rounded-lg hover:bg-gray-50">
                        <Facebook className="w-4 h-4 text-blue-600" />
                        <span className="text-sm">Facebook</span>
                      </button>
                      <button className="flex items-center space-x-3 w-full p-2 text-left rounded-lg hover:bg-gray-50">
                        <Linkedin className="w-4 h-4 text-blue-700" />
                        <span className="text-sm">LinkedIn</span>
                      </button>
                      <button
                        onClick={copyToClipboard}
                        className="flex items-center space-x-3 w-full p-2 text-left rounded-lg hover:bg-gray-50"
                      >
                        <Copy className="w-4 h-4 text-gray-600" />
                        <span className="text-sm">{copied ? 'Copied!' : 'Copy Link'}</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav> */}

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <header className="mb-8">
          <div className="mb-4">
            <span className="bg-[#39BF00] text-white px-3 py-1 rounded-full text-sm font-medium">
              {blogPost.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {blogPost.title}
          </h1>
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            {blogPost.excerpt}
          </p>
          
          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 mb-6 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>{blogPost.publishedDate}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>{blogPost.readTime}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Eye className="w-4 h-4" />
              <span>{blogPost.views.toLocaleString()} views</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <ThumbsUp className="w-4 h-4" />
                <span>{blogPost.likes}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MessageCircle className="w-4 h-4" />
                <span>{blogPost.comments}</span>
              </div>
            </div>
          </div>

          {/* Author Info */}
          <div className="flex items-center space-x-4 p-4 bg-white rounded-lg border border-gray-200">
            <img
              src={blogPost.authorAvatar}
              alt={blogPost.author}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4 text-gray-400" />
                <span className="font-semibold text-gray-900">{blogPost.author}</span>
              </div>
              <p className="text-sm text-gray-600">{blogPost.authorBio}</p>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-8">
          <img
            src={blogPost.image}
            alt={blogPost.title}
            className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Content */}
        <div
  className="prose prose-lg max-w-none mb-12"
  dangerouslySetInnerHTML={{ __html: blogPost.content.replace(/'/g, "'") }}
  style={{
    '--tw-prose-headings': '#1f2937',
    '--tw-prose-body': '#374151',
    '--tw-prose-links': '#39BF00',
    '--tw-prose-code': '#1f2937',
    '--tw-prose-pre-bg': '#f9fafb',
    '--tw-prose-pre-code': '#1f2937',
  } as React.CSSProperties}
/>


        {/* CTA Section */}
        <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 mb-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Access Our Premium (Free)
            </h2>
            <p className="text-gray-600 mb-8">
              Get unlimited access to all our courses, tutorials, and resources. Start your learning journey today with our comprehensive training materials.
            </p>
            <button className="bg-[#39BF00] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2ea000] transition-colors inline-flex items-center space-x-2 mb-6">
              <span>Get Started With A Free Account</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <div className="text-sm text-gray-500">
              No credit card required • Access to 100+ resources • Community support
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group cursor-pointer"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#39BF00] text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#39BF00] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    <ArrowRight className="w-4 h-4 text-[#39BF00]" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
};

export default BlogDetailsPage;