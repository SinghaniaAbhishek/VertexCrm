import { useState } from 'react';
import { Users, BarChart3, Zap, Shield, TrendingUp, CheckCircle, Menu, X, ArrowRight } from 'lucide-react';

const Landing = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Contact Management',
      description: 'Centralize all customer data in one place. Track interactions, manage relationships, and never miss a follow-up.'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Sales Pipeline',
      description: 'Visualize your sales process from lead to close. Track deals, forecast revenue, and optimize conversion rates.'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Advanced Analytics',
      description: 'Get actionable insights with real-time dashboards. Make data-driven decisions to grow your business faster.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Workflow Automation',
      description: 'Automate repetitive tasks and focus on what matters. Set up custom triggers, notifications, and follow-ups.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with data encryption, role-based access, and compliance with industry standards.'
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Task Management',
      description: 'Organize team activities, assign tasks, set deadlines, and track progress all within your CRM workspace.'
    }
  ];

  const handleRoute = () => {
    window.location.href = "/login";
  };

  const handleTrial = () => {
    window.location.href = "/register";
  };

  const stats = [
    { value: '10,000+', label: 'Active Users' },
    { value: '98%', label: 'Customer Satisfaction' },
    { value: '2.5x', label: 'Revenue Growth' },
    { value: '24/7', label: 'Support Available' }
  ];

  const benefits = [
    'Increase sales productivity by 40%',
    'Reduce data entry time by 60%',
    'Improve customer retention rates',
    'Scale your business efficiently',
    'Seamless team collaboration',
    'Mobile access anywhere, anytime'
  ];

  return (
    <div className="w-full font-['Inter',sans-serif]">

      {/* Navigation */}
      <nav className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-gray-200 z-50 py-4" data-testid="main-navigation">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" data-testid="nav-logo">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 via-indigo-500 to-blue-700 text-white font-semibold shadow-md">
              <span className="text-sm tracking-tight">VC</span>
            </div>
            <span className="font-['Space_Grotesk',sans-serif] text-2xl font-bold bg-gradient-to-r from-sky-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">VertexCRM</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-indigo-600 font-medium text-[15px]" data-testid="nav-features-link">Features</a>
            <a href="#benefits" className="text-gray-600 hover:text-indigo-600 font-medium text-[15px]" data-testid="nav-benefits-link">Benefits</a>
            <button className="bg-gradient-to-r from-sky-600 via-indigo-600 to-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold text-[15px] hover:from-indigo-600 hover:to-sky-600" data-testid="nav-cta-button" onClick={handleRoute}>
              Get Started
            </button>
          </div>

          <button className="md:hidden text-[#004E92]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} data-testid="mobile-menu-button">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden flex flex-col gap-4 px-8 py-4 bg-white border-t border-gray-200" data-testid="mobile-menu">
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-gray-600 font-medium py-2">Features</a>
            <a href="#benefits" onClick={() => setMobileMenuOpen(false)} className="text-gray-600 font-medium py-2">Benefits</a>
            <button className="bg-gradient-to-r from-sky-600 via-indigo-600 to-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold hover:from-indigo-600 hover:to-sky-600" onClick={handleTrial} data-testid="mobile-cta-button">
              Get Started
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 py-24 grid md:grid-cols-2 gap-16 items-center" data-testid="hero-section">
        <div className="flex flex-col gap-8">
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold w-fit">
            <Zap className="w-4 h-4" />
            <span>Trusted by 10,000+ sales teams</span>
          </div>
          
          <h1 className="font-['Space_Grotesk',sans-serif] text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1]" data-testid="hero-title">
            Supercharge Your Sales Pipeline
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed" data-testid="hero-subtitle">
            VertexCRM brings every lead, account, and deal into one clean workspace so your team can
            focus on closing more revenue—not managing spreadsheets.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              className="bg-gradient-to-r from-sky-600 via-indigo-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold inline-flex items-center justify-center hover:shadow-xl hover:scale-105 transition-all"
              data-testid="hero-primary-cta"
              onClick={handleTrial}
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button
              className="bg-white border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-indigo-600 hover:text-indigo-600 transition-all"
              onClick={handleRoute}
            >
              Watch Demo
            </button>
          </div>

          <div className="flex items-center gap-8 pt-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-sm text-gray-600">No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-sm text-gray-600">14-day free trial</span>
            </div>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,78,146,0.15)]" data-testid="hero-image">
          <img
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2000"
            alt="Modern team collaborating in an office with laptops"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16" data-testid="stats-section">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow" data-testid={`stat-card-${index}`}>
                <div className="font-['Space_Grotesk',sans-serif] text-4xl lg:text-5xl font-bold bg-gradient-to-r from-sky-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent mb-2" data-testid={`stat-value-${index}`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-medium uppercase tracking-wide" data-testid={`stat-label-${index}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-7xl mx-auto px-8 py-24" data-testid="features-section">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Shield className="w-4 h-4" />
            <span>Enterprise-Grade Platform</span>
          </div>
          <h2 className="font-['Space_Grotesk',sans-serif] text-4xl lg:text-5xl font-bold text-gray-900 mb-6" data-testid="features-title">
            Powerful Features for Modern Teams
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" data-testid="features-subtitle">
            Everything you need to manage customer relationships, streamline workflows, and accelerate business growth—all in one intelligent platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-[0_20px_60px_rgba(0,78,146,0.12)] hover:border-indigo-200 transition-all cursor-pointer" data-testid={`feature-card-${index}`}>
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-50 to-sky-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform" data-testid={`feature-icon-${index}`}>
                {feature.icon}
              </div>
              <h3 className="font-['Space_Grotesk',sans-serif] text-xl font-bold text-gray-900 mb-4" data-testid={`feature-title-${index}`}>
                {feature.title}
              </h3>
              <p className="text-base text-gray-600 leading-relaxed" data-testid={`feature-description-${index}`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="bg-gradient-to-br from-gray-50 to-white py-24" data-testid="benefits-section">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-20 items-center">
          <div className="flex flex-col gap-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <TrendingUp className="w-4 h-4" />
                <span>Proven Results</span>
              </div>
              <h2 className="font-['Space_Grotesk',sans-serif] text-4xl lg:text-5xl font-bold text-gray-900 mb-6" data-testid="benefits-title">
                Why Leading Companies Choose VertexCRM
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed" data-testid="benefits-intro">
                Join thousands of businesses that have transformed their sales process and achieved measurable results.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 text-base text-gray-700 bg-white p-5 rounded-xl border border-gray-200 hover:border-indigo-200 hover:shadow-md transition-all" data-testid={`benefit-item-${index}`}>
                  <CheckCircle className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span className="font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,78,146,0.15)]" data-testid="benefits-image">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015"
              alt="Business Growth Analytics"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-8 py-20" data-testid="cta-section">
        <div className="bg-gradient-to-br from-slate-900 via-indigo-700 to-sky-700 rounded-3xl p-16 text-center text-white">
          <h2 className="font-['Space_Grotesk',sans-serif] text-4xl lg:text-5xl font-bold mb-4" data-testid="cta-title">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg mb-8 opacity-95" data-testid="cta-subtitle">
            Start your 14-day free trial today. No credit card required.
          </p>

          <button
            className="bg-white text-slate-900 px-10 py-4 rounded-xl font-semibold inline-flex items-center hover:shadow-lg hover:-translate-y-0.5 transition-all"
            data-testid="final-cta-button"
            onClick={handleTrial}
          >
            Get Started Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-8" data-testid="footer">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[2fr_3fr] gap-16 mb-8">
          <div className="flex flex-col gap-4">
            <span className="font-['Space_Grotesk',sans-serif] text-2xl font-bold">VertexCRM</span>
            <p className="text-gray-400 text-[15px]">Simplify Customer Success.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex flex-col gap-3">
              <h4 className="font-['Space_Grotesk',sans-serif] text-base font-semibold mb-2">Product</h4>
              <a href="#features" className="text-gray-400 hover:text-white">Features</a>
              <a href="#pricing" className="text-gray-400 hover:text-white">Pricing</a>
              <a href="#integrations" className="text-gray-400 hover:text-white">Integrations</a>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-['Space_Grotesk',sans-serif] text-base font-semibold mb-2">Company</h4>
              <a href="#about" className="text-gray-400 hover:text-white">About Us</a>
              <a href="#careers" className="text-gray-400 hover:text-white">Careers</a>
              <a href="#contact" className="text-gray-400 hover:text-white">Contact</a>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-['Space_Grotesk',sans-serif] text-base font-semibold mb-2">Resources</h4>
              <a href="#docs" className="text-gray-400 hover:text-white">Documentation</a>
              <a href="#support" className="text-gray-400 hover:text-white">Support</a>
              <a href="#blog" className="text-gray-400 hover:text-white">Blog</a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; 2025 VertexCRM. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;