import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Calendar, BookOpen, Search } from 'lucide-react';
import { blogPosts, getAllCategories } from '../data/blogPosts';

const Blog = () => {
  const categories = getAllCategories();
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-IN', options);
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <Helmet>
        <title>Blog & Insights | Interior Design Tips | Arki Dots Kerala</title>
        <meta name="description" content="Expert interior design insights, tips, and guides. Learn about modular kitchens, home interiors, pricing, materials, and design trends in Kerala." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-amber-600/20 text-amber-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              <span>Interior Design Insights</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Blog & <span className="text-amber-400">Insights</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-stone-300 max-w-3xl mx-auto">
              Expert guides, tips, and insights to help you make informed decisions 
              about your home interior project.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-stone-600 font-medium">Topics:</span>
            {categories.map((category, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-stone-100 text-stone-700 rounded-full text-sm font-medium hover:bg-amber-100 hover:text-amber-700 transition-colors cursor-pointer"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-8">Featured Article</h2>
          
          <Link to={`/blog/${featuredPost.slug}`} className="block group">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              {/* Image */}
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <img
                  src={featuredPost.featuredImage}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {featuredPost.category}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-stone-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {formatDate(featuredPost.publishedDate)}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-4 group-hover:text-amber-600 transition-colors">
                  {featuredPost.title}
                </h3>
                
                <p className="text-stone-600 mb-6 line-clamp-3">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center text-amber-600 font-semibold group-hover:text-amber-700">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-8">All Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group block"
              >
                <article className="bg-stone-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-white/90 backdrop-blur-sm text-stone-700 px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 text-xs text-stone-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {formatDate(post.publishedDate)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-stone-900 mb-3 group-hover:text-amber-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-stone-600 text-sm mb-4 line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center text-amber-600 text-sm font-semibold">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-stone-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-4">
            Have Questions About Your Project?
          </h2>
          <p className="text-stone-600 mb-8">
            Our experts are ready to help you plan your dream home interior.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
          >
            Get Free Consultation
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;
