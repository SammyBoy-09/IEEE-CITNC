import { motion } from "framer-motion";

const steps = [
  {
    title: "Step 1: Account Creation",
    body: `Go to the website: https://www.ieee.org/ and proceed to create an account.\n\nJoin as Student, create an account, and fill in your name, E-mail and create a password.\n\nRemember your password. For further uses.\n\nYou’ll receive a verification code by email — check your inbox and spam folder.`,
  },
  {
    title: "Step 2: Personal Information",
    body: `Follow exactly what’s shown (some fields MUST match).\n\nOrganization/Dept Name: Cambridge Inst Of Tech North Campus\n\nAddress Type: University/College\n\nAddress Line 1: Sy. No. 73, Lingadheera Gollahalli\n\nAddress Line 2: Kundana\n\nAddress Line 3: -----\n\nFill in City, State, and Pincode: 562110`,
  },
  {
    title: "Step 3: Academic & Login Details",
    body: `In the search bar, select Cambridge Institute of Tech – North Campus (important: choose NORTH campus).\n\nDegree: BE\n\nSelect your Academic Program.\n\nEnter your tentative graduation month and the correct graduation year based on your semester.\n\nFor “Is your university accredited?” select Do Not Know.\n\nChoose any reasons for joining.\n\nReferring Member Name: Dr. R. Rajaramakrishna\n\nReferral Number: 10165439`,
  },
  {
    title: "Step 4: Payment & Receipt",
    body: `Proceed to payment as usual.\n\nAfter payment, you’ll receive a receipt — save it and also email yourself a copy for records.`,
  },
];

const Guidelines = () => {
  return (
    <section id="guidelines" className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-foreground mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Guidelines for Membership
        </motion.h2>

        <div className="rounded-2xl p-8" style={{ background: 'linear-gradient(135deg,#00c6ff 0%,#0072ff 45%,#0047b3 100%)' }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                className="relative bg-white rounded-xl shadow-xl overflow-visible p-6 pt-12 h-full flex flex-col"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: idx * 0.12 }}
                whileHover={{ scale: 1.02 }}
                style={{
                  WebkitBackdropFilter: 'blur(6px)',
                  backdropFilter: 'blur(6px)',
                  minHeight: '380px'
                }}
              >
                {/* Top semicircle with number */}
                <motion.div
                  className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-36 h-18 rounded-b-full flex items-center justify-center text-white font-bold text-2xl shadow-2xl"
                  initial={{ scale: 0.96 }}
                  animate={{ scale: [0.97, 1.03, 0.97], boxShadow: ['0 8px 20px rgba(0,0,0,0.12)', '0 16px 36px rgba(0,0,0,0.18)', '0 8px 20px rgba(0,0,0,0.12)'] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                  style={{
                    background: idx === 0 ? 'linear-gradient(180deg,#00e0ff,#0066ff)' : idx === 1 ? 'linear-gradient(180deg,#6fd3ff,#0077e6)' : idx === 2 ? 'linear-gradient(180deg,#3dd1ff,#006ee6)' : 'linear-gradient(180deg,#7ecbff,#0047b3)'
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

          <p className="mt-8 text-sm text-white/90 break-words">
            If you need help during the process, contact your Membership development chair <strong>Srushti T</strong>.
            For More information, visit the official website{' '}
            <a href="https://www.ieee.org/" target="_blank" rel="noopener noreferrer" className="underline font-semibold">https://www.ieee.org/</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Guidelines;
