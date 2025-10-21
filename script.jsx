```jsx
import React from 'react';
import { Target, Users, TrendingUp, Brain, Mail, Database, BarChart3, FileText, Building, Rocket, Award } from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl font-bold text-green-700">NexBio</span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#services" className="text-black hover:text-green-700 px-3 py-2 text-sm font-medium transition-colors">Services</a>
                <a href="#why-us" className="text-black hover:text-green-700 px-3 py-2 text-sm font-medium transition-colors">Why Us</a>
                <a href="#case-study" className="text-black hover:text-green-700 px-3 py-2 text-sm font-medium transition-colors">Case Study</a>
                <a href="#mission" className="text-black hover:text-green-700 px-3 py-2 text-sm font-medium transition-colors">Mission</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Strategic Growth for
              <span className="text-green-700 block">Biotech Innovators</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We help early-stage companies and research-driven founders grow faster through expert guidance and smart outreach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors">
                Get Started
              </button>
              <button className="border-2 border-green-700 text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized solutions designed for biotech and life science companies ready to scale
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Lead Generation Service */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <Mail className="h-8 w-8 text-green-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Lead Generation for Biotech & Life Science Companies</h3>
              </div>
              <p className="text-gray-600 mb-6">
                We help you find and connect with qualified leads — whether that's investors, B2B clients, suppliers, or potential R&D partners.
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">What's included:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-700 mr-2">•</span>
                    Targeted industry outreach (email + LinkedIn campaigns)
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-700 mr-2">•</span>
                    CRM setup and automation (HubSpot / Apollo / Pipedrive)
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-700 mr-2">•</span>
                    Investor or client list curation
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-700 mr-2">•</span>
                    Conversion tracking & KPI analytics
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-700 mr-2">•</span>
                    Messaging & pitch refinement
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Ideal for:</h4>
                <p className="text-gray-600">
                  Early-stage biotech startups, contract research organizations (CROs), and bio-product companies ready to scale.
                </p>
              </div>
            </div>

            {/* Strategic Consulting Service */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <Brain className="h-8 w-8 text-green-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Strategic Consulting</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Expert guidance tailored to your company's growth stage and goals.
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Areas of focus:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-700 mr-2">•</span>
                    Market positioning & go-to-market strategy
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-700 mr-2">•</span>
                    Fundraising preparation (deck review, investor targeting)
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-700 mr-2">•</span>
                    Regulatory pathway consulting (for life sciences & diagnostics)
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-700 mr-2">•</span>
                    Partner sourcing and collaboration strategy
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Delivery options:</h4>
                <p className="text-gray-600">
                  1:1 advisory, multi-week consulting projects, or ongoing retainers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Boutique and Specialized</h3>
              <p className="text-gray-600">
                You'll work directly with biotech-savvy strategists who understand your industry's unique challenges.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Data-Driven Outreach</h3>
              <p className="text-gray-600">
                Every campaign is backed by metrics and qualified leads, ensuring measurable results.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Database className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Deep Industry Knowledge</h3>
              <p className="text-gray-600">
                From lab science to investor relations, we bridge the gap between research and commercialization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section id="case-study" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Story</h2>
            <p className="text-xl text-gray-600">See how we transformed Yuyu Pharma's growth trajectory</p>
          </div>
          
          <div className="bg-gradient-to-r from-green-700 to-green-800 rounded-3xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <Award className="h-8 w-8 mr-3" />
                  <span className="text-lg font-semibold">Yuyu Pharma Case Study</span>
                </div>
                <h3 className="text-3xl font-bold mb-6">Becoming a Market Leader</h3>
                <p className="text-green-100 mb-8">
                  Yuyu Pharma, an early-stage biotech company specializing in novel drug delivery systems, was struggling to connect with potential clients and investors despite having groundbreaking technology.
                </p>
                <div className="bg-white bg-opacity-10 rounded-xl p-6">
                  <h4 className="font-semibold mb-4">Our Approach:</h4>
                  <ul className="space-y-2 text-green-100">
                    <li>• Comprehensive market analysis and competitor research</li>
                    <li>• Targeted outreach to 500+ qualified leads in pharmaceutical industry</li>
                    <li>• CRM implementation and sales process optimization</li>
                    <li>• Strategic messaging refinement for investor presentations</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white bg-opacity-20 rounded-xl p-6">
                  <div className="flex items-center mb-2">
                    <Users className="h-6 w-6 mr-2" />
                    <span className="font-semibold">+300 New Clients</span>
                  </div>
                  <p className="text-green-100 text-sm">Acquired through targeted outreach campaigns</p>
                </div>
                
                <div className="bg-white bg-opacity-20 rounded-xl p-6">
                  <div className="flex items-center mb-2">
                    <TrendingUp className="h-6 w-6 mr-2" />
                    <span className="font-semibold">+13.8% Revenue Growth</span>
                  </div>
                  <p className="text-green-100 text-sm">Achieved within 6 months of engagement</p>
                </div>
                
                <div className="bg-white bg-opacity-20 rounded-xl p-6">
                  <div className="flex items-center mb-2">
                    <Building className="h-6 w-6 mr-2" />
                    <span className="font-semibold">Increased Company Valuation</span>
                  </div>
                  <p className="text-green-100 text-sm">Secured Series A funding at 3x previous valuation</p>
                </div>
                
                <div className="bg-white bg-opacity-20 rounded-xl p-6">
                  <div className="flex items-center mb-2">
                    <Rocket className="h-6 w-6 mr-2" />
                    <span className="font-semibold">Market Expansion</span>
                  </div>
                  <p className="text-green-100 text-sm">Entered 3 new international markets successfully</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section id="mission" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              To make it effortless for biotech founders, scientists, and innovators to find the right people, partnerships, and growth opportunities.
            </p>
            <blockquote className="text-2xl italic font-light text-green-400 border-l-4 border-green-500 pl-6 py-4 bg-gray-800 bg-opacity-50 rounded-r-lg">
              "We believe that the future of biology depends not just on discovery — but on connection."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-500 mb-4">NexBio</div>
            <p className="text-gray-400 mb-6">
              Strategic consulting and lead generation for biotech innovators
            </p>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-500">
                © 2024 NexBio. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
```