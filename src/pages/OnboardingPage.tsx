import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lock, Eye, EyeOff, CheckCircle, Users, Target, BookOpen, Trophy, Play, RotateCcw } from 'lucide-react';
import Button from '../components/Button';

const OnboardingPage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [currentStep, setCurrentStep] = useState(0);
  const [videoWatched, setVideoWatched] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<{ [key: number]: string }>({});
  const [quizScore, setQuizScore] = useState(0);
  const [showQuizResults, setShowQuizResults] = useState(false);

  // Check if user is already authenticated
  useEffect(() => {
    const savedAuth = localStorage.getItem('onboardingAuth');
    if (savedAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  // Simple password protection - in production, this should be more secure
  const ONBOARDING_PASSWORD = 'thrive2024';

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ONBOARDING_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem('onboardingAuth', 'true');
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('onboardingAuth');
    setPassword('');
    setCurrentStep(0);
    setVideoWatched(false);
    setQuizCompleted(false);
    setQuizAnswers({});
    setQuizScore(0);
    setShowQuizResults(false);
  };

  const quizQuestions = [
    {
      question: "What is the primary mission of ThriveConnect?",
      options: [
        "To provide temporary shelter for survivors",
        "To create a bridge between survivors and meaningful career opportunities",
        "To offer legal services to survivors",
        "To provide counseling services only"
      ],
      correct: 1
    },
    {
      question: "Which of the following is a key component of the ThriveConnect journey?",
      options: [
        "Skills assessment and training opportunities",
        "Career matching and ongoing support",
        "Continuous mentorship and resources",
        "All of the above"
      ],
      correct: 3
    },
    {
      question: "What type of companies does ThriveConnect partner with?",
      options: [
        "Only tech companies",
        "Small local businesses exclusively",
        "Forward-thinking companies with high-demand roles",
        "Non-profit organizations only"
      ],
      correct: 2
    },
    {
      question: "What is the ultimate goal of ThriveConnect's programs?",
      options: [
        "Short-term employment placement",
        "Building enduring financial independence that ends generational cycles of exploitation",
        "Providing one-time job training",
        "Connecting survivors with temporary work"
      ],
      correct: 1
    },
    {
      question: "How does ThriveConnect support survivors throughout their career development?",
      options: [
        "Only during the initial placement",
        "Through continuous support, mentorship, and resources",
        "By providing financial assistance only",
        "Through legal advocacy exclusively"
      ],
      correct: 1
    }
  ];

  const handleVideoComplete = () => {
    setVideoWatched(true);
  };

  const handleQuizAnswer = (questionIndex: number, answer: string) => {
    setQuizAnswers(prev => ({
      ...prev,
      [questionIndex]: answer
    }));
  };

  const submitQuiz = () => {
    let score = 0;
    quizQuestions.forEach((question, index) => {
      if (quizAnswers[index] === question.options[question.correct]) {
        score++;
      }
    });
    setQuizScore(score);
    setShowQuizResults(true);
    if (score >= 3) { // Need at least 3/5 correct to pass
      setQuizCompleted(true);
    }
  };

  const retakeQuiz = () => {
    setQuizAnswers({});
    setQuizScore(0);
    setShowQuizResults(false);
    setQuizCompleted(false);
  };

  const canProceedToNext = () => {
    if (currentStep === 1 && !videoWatched) return false;
    if (currentStep === 2 && !quizCompleted) return false;
    return true;
  };

  const onboardingSteps = [
    {
      title: "Welcome to ThriveConnect",
      icon: <Users className="text-primary-600" size={48} />,
      content: "Welcome to the ThriveConnect onboarding experience. We're here to guide you through connecting with meaningful career opportunities."
    },
    {
      title: "Our Mission",
      icon: <Target className="text-primary-600" size={48} />,
      content: "Our mission is to create a bridge between survivors of human trafficking and meaningful career opportunities at forward-thinking companies."
    },
    {
      title: "Your Journey",
      icon: <BookOpen className="text-primary-600" size={48} />,
      content: "Your journey with us includes skills assessment, training opportunities, career matching, and ongoing support throughout your career development."
    },
    {
      title: "Success & Support",
      icon: <Trophy className="text-primary-600" size={48} />,
      content: "We're committed to your long-term success. Our team provides continuous support, mentorship, and resources to help you thrive in your chosen career path."
    }
  ];

  const renderStepContent = () => {
    switch (currentStep) {
      case 1: // Video step
        return (
          <div className="space-y-6">
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
              {onboardingSteps[currentStep].content}
            </p>
            <div className="bg-gray-100 rounded-lg p-6">
              <div className="aspect-video bg-gray-900 rounded-lg relative mb-4">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="text-white w-16 h-16 opacity-80" />
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <div className="h-2 bg-white/30 rounded-full">
                      <div className="h-2 bg-white rounded-full w-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Introduction to ThriveConnect
                </h3>
                <p className="text-gray-600 mb-4">
                  Watch this 5-minute video to learn about our mission and how we support survivors.
                </p>
                {!videoWatched ? (
                  <Button onClick={handleVideoComplete} className="mx-auto">
                    <Play className="mr-2" size={16} />
                    Watch Video (Demo)
                  </Button>
                ) : (
                  <div className="flex items-center justify-center text-green-600">
                    <CheckCircle className="mr-2" size={20} />
                    Video completed!
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      
      case 2: // Quiz step
        return (
          <div className="space-y-6">
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
              {onboardingSteps[currentStep].content}
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                Knowledge Check Quiz
              </h3>
              <p className="text-gray-600 mb-6 text-center">
                Answer these questions to test your understanding. You need at least 3/5 correct to proceed.
              </p>
              
              {!showQuizResults ? (
                <div className="space-y-6">
                  {quizQuestions.map((question, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-medium text-gray-800 mb-3">
                        {index + 1}. {question.question}
                      </h4>
                      <div className="space-y-2">
                        {question.options.map((option, optionIndex) => (
                          <label key={optionIndex} className="flex items-center space-x-3 cursor-pointer">
                            <input
                              type="radio"
                              name={`question-${index}`}
                              value={option}
                              checked={quizAnswers[index] === option}
                              onChange={(e) => handleQuizAnswer(index, e.target.value)}
                              className="text-primary-600 focus:ring-primary-500"
                            />
                            <span className="text-gray-700">{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                  
                  <div className="text-center">
                    <Button
                      onClick={submitQuiz}
                      disabled={Object.keys(quizAnswers).length < quizQuestions.length}
                      className="mx-auto"
                    >
                      Submit Quiz
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <div className={`p-6 rounded-lg ${quizCompleted ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                    {quizCompleted ? (
                      <CheckCircle className="text-green-600 mx-auto mb-4" size={48} />
                    ) : (
                      <RotateCcw className="text-red-600 mx-auto mb-4" size={48} />
                    )}
                    <h3 className={`text-xl font-bold mb-2 ${quizCompleted ? 'text-green-800' : 'text-red-800'}`}>
                      {quizCompleted ? 'Quiz Passed!' : 'Quiz Failed'}
                    </h3>
                    <p className={`mb-4 ${quizCompleted ? 'text-green-700' : 'text-red-700'}`}>
                      You scored {quizScore} out of {quizQuestions.length}
                    </p>
                    {!quizCompleted && (
                      <Button onClick={retakeQuiz} className="mx-auto">
                        <RotateCcw className="mr-2" size={16} />
                        Retake Quiz
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      
      default:
        return (
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            {onboardingSteps[currentStep].content}
          </p>
        );
    }
  };

  if (!isAuthenticated) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center"
      >
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full mx-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-center mb-8"
          >
            <div className="bg-primary-100 rounded-full p-4 w-20 h-20 mx-auto mb-4">
              <Lock className="text-primary-600 w-12 h-12" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Access Onboarding
            </h1>
            <p className="text-gray-600">
              Enter the password to access the onboarding portal
            </p>
          </motion.div>

          <form onSubmit={handlePasswordSubmit} className="space-y-6">
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-200"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg p-3"
              >
                {error}
              </motion.div>
            )}

            <Button
              type="submit"
              className="w-full"
              size="lg"
            >
              Access Onboarding
            </Button>
          </form>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-20"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-500 text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Welcome to Your Journey
              </h1>
              <p className="text-xl opacity-90">
                Let's get you started on your path to meaningful career opportunities
              </p>
            </motion.div>
            {/* <Button
              onClick={handleLogout}
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-gray-900"
            >
              Logout
            </Button> */}
          </div>
        </div>
      </div>

      {/* Onboarding Steps */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium text-gray-600">
                Step {currentStep + 1} of {onboardingSteps.length}
              </span>
              <span className="text-sm font-medium text-gray-600">
                {Math.round(((currentStep + 1) / onboardingSteps.length) * 100)}% Complete
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                className="bg-gradient-to-r from-primary-600 to-secondary-500 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${((currentStep + 1) / onboardingSteps.length) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </div>
          </div>

          {/* Current Step Content */}
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl p-8 shadow-lg mb-8"
          >
            <div className="text-center mb-8">
              <div className="bg-primary-50 rounded-full p-6 w-24 h-24 mx-auto mb-6">
                {onboardingSteps[currentStep].icon}
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {onboardingSteps[currentStep].title}
              </h2>
              {renderStepContent()}
            </div>

            {currentStep === onboardingSteps.length - 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
              >
                <CheckCircle className="text-green-600 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold text-green-800 mb-2">
                  Onboarding Complete!
                </h3>
                <p className="text-green-700">
                  You're all set to begin your journey with ThriveConnect. Our team will be in touch soon.
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <Button
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
              variant="outline"
              className="px-6"
            >
              Previous
            </Button>
            
            <div className="flex space-x-2">
              {onboardingSteps.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentStep(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentStep
                      ? 'bg-primary-600 scale-110'
                      : index < currentStep
                      ? 'bg-primary-300'
                      : 'bg-gray-300'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            <Button
              onClick={() => setCurrentStep(Math.min(onboardingSteps.length - 1, currentStep + 1))}
              disabled={currentStep === onboardingSteps.length - 1 || !canProceedToNext()}
              className="px-6"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default OnboardingPage; 