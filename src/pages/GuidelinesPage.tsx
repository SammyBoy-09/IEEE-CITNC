import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const steps = [
  {
    title: "Step 1: Account Creation",
    body: `Go to the website: https://www.ieee.org/ and proceed to create an account.\n\nJoin as Student, create an account, and fill in your name, E-mail and create a password.\n\nRemember your password. For further uses.\n\nYou'll receive a verification code by email — check your inbox and spam folder.`,
  },
  {
    title: "Step 2: Personal Information",
    body: `Follow exactly what's shown (some fields MUST match).\n\nOrganization/Dept Name: Cambridge Inst Of Tech North Campus\n\nAddress Type: University/College\n\nAddress Line 1: Sy. No. 73, Lingadheera Gollahalli\n\nAddress Line 2: Kundana\n\nAddress Line 3: -----\n\nFill in City, State, and Pincode: 562110`,
  },
  {
    title: "Step 3: Academic & Login Details",
    body: `In the search bar, select Cambridge Institute of Tech – North Campus (important: choose NORTH campus).\n\nDegree: BE\n\nSelect your Academic Program.\n\nEnter your tentative graduation month and the correct graduation year based on your semester.\n\nFor "Is your university accredited?" select Do Not Know.\n\nChoose any reasons for joining.\n\nReferring Member Name:\n Dr. R. Rajaramakrishna\n\nReferral Number: 101654393`,
  },
  {
    title: "Step 4: Payment & Receipt",
    body: `Proceed to payment as usual.\n\nAfter payment, you'll receive a receipt — save it and also email yourself a copy for records.`,
  },
];

const GuidelinesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header with back button */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors duration-300"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium">Back to Home</span>
          </button>
        </div>
      </div>

      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Guidelines for Membership
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Follow these steps to join IEEE and become part of the world's largest technical professional organization
            </p>
          </motion.div>

          <div className="rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #06b6d4 100%)' }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  className="relative bg-white rounded-xl shadow-xl overflow-visible p-6 pt-12"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55, delay: idx * 0.12 }}
                  whileHover={{ scale: 1.02 }}
                  style={{
                    WebkitBackdropFilter: 'blur(6px)',
                    backdropFilter: 'blur(6px)'
                  }}
                >
                  {/* Top semicircle with number */}
                  <motion.div
                    className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-36 h-18 rounded-b-full flex items-center justify-center text-white font-bold text-2xl shadow-2xl"
                    initial={{ scale: 0.96 }}
                    animate={{ scale: [0.97, 1.03, 0.97], boxShadow: ['0 8px 20px rgba(0,0,0,0.12)', '0 16px 36px rgba(0,0,0,0.18)', '0 8px 20px rgba(0,0,0,0.12)'] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                    style={{
                      background: idx === 0 ? 'linear-gradient(180deg, #1e3a8a, #2563eb)' : idx === 1 ? 'linear-gradient(180deg, #2563eb, #3b82f6)' : idx === 2 ? 'linear-gradient(180deg, #3b82f6, #0ea5e9)' : 'linear-gradient(180deg, #0ea5e9, #06b6d4)'
                    }}
                  >
                    <span className="text-white">{idx + 1}</span>
                  </motion.div>

                  <div className="mt-2">
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-600 whitespace-pre-line">{step.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-12 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <h3 className="text-xl font-bold text-white mb-4">Need Help?</h3>
              <p className="text-sm text-white/90 break-words mb-4">
                If you need help during the process, contact your Membership development chair <strong>Srushti T</strong>.
              </p>
              <p className="text-sm text-white/90">
                For IEEE queries, visit the official website{' '}
                <a href="https://www.ieee.org/" target="_blank" rel="noopener noreferrer" className="underline font-semibold hover:text-white transition-colors">
                  https://www.ieee.org/
                </a>
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GuidelinesPage;
