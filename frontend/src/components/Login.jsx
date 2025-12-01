import { useState } from 'react';
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  BarChart3, 
  ArrowRight, 
  AlertCircle,
  Shield,
  Zap,
  TrendingUp
} from 'lucide-react';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [notification, setNotification] = useState({ show: false, message: '', type: '' });

  const showNotification = (message, type = 'error') => {
    setNotification({ show: true, message, type });
    setTimeout(() => setNotification({ show: false, message: '', type: '' }), 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
    
    if (errors.general) {
      setErrors({
        ...errors,
        general: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setErrors({});
    
    if (!validateForm()) {
      showNotification('Please fix the errors below');
      return;
    }
    
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      // Demo: accept any email/password combo for demonstration
      showNotification('Welcome back!', 'success');
      setLoading(false);
      setTimeout(() => {
        window.location.href = '/';
      }, 1500);
    }, 2000);
  };

  const features = [
    { icon: <Shield className="w-5 h-5" />, text: 'Bank-level security' },
    { icon: <Zap className="w-5 h-5" />, text: 'Lightning-fast performance' },
    { icon: <TrendingUp className="w-5 h-5" />, text: 'Real-time analytics' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Notification Toast */}
      {notification.show && (
        <div className={`fixed top-4 right-4 z-50 flex items-center gap-3 px-6 py-4 rounded-xl shadow-lg border ${
          notification.type === 'success' 
            ? 'bg-green-50 border-green-200 text-green-800' 
            : 'bg-red-50 border-red-200 text-red-800'
        } animate-[slideIn_0.3s_ease-out]`}>
          <AlertCircle className="w-5 h-5" />
          <span className="font-medium">{notification.message}</span>
        </div>
      )}

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]">
          <div className="flex justify-center mb-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 via-indigo-500 to-blue-700 text-white font-semibold shadow-lg">
              <span className="text-xl tracking-tight">VC</span>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">
            Sign in to VERTEXCRM
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Modern CRM to manage your customers and deals
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Login Form */}
          <div className="bg-white py-10 px-8 shadow-xl rounded-2xl border border-gray-100 opacity-0 animate-[fadeIn_0.5s_ease-out_0.2s_forwards]">
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-gray-900">Welcome back</h3>
                <p className="text-sm text-gray-500 mt-1">Sign in to continue to your account</p>
              </div>

              {/* General Error Message */}
              {errors.general && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm flex items-center animate-[shake_0.3s_ease-out]">
                  <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span className="font-medium">{errors.general}</span>
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className={`block w-full pl-12 pr-4 py-3.5 border rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 transition-all ${
                      errors.email 
                        ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
                        : 'border-gray-300 focus:ring-indigo-500 focus:border-transparent'
                    }`}
                    placeholder="john@acme.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600 flex items-center animate-[slideDown_0.2s_ease-out]">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    required
                    className={`block w-full pl-12 pr-12 py-3.5 border rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 transition-all ${
                      errors.password 
                        ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
                        : 'border-gray-300 focus:ring-indigo-500 focus:border-transparent'
                    }`}
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-4 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-2 text-sm text-red-600 flex items-center animate-[slideDown_0.2s_ease-out]">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.password}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded cursor-pointer"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 cursor-pointer">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <button
                    type="button"
                    onClick={() => showNotification('Password reset feature coming soon!', 'success')}
                    className="font-semibold text-indigo-600 hover:text-indigo-500 transition-colors"
                  >
                    Forgot password?
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={loading}
                className="group relative w-full bg-gradient-to-r from-sky-600 via-indigo-600 to-blue-700 text-white py-3.5 px-6 rounded-xl font-semibold hover:shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Signing in...
                  </>
                ) : (
                  <>
                    Sign in
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>

            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500 font-medium">New to VERTEXCRM?</span>
                </div>
              </div>

              <div className="mt-6">
                <button
                  onClick={() => window.location.href = '/register'}
                  className="w-full flex justify-center items-center py-3.5 px-4 border-2 border-gray-300 rounded-xl text-sm font-semibold text-gray-700 bg-white hover:border-indigo-600 hover:text-indigo-600 transition-all"
                >
                  Create your account
                </button>
              </div>
            </div>
          </div>

          {/* Features Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 opacity-0 animate-[fadeIn_0.5s_ease-out_0.3s_forwards]">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Trusted by industry leaders
              </h3>
              <p className="text-gray-600">
                Join thousands of businesses using VERTEXCRM to accelerate their growth and close more deals.
              </p>
            </div>

            <div className="space-y-5 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-gradient-to-br from-indigo-50 to-sky-50 rounded-xl p-5 border border-indigo-100 transform hover:scale-105 transition-transform"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 text-white flex-shrink-0">
                    {feature.icon}
                  </div>
                  <span className="text-gray-900 font-semibold text-base">{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 rounded-xl p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-400 to-indigo-500 border-2 border-white" />
                  ))}
                </div>
                <div>
                  <p className="font-bold">10,000+ teams</p>
                  <p className="text-sm text-gray-300">Already using VERTEXCRM</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-yellow-400 mb-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-200 text-sm italic mb-3">
                "The best CRM we've ever used. Our sales team productivity increased by 40% in just 3 months!"
              </p>
              <p className="text-white font-semibold text-sm">— Michael Chen, VP of Sales</p>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div className="bg-gradient-to-br from-indigo-50 to-sky-50 rounded-xl p-4 border border-indigo-100">
                <p className="text-2xl font-bold text-indigo-600">98%</p>
                <p className="text-xs text-gray-600 mt-1">Satisfaction</p>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-sky-50 rounded-xl p-4 border border-indigo-100">
                <p className="text-2xl font-bold text-indigo-600">2.5x</p>
                <p className="text-xs text-gray-600 mt-1">ROI Growth</p>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-sky-50 rounded-xl p-4 border border-indigo-100">
                <p className="text-2xl font-bold text-indigo-600">24/7</p>
                <p className="text-xs text-gray-600 mt-1">Support</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 mt-8 opacity-0 animate-[fadeIn_0.5s_ease-out_0.4s_forwards]">
          <p>© 2025 VERTEXCRM. All rights reserved.</p>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
      `}</style>
    </div>
  );
}

export default Login;