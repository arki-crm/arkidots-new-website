import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, ArrowRight, Clock, Calendar, User, Tag, Share2, Facebook, Twitter, Linkedin, Phone } from 'lucide-react';
import { Button } from '../components/ui/button';
import { getBlogBySlug, getRelatedPosts } from '../data/blogPosts';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = getBlogBySlug(slug);
  const relatedPosts = post ? getRelatedPosts(slug, 3) : [];

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-IN', options);
  };

  // Handle share
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  
  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
  };
  
  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post?.title || '')}`, '_blank');
  };
  
  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(post?.title || '')}`, '_blank');
  };

  // If post not found
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-stone-900 mb-4">Article Not Found</h1>
          <p className="text-stone-600 mb-6">The article you're looking for doesn't exist.</p>
          <Link to="/blog" className="text-amber-600 hover:text-amber-700 font-medium">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{post.metaTitle}</title>
        <meta name="description" content={post.metaDescription} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.featuredImage} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative">
        {/* Featured Image */}
        <div className="relative h-[40vh] sm:h-[50vh] overflow-hidden">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/40 to-transparent"></div>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12">
            {/* Breadcrumb */}
            <Link
              to="/blog"
              className="inline-flex items-center text-stone-300 hover:text-amber-400 transition-colors mb-4 text-sm"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>

            {/* Category */}
            <div className="mb-4">
              <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-stone-300">
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {formatDate(post.publishedDate)}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <article className="lg:col-span-8">
              {/* Intro */}
              <p className="text-xl text-stone-700 leading-relaxed mb-8 font-medium">
                {post.content.intro}
              </p>

              {/* Table of Contents */}
              <div className="bg-stone-50 rounded-xl p-6 mb-10">
                <h2 className="text-lg font-bold text-stone-900 mb-4">In This Article</h2>
                <nav>
                  <ul className="space-y-2">
                    {post.content.sections.map((section, index) => (
                      <li key={section.id}>
                        <a
                          href={`#${section.id}`}
                          className="text-stone-600 hover:text-amber-600 transition-colors flex items-center gap-2"
                        >
                          <span className="text-amber-600 font-medium">{index + 1}.</span>
                          {section.heading}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* Sections */}
              {post.content.sections.map((section, index) => (
                <section key={section.id} id={section.id} className="mb-10 scroll-mt-24">
                  <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-4">
                    {section.heading}
                  </h2>
                  <div className="prose prose-stone prose-lg max-w-none">
                    {section.content.split('\n\n').map((paragraph, pIndex) => {
                      // Check if it's a list or has bold text
                      if (paragraph.startsWith('**') || paragraph.includes('\n-')) {
                        return (
                          <div key={pIndex} className="mb-4 text-stone-700 leading-relaxed whitespace-pre-line">
                            {paragraph.split('**').map((part, i) => 
                              i % 2 === 1 ? <strong key={i} className="text-stone-900">{part}</strong> : part
                            )}
                          </div>
                        );
                      }
                      return (
                        <p key={pIndex} className="mb-4 text-stone-700 leading-relaxed">
                          {paragraph.split('**').map((part, i) => 
                            i % 2 === 1 ? <strong key={i} className="text-stone-900">{part}</strong> : part
                          )}
                        </p>
                      );
                    })}
                  </div>
                </section>
              ))}

              {/* Related Links */}
              {post.content.relatedLinks && post.content.relatedLinks.length > 0 && (
                <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 mt-10">
                  <h3 className="text-lg font-bold text-stone-900 mb-4">Related Resources</h3>
                  <div className="flex flex-wrap gap-3">
                    {post.content.relatedLinks.map((link, index) => (
                      <Link
                        key={index}
                        to={link.url}
                        className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg text-amber-700 font-medium hover:bg-amber-100 transition-colors border border-amber-200"
                      >
                        {link.text}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags */}
              <div className="mt-10 pt-8 border-t border-stone-200">
                <div className="flex items-center gap-2 flex-wrap">
                  <Tag className="w-4 h-4 text-stone-500" />
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-stone-100 text-stone-600 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="mt-8 pt-8 border-t border-stone-200">
                <div className="flex items-center gap-4">
                  <span className="text-stone-600 font-medium flex items-center gap-2">
                    <Share2 className="w-4 h-4" />
                    Share this article:
                  </span>
                  <button
                    onClick={shareOnFacebook}
                    className="p-2 bg-stone-100 hover:bg-blue-100 hover:text-blue-600 rounded-full transition-colors"
                    aria-label="Share on Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </button>
                  <button
                    onClick={shareOnTwitter}
                    className="p-2 bg-stone-100 hover:bg-sky-100 hover:text-sky-500 rounded-full transition-colors"
                    aria-label="Share on Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </button>
                  <button
                    onClick={shareOnLinkedIn}
                    className="p-2 bg-stone-100 hover:bg-blue-100 hover:text-blue-700 rounded-full transition-colors"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-8">
                {/* CTA Card */}
                <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-3">Need Expert Help?</h3>
                  <p className="text-stone-300 text-sm mb-6">
                    Our designers can help you plan your home interior project with personalized guidance.
                  </p>
                  <Link to="/contact">
                    <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                      <Phone className="w-4 h-4 mr-2" />
                      Free Consultation
                    </Button>
                  </Link>
                </div>

                {/* Related Posts */}
                <div className="bg-stone-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-stone-900 mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <Link
                        key={relatedPost.id}
                        to={`/blog/${relatedPost.slug}`}
                        className="block group"
                      >
                        <div className="flex gap-3">
                          <div className="w-20 h-16 flex-shrink-0 rounded-lg overflow-hidden">
                            <img
                              src={relatedPost.featuredImage}
                              alt={relatedPost.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                            />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-sm font-semibold text-stone-900 group-hover:text-amber-600 transition-colors line-clamp-2">
                              {relatedPost.title}
                            </h4>
                            <span className="text-xs text-stone-500">
                              {relatedPost.readTime}
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-stone-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-stone-600 mb-8">
            Let's discuss how we can transform your home with beautiful, functional interiors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/gallery"
              className="inline-flex items-center justify-center bg-white hover:bg-stone-50 text-stone-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-stone-300"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
