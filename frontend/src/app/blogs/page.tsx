import React from 'react';
import { BlogPost } from '@/app/blogs/blogPost';
import SisterConcernSlider from '@/components/HomeComponents/OurSisterConcern';
import Image from 'next/image';

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Understanding Water Supply Systems",
    excerpt: "Learn how modern water supply systems work to deliver clean water to your doorstep.",
    category: "Water Supply",
    date: "Oct 24, 2023",
    author: "Admin",
    image: "https://i.pinimg.com/736x/f9/b4/09/f9b4093fa3cfb2175284e5c10d0f3781.jpg", 
  },
  {
    id: 2,
    title: "The Future of Sustainable Transport",
    excerpt: "Exploring eco-friendly logistics and transportation solutions for businesses.",
    category: "Transport",
    date: "Oct 20, 2023",
    author: "Logistics Team",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=600&h=400",
  },
  {
    id: 3,
    title: "Manpower Management Tips",
    excerpt: "How to efficiently manage large teams and improve productivity in industrial sectors.",
    category: "Manpower",
    date: "Oct 15, 2023",
    author: "HR Expert",
    image: "https://i.pinimg.com/736x/70/52/ad/7052ad5f76a69b85133af4569959dc32.jpg",
  },
  {
    id: 4,
    title: "Essential Guide to Petrol Pump Operations",
    excerpt: "A comprehensive look into the daily operations and management of a petrol pump.",
    category: "Petrol Pump",
    date: "Oct 10, 2023",
    author: "Energy Solutions",
    image: "https://i.pinimg.com/1200x/f6/4e/29/f64e293440f6014ae764dd0ab8d7f2ab.jpg", 
  },
  {
    id: 5,
    title: "Designing Modern Office Furniture",
    excerpt: "Trends and considerations for selecting comfortable and ergonomic office furniture.",
    category: "Furniture",
    date: "Oct 05, 2023",
    author: "Interior Design",
    image: "https://i.pinimg.com/736x/b3/21/e2/b321e2485da40c0dde2685c3a4fdcb56.jpg", 
  },
  {
    id: 6,
    title: "Optimizing Your Business Line Strategy",
    excerpt: "Strategies to streamline your business operations and maximize efficiency.",
    category: "Business Line",
    date: "Sep 28, 2023",
    author: "Consultant",
    image: "https://i.pinimg.com/736x/45/91/9e/45919e37df8629be2845905d94b5af50.jpg", 
  },
  {
    id: 7,
    title: "Innovations in Water Treatment",
    excerpt: "Exploring new technologies for cleaner and more sustainable water supply.",
    category: "Water Supply",
    date: "Sep 22, 2023",
    author: "Aqua Tech",
    image: "https://i.pinimg.com/1200x/6f/1a/35/6f1a35be46642c9ea7cdcf5cd113d795.jpg", 
  },
  {
    id: 8,
    title: "Future of Logistics: AI and Automation",
    excerpt: "How artificial intelligence is transforming the transport and logistics industry.",
    category: "Transport",
    date: "Sep 18, 2023",
    author: "Tech Innovator",
    image: "https://i.pinimg.com/736x/1d/1f/0d/1d1f0d7c96e10426d27bd924f6728e54.jpg",
  },
];

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner Section */}
      <div 
        className="relative bg-cover bg-center h-[400px] md:h-[500px] flex items-center justify-center text-white"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1920&h=500')` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-center max-w-4xl px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Our Insights & <span className="text-fuchsia-400">Updates</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl font-light">
            Explore the latest news, trends, and expert opinions from our diverse business lines.
          </p>
        </div>
      </div>

      {/* Blog Grid Section */}
      <div className="container mx-auto py-12 px-5">
        <div className="container mx-auto grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="h-48 w-full bg-gray-200 relative">
                <Image 
                  src={post.image} 
                  alt={post.title}
                  fill
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 bg-fuchsia-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                  {post.category}
                </span>
              </div>

              <div className="p-5">
                <div className="flex items-center text-sm text-gray-400 mb-2">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>By {post.author}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-fuchsia-600 cursor-pointer transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                  {post.excerpt}
                </p>
                
                <button className="text-fuchsia-600 font-semibold flex items-center hover:underline text-sm">
                  Read More 
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* --- New Contact Form Section Added Here --- */}
      <section className="py-16 px-5 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Start Your Design Journey with Us! Fill Out the Form Now.
          </h2>

          <div className="max-w-6xl mx-auto bg-white rounded-2xl p-8 md:p-16 shadow-sm border border-gray-100">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              
              {/* Full Name */}
              <div className="relative border-b border-gray-500 focus-within:border-fuchsia-500 transition-colors">
                <label className="block text-sm font-semibold text-gray-800 mb-1">Full name</label>
                <input 
                  type="text" 
                  className="w-full py-2 bg-transparent outline-none text-gray-900 placeholder-gray-500" 
                  placeholder="Enter your name"
                />
              </div>

              {/* Phone Number */}
              <div className="relative border-b border-gray-500 focus-within:border-fuchsia-500 transition-colors">
                <label className="block text-sm font-semibold text-gray-800 mb-1">Phone number</label>
                <input 
                  type="tel" 
                  className="w-full py-2 bg-transparent outline-none text-gray-900 placeholder-gray-500" 
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Your Subject */}
              <div className="relative border-b border-gray-500 focus-within:border-fuchsia-500 transition-colors">
                <label className="block text-sm font-semibold text-gray-800 mb-1">Your Subject</label>
                <input 
                  type="text" 
                  className="w-full py-2 bg-transparent outline-none text-gray-900 placeholder-gray-500" 
                  placeholder="Subject of interest"
                />
              </div>

              {/* Company Name */}
              <div className="relative border-b border-gray-500 focus-within:border-fuchsia-500 transition-colors">
                <label className="block text-sm font-semibold text-gray-800 mb-1">Company Name</label>
                <input 
                  type="text" 
                  className="w-full py-2 bg-transparent outline-none text-gray-900 placeholder-gray-500" 
                  placeholder="Your company name"
                />
              </div>

              {/* Your Message (Full Width) */}
              <div className="md:col-span-2 relative border-b border-gray-500 focus-within:border-fuchsia-500 transition-colors">
                <label className="block text-sm font-semibold text-gray-800 mb-1">Your message</label>
                <textarea 
                  rows={1}
                  className="w-full py-2 bg-transparent outline-none text-gray-900 placeholder-gray-500 resize-none" 
                  placeholder="Type your message here..."
                />
              </div>

              {/* Checkbox and Submit Button */}
              <div className="md:col-span-2 space-y-8 mt-4">
                <div className="flex items-center gap-3">
                  <input 
                    type="checkbox" 
                    id="terms" 
                    className="w-5 h-5 rounded border-gray-300 text-fuchsia-600 focus:ring-fuchsia-500 cursor-pointer"
                  />
                  <label htmlFor="terms" className="text-gray-600 text-sm cursor-pointer select-none">
                    I am bound by the terms of the Service I accept Privacy Policy.
                  </label>
                </div>

                <button 
                  type="submit"
                  className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold py-4 px-12 rounded-full transition-all duration-300 shadow-lg uppercase tracking-wider text-sm"
                >
                  Send Message
                </button>
              </div>

            </form>
          </div>
        </div>
      </section>

          {/* Our Sister Concern */}
        <SisterConcernSlider></SisterConcernSlider>
      

      {/* Newsletter Section */}
      <div className="w-full mt-8 p-8 bg-gray-800 rounded-md text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Join Our Community</h2>
        <p className="mb-6 opacity-90">Get the latest updates from Business Line directly in your inbox.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="px-6 py-3 rounded-full border-2 text-white focus:outline-white w-full sm:w-80"
          />
          <button className="bg-gray-900 text-white border-2 px-8 py-3 rounded-full font-bold hover:bg-black transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;