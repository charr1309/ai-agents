import React from 'react';
import { 
  FileText, 
  MessageSquare, 
  Mail, 
  ShoppingBag, 
  Megaphone, 
  Video, 
  Image, 
  Users,
  TrendingUp,
  BookOpen,
  Newspaper,
  Briefcase
} from 'lucide-react';

interface ContentTypeSelectorProps {
  onSelectContentType: (contentType: string) => void;
}

const contentTypes = [
  {
    id: 'blog-post',
    name: 'Blog Post',
    description: 'SEO-optimized blog articles and posts',
    icon: FileText,
    category: 'Content Marketing',
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 'social-media',
    name: 'Social Media',
    description: 'Engaging posts for all social platforms',
    icon: MessageSquare,
    category: 'Social Media',
    color: 'from-pink-500 to-pink-600'
  },
  {
    id: 'email-marketing',
    name: 'Email Marketing',
    description: 'Compelling email campaigns and newsletters',
    icon: Mail,
    category: 'Email Marketing',
    color: 'from-green-500 to-green-600'
  },
  {
    id: 'product-description',
    name: 'Product Description',
    description: 'Persuasive product descriptions that sell',
    icon: ShoppingBag,
    category: 'E-commerce',
    color: 'from-orange-500 to-orange-600'
  },
  {
    id: 'ad-copy',
    name: 'Ad Copy',
    description: 'High-converting advertising copy',
    icon: Megaphone,
    category: 'Advertising',
    color: 'from-red-500 to-red-600'
  },
  {
    id: 'video-script',
    name: 'Video Script',
    description: 'Engaging scripts for video content',
    icon: Video,
    category: 'Video Marketing',
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 'landing-page',
    name: 'Landing Page',
    description: 'High-converting landing page copy',
    icon: TrendingUp,
    category: 'Web Copy',
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    id: 'press-release',
    name: 'Press Release',
    description: 'Professional press releases and announcements',
    icon: Newspaper,
    category: 'PR & Communications',
    color: 'from-teal-500 to-teal-600'
  },
  {
    id: 'case-study',
    name: 'Case Study',
    description: 'Detailed case studies and success stories',
    icon: BookOpen,
    category: 'Business Content',
    color: 'from-cyan-500 to-cyan-600'
  },
  {
    id: 'white-paper',
    name: 'White Paper',
    description: 'In-depth white papers and reports',
    icon: Briefcase,
    category: 'Business Content',
    color: 'from-slate-500 to-slate-600'
  }
];

export const ContentTypeSelector: React.FC<ContentTypeSelectorProps> = ({ onSelectContentType }) => {
  const categories = [...new Set(contentTypes.map(type => type.category))];

  return (
    <div className="space-y-8">
      {categories.map(category => (
        <div key={category} className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-2">
            {category}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentTypes
              .filter(type => type.category === category)
              .map(type => {
                const IconComponent = type.icon;
                return (
                  <div
                    key={type.id}
                    onClick={() => onSelectContentType(type.id)}
                    className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 hover:border-purple-200 transform hover:-translate-y-2 hover:scale-105"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`bg-gradient-to-r ${type.color} p-4 rounded-2xl group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors">
                          {type.name}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {type.description}
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-2 rounded-full">
                        {type.category}
                      </span>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="text-sm font-bold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                          Create →
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      ))}
    </div>
  );
};