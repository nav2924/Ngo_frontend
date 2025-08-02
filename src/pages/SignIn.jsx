import React, { useState } from 'react';
import { Eye, EyeOff, Heart, Shield, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign in logic here
    console.log('Sign in attempt:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-health-light via-white to-blue-50 flex items-center justify-center p-4">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-health-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-health-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Left side - Hero content */}
        <div className="hidden lg:block space-y-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-health-primary rounded-xl">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900">
                HealthCare NGO
              </h1>
            </div>
            
            <h2 className="text-3xl font-semibold text-gray-800 leading-tight">
              Making Healthcare
              <span className="text-health-primary block">Accessible to All</span>
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Join our mission to provide quality healthcare services to communities in need. 
              Our platform connects healthcare professionals, volunteers, and patients for better health outcomes.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 gap-6">
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-health-secondary/20 rounded-lg">
                <Shield className="w-6 h-6 text-health-secondary" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Secure & Private</h3>
                <p className="text-gray-600">Your health data is protected with enterprise-grade security</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-health-primary/20 rounded-lg">
                <Users className="w-6 h-6 text-health-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Community Focused</h3>
                <p className="text-gray-600">Built for NGOs and healthcare workers serving communities</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-health-primary">500+</div>
              <div className="text-sm text-gray-600">Healthcare Workers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-health-secondary">10K+</div>
              <div className="text-sm text-gray-600">Patients Served</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-health-primary">50+</div>
              <div className="text-sm text-gray-600">Communities</div>
            </div>
          </div>
        </div>

        {/* Right side - Sign in form */}
        <div className="flex justify-center">
          <Card className="w-full max-w-md health-card-shadow border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="space-y-1 text-center">
              <div className="mx-auto p-3 bg-health-primary rounded-full w-fit">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Welcome Back
              </CardTitle>
              <CardDescription className="text-gray-600">
                Sign in to your HealthCare NGO account
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 font-medium">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="h-12 border-gray-300 focus:border-health-primary focus:ring-health-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-gray-700 font-medium">
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                      className="h-12 pr-12 border-gray-300 focus:border-health-primary focus:ring-health-primary"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <input
                      id="rememberMe"
                      name="rememberMe"
                      type="checkbox"
                      checked={formData.rememberMe}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-health-primary border-gray-300 rounded focus:ring-health-primary"
                    />
                    <Label htmlFor="rememberMe" className="text-sm text-gray-600">
                      Remember me
                    </Label>
                  </div>
                  <a href="#" className="text-sm text-health-primary hover:text-health-dark font-medium">
                    Forgot password?
                  </a>
                </div>

                <Button
                  type="submit"
                  variant="health"
                  size="lg"
                  className="w-full h-12 text-base font-semibold"
                >
                  Sign In
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>

                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Don't have an account?{' '}
                    <a href="#" className="text-health-primary hover:text-health-dark font-medium">
                      Contact your administrator
                    </a>
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-sm text-gray-500">
          © 2025 HealthCare NGO. All rights reserved.
        </p>
      </div>
    </div>
  );
} 