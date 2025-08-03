import React, { useState } from 'react';
import { PenTool, FileText, Sparkles, Target, Zap, Brain } from 'lucide-react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ContentTypeSelector } from './components/ContentTypeSelector';
import { ContentForm } from './components/ContentForm';
import { ContentPreview } from './components/ContentPreview';
import { ContentHistory } from './components/ContentHistory';
import type { ContentRequest, GeneratedContent } from './types/content';

function App() {
  const [currentView, setCurrentView] = useState<'selector' | 'form' | 'preview' | 'history'>('selector');
  const [selectedContentType, setSelectedContentType] = useState<string>('');
  const [contentRequest, setContentRequest] = useState<ContentRequest>({
    contentType: '',
    topic: '',
    audience: '',
    tone: '',
    length: '',
    keywords: '',
    purpose: '',
    additionalInfo: ''
  });
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null);
  const [contentHistory, setContentHistory] = useState<GeneratedContent[]>([]);

  const handleContentTypeSelect = (contentType: string) => {
    setSelectedContentType(contentType);
    setContentRequest(prev => ({ ...prev, contentType }));
    setCurrentView('form');
  };

  const handleFormSubmit = (request: ContentRequest) => {
    setContentRequest(request);
    // Simulate content generation
    const generated = generateContent(request);
    setGeneratedContent(generated);
    setContentHistory(prev => [generated, ...prev.slice(0, 9)]); // Keep last 10
    setCurrentView('preview');
  };

  const handleBackToSelector = () => {
    setCurrentView('selector');
    setSelectedContentType('');
    setGeneratedContent(null);
  };

  const handleViewHistory = () => {
    setCurrentView('history');
  };

  const generateContent = (request: ContentRequest): GeneratedContent => {
    // This would be replaced with actual AI generation
    return {
      title: `${request.contentType}: ${request.topic}`,
      content: `Generated ${request.contentType.toLowerCase()} content for "${request.topic}" targeting ${request.audience} with a ${request.tone} tone...`,
      suggestions: [
        'Consider adding more specific examples',
        'Include relevant statistics or data',
        'Add a compelling call-to-action'
      ],
      seoTips: [
        'Include target keywords naturally',
        'Optimize meta description',
        'Use header tags for structure'
      ]
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
      <Header onViewHistory={handleViewHistory} />
      
      <main className="container mx-auto px-4 py-12">
        {currentView === 'selector' && (
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 rounded-3xl shadow-2xl">
                  <Brain className="h-16 w-16 text-white" />
                </div>
              </div>
              <h1 className="text-6xl font-bold text-gray-900 mb-8 leading-tight">
                AI Content Creator Pro
              </h1>
              <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                Transform your ideas into compelling content with our advanced AI. Create blog posts, social media content, 
                marketing copy, and more - all tailored to your brand and audience.
              </p>
              <div className="flex items-center justify-center space-x-8">
                <div className="flex items-center space-x-2 text-lg text-gray-600">
                  <Zap className="w-6 h-6 text-purple-500" />
                  <span className="font-semibold">Lightning Fast</span>
                </div>
                <div className="flex items-center space-x-2 text-lg text-gray-600">
                  <Target className="w-6 h-6 text-blue-500" />
                  <span className="font-semibold">Audience Targeted</span>
                </div>
                <div className="flex items-center space-x-2 text-lg text-gray-600">
                  <Sparkles className="w-6 h-6 text-indigo-500" />
                  <span className="font-semibold">AI Powered</span>
                </div>
              </div>
            </div>
            <ContentTypeSelector onSelectContentType={handleContentTypeSelect} />
          </div>
        )}

        {currentView === 'form' && (
          <div className="max-w-4xl mx-auto">
            <ContentForm
              contentType={selectedContentType}
              onSubmit={handleFormSubmit}
              onBack={handleBackToSelector}
            />
          </div>
        )}

        {currentView === 'preview' && generatedContent && (
          <div className="max-w-5xl mx-auto">
            <ContentPreview
              content={generatedContent}
              request={contentRequest}
              onBack={handleBackToSelector}
              onGenerateNew={() => setCurrentView('form')}
            />
          </div>
        )}

        {currentView === 'history' && (
          <div className="max-w-6xl mx-auto">
            <ContentHistory
              history={contentHistory}
              onBack={handleBackToSelector}
            />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;