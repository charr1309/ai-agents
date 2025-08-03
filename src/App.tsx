import React, { useState } from 'react';
import { Briefcase, FileText, TrendingUp, Users, DollarSign, Target, Download, ArrowLeft, ArrowRight, Sparkles, Zap } from 'lucide-react';
import { BusinessPlanWizard } from './components/BusinessPlanWizard';
import { BusinessPlanPreview } from './components/BusinessPlanPreview';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import type { BusinessData } from './types/business';

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [businessData, setBusinessData] = useState<BusinessData>({
    businessName: '',
    industry: '',
    businessType: '',
    location: '',
    description: '',
    targetMarket: '',
    products: '',
    competitors: '',
    uniqueValue: '',
    marketSize: '',
    fundingNeeded: '',
    revenue: '',
    expenses: '',
    timeline: '',
    team: '',
    experience: ''
  });
  const [showPreview, setShowPreview] = useState(false);

  const handleDataUpdate = (data: Partial<BusinessData>) => {
    setBusinessData(prev => ({ ...prev, ...data }));
  };

  const handleGeneratePlan = () => {
    setShowPreview(true);
  };

  if (showPreview) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <BusinessPlanPreview 
          businessData={businessData} 
          onBack={() => setShowPreview(false)}
        />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-2xl shadow-lg">
                <Sparkles className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              AI Business Plan Generator
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Generate professional, comprehensive business plans in minutes using our advanced AI technology
            </p>
            <div className="flex items-center justify-center mt-6 space-x-6">
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Zap className="w-4 h-4 text-blue-500" />
                <span>AI-Powered</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <FileText className="w-4 h-4 text-blue-500" />
                <span>Professional Quality</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Target className="w-4 h-4 text-blue-500" />
                <span>Investor Ready</span>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden">
            <BusinessPlanWizard
              currentStep={currentStep}
              businessData={businessData}
              onDataUpdate={handleDataUpdate}
              onStepChange={setCurrentStep}
              onGeneratePlan={handleGeneratePlan}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;