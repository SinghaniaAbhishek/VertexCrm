import { useState } from 'react';
import { 
  Building2, 
  User, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  BarChart3, 
  ArrowRight,
  CheckCircle,
  Shield,
  Zap,
  AlertCircle
} from 'lucide-react';

function Register() {
  const [formData, setFormData] = useState({
    orgName: '',
    orgEmail: '',
    adminName: '',
    adminEmail: '',
    adminPassword: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [notification, setNotification] = useState({ show: false, message: '', type: '' });

  const showNotification = (message, type = 'error') => {
    setNotification({ show: true, message, type });
    setTimeout(() => setNotification({ show: false, message: '', type: '' }), 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.adminPassword !== formData.confirmPassword) {
      showNotification('Passwords do not match');
      return;
    }

    if (formData.adminPassword.length < 6) {
      showNotification('Password must be at least 6 characters');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      showNotification('Organization created successfully! Redirecting to login...', 'success');
      setLoading(false);
      setTimeout(() => {
        window.location.href = '/login';
      }, 1500);
    }, 2000);
  };

  const nextStep = () => {
    if (currentStep === 1) {
      if (!formData.orgName || !formData.orgEmail) {
        showNotification('Please fill in all organization details');
        return;
      }
    }
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const benefits = [
    { icon: <Shield className="w-5 h-5" />, text: 'Enterprise-grade security' },
    { icon: <Zap className="w-5 h-5" />, text: 'Instant setup in minutes' },
    { icon: <BarChart3 className="w-5 h-5" />, text: 'Advanced analytics included' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
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
        <div className="text-center mb-8 opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]">
          <div className="flex justify-center mb-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 via-indigo-500 to-blue-700 text-white font-semibold shadow-lg">
              <span className="text-xl tracking-tight">VC</span>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">
            Create your organization
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Set up your VERTEXCRM workspace in just a few steps
          </p>
        </div>

        <div className="flex items-center justify-center space-x-4 mb-8 opacity-0 animate-[fadeIn_0.5s_ease-out_0.1s_forwards]">
          {[1, 2].map((step) => (
            <div key={step} className="flex items-center">
              <div className={`flex h-10 w-10 items-center justify-center rounded-full transition-all ${
                currentStep >= step 
                  ? 'bg-gradient-to-r from-sky-600 to-indigo-600 text-white shadow-lg' 
                  : 'bg-gray-200 text-gray-500'
              }`}>
                {currentStep > step ? (
                  <CheckCircle className="h-5 w-5" />
                ) : (
                  <span className="text-sm font-semibold">{step}</span>
                )}
              </div>
              {step < 2 && (
                <div className={`w-20 h-1 mx-2 rounded-full transition-all ${
                  currentStep > step ? 'bg-gradient-to-r from-sky-600 to-indigo-600' : 'bg-gray-200'
                }`} />
              )}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden opacity-0 animate-[fadeIn_0.5s_ease-out_0.2s_forwards]">
          <div className="grid lg:grid-cols-2">
            {/* Left Side - Form */}
            <div className="p-10 lg:p-12">
              <div className="space-y-6">
                {currentStep === 1 && (
                  <div className="space-y-6 animate-[slideIn_0.3s_ease-out]">
                    <div className="mb-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-50 to-sky-50 mb-4">
                        <Building2 className="h-8 w-8 text-indigo-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">Organization Details</h3>
                      <p className="text-sm text-gray-500 mt-2">Tell us about your organization</p>
                    </div>

                    <div>
                      <label htmlFor="orgName" className="block text-sm font-semibold text-gray-700 mb-2">
                        Organization Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Building2 className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          id="orgName"
                          name="orgName"
                          type="text"
                          required
                          className="block w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                          placeholder="Acme Corporation"
                          value={formData.orgName}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="orgEmail" className="block text-sm font-semibold text-gray-700 mb-2">
                        Organization Email
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          id="orgEmail"
                          name="orgEmail"
                          type="email"
                          required
                          className="block w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                          placeholder="hello@acme.com"
                          value={formData.orgEmail}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={nextStep}
                      className="w-full bg-gradient-to-r from-sky-600 via-indigo-600 to-blue-700 text-white py-3.5 px-6 rounded-xl font-semibold hover:shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center"
                    >
                      Continue
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </button>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-6 animate-[slideIn_0.3s_ease-out]">
                    <div className="mb-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-50 to-sky-50 mb-4">
                        <User className="h-8 w-8 text-indigo-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">Admin Account</h3>
                      <p className="text-sm text-gray-500 mt-2">Create your administrator account</p>
                    </div>

                    <div>
                      <label htmlFor="adminName" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          id="adminName"
                          name="adminName"
                          type="text"
                          required
                          className="block w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                          placeholder="John Doe"
                          value={formData.adminName}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="adminEmail" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          id="adminEmail"
                          name="adminEmail"
                          type="email"
                          required
                          className="block w-full pl-12 pr-4 py-3.5 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                          placeholder="john@acme.com"
                          value={formData.adminEmail}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="adminPassword" className="block text-sm font-semibold text-gray-700 mb-2">
                        Password
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Lock className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          id="adminPassword"
                          name="adminPassword"
                          type={showPassword ? 'text' : 'password'}
                          required
                          minLength={6}
                          className="block w-full pl-12 pr-12 py-3.5 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                          placeholder="••••••••"
                          value={formData.adminPassword}
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
                    </div>

                    <div>
                      <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700 mb-2">
                        Confirm Password
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Lock className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          id="confirmPassword"
                          name="confirmPassword"
                          type={showConfirmPassword ? 'text' : 'password'}
                          required
                          minLength={6}
                          className="block w-full pl-12 pr-12 py-3.5 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                          placeholder="••••••••"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                        />
                        <button
                          type="button"
                          className="absolute inset-y-0 right-0 pr-4 flex items-center"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                          {showConfirmPassword ? (
                            <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
                          ) : (
                            <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="flex-1 bg-white border-2 border-gray-300 text-gray-700 py-3.5 px-6 rounded-xl font-semibold hover:border-indigo-600 hover:text-indigo-600 transition-all"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={loading}
                        className="flex-1 bg-gradient-to-r from-sky-600 via-indigo-600 to-blue-700 text-white py-3.5 px-6 rounded-xl font-semibold hover:shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {loading ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                            Creating...
                          </>
                        ) : (
                          <>
                            Create Account
                            <ArrowRight className="h-5 w-5 ml-2" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}

                <div className="mt-8">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-white text-gray-500 font-medium">Already have an account?</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <button
                      onClick={() => window.location.href = '/login'}
                      className="w-full flex justify-center items-center py-3.5 px-4 border-2 border-gray-300 rounded-xl text-sm font-semibold text-gray-700 bg-white hover:border-indigo-600 hover:text-indigo-600 transition-all"
                    >
                      Sign in instead
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Benefits */}
            <div className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 p-10 lg:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Why choose VERTEXCRM?
                </h3>
                <p className="text-gray-300">
                  Join 10,000+ teams streamlining their sales.
                </p>
              </div>

              <div className="space-y-4 mb-6">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-sky-500 to-indigo-600 text-white flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <span className="text-white font-semibold">{benefit.text}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                <div className="flex items-center gap-1 text-yellow-400 mb-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-200 text-sm italic mb-2">
                  "Transformed our sales pipeline. Highly recommended!"
                </p>
                <p className="text-white font-semibold text-sm">— Sarah Johnson, Sales Director</p>
              </div>
            </div>
          </div>
        </div>

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
      `}</style>
    </div>
  );
}

export default Register;