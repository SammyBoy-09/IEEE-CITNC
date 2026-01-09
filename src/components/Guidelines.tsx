import { motion } from "framer-motion";

const steps: Array<{ title: string; body: string | JSX.Element }> = [
  {
    title: "Step 1: Account Creation",
    body: (
      <>
        <strong>Go to the website: <span className="text-blue-600 underline">https://www.ieee.org/</span> and proceed to create an account.</strong>
        <br /><br />
        Join as Student, create an account, and fill in your name, E-mail and create a password.
        <br /><br />
        Remember your password. For further uses.
        <br /><br />
        You'll receive a verification code by email — check your inbox and spam folder.
      </>
    ),
  },
  {
    title: "Step 2: Personal Information",
    body: (
      <>
        Follow exactly what's shown (some fields MUST match).
        <br /><br />
        <strong>Organization/Dept Name: Cambridge Inst Of Tech North Campus</strong>
        <br /><br />
        <strong>Address Type: University/College</strong>
        <br /><br />
        <strong>Address Line 1: Sy. No. 73, Lingadheera Gollahalli</strong>
        <br /><br />
        <strong>Address Line 2: Kundana</strong>
        <br /><br />
        <strong>Address Line 3: -----</strong>
        <br /><br />
        <strong>Fill in City, State, and Pincode: 562110</strong>
      </>
    ),
  },
  {
    title: "Step 3: Academic & Login Details",
    body: `In the search bar, select Cambridge Institute of Tech – North Campus (important: choose NORTH campus).\n\nDegree: BE\n\nSelect your Academic Program.\n\nEnter your tentative graduation month and the correct graduation year based on your semester.\n\nFor "Is your university accredited?" select Do Not Know.\n\nChoose any reasons for joining.\n\nReferring Member Name: Dr. R. Rajaramakrishna`,
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
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
          Guidelines for Membership
        </h2>

        <div className="rounded-2xl p-8" style={{ background: 'linear-gradient(135deg,#00c6ff 0%,#0072ff 45%,#0047b3 100%)' }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="relative bg-white rounded-xl shadow-xl overflow-visible p-6 pt-12 h-full flex flex-col"
                style={{
                  minHeight: '380px'
                }}
              >
                {/* Top semicircle with number */}
                <div
                  className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-36 h-18 rounded-b-full flex items-center justify-center text-white font-bold text-2xl shadow-2xl"
                  style={{
                    background: idx === 0 ? 'linear-gradient(180deg,#00e0ff,#0066ff)' : idx === 1 ? 'linear-gradient(180deg,#6fd3ff,#0077e6)' : idx === 2 ? 'linear-gradient(180deg,#3dd1ff,#006ee6)' : 'linear-gradient(180deg,#7ecbff,#0047b3)'
                  }}
                >
                  <span className="text-white">{idx + 1}</span>
                </div>

                <div className="mt-2">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{step.title}</h3>
                  <div className="text-sm text-slate-600">
                    {typeof step.body === 'string' ? (
                      <p className="whitespace-pre-line">{step.body}</p>
                    ) : (
                      step.body
                    )}
                  </div>
                </div>
              </div>
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
