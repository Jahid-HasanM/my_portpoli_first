import React, { useState } from 'react';

const Pricing = () => {
  // State to toggle between Monthly and Yearly billing
  const [isYearly, setIsYearly] = useState(false);

  // Pricing data - easy to move to a backend/MongoDB later
  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for freelancers and hobbyists looking to build a digital presence.',
      priceMonthly: 19,
      priceYearly: 15, // Price per month when billed yearly
      features: ['3 Projects', 'Basic Analytics', 'Community Support', '10GB Storage'],
      isPopular: false,
      buttonText: 'Get Started',
    },
    {
      name: 'Pro',
      description: 'Ideal for growing businesses and full-time developers needing advanced tools.',
      priceMonthly: 49,
      priceYearly: 39,
      features: ['Unlimited Projects', 'Advanced Analytics', '24/7 Priority Support', '100GB Storage', 'Custom Domains'],
      isPopular: true, // Highlights this card
      buttonText: 'Upgrade to Pro',
    },
    {
      name: 'Enterprise',
      description: 'Tailored solutions for large-scale applications and massive teams.',
      priceMonthly: 99,
      priceYearly: 79,
      features: ['Everything in Pro', 'Dedicated Account Manager', 'Custom SLA', 'Unlimited Storage', 'SSO Authentication'],
      isPopular: false,
      buttonText: 'Contact Sales',
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold sm:text-5xl bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          Flexible Pricing Plans
        </h2>
        <p className="mt-4 text-xl text-gray-400">
          Choose the plan that fits your needs. Scale up or down anytime.
        </p>

        {/* Toggle Switch */}
        <div className="mt-8 flex justify-center items-center gap-4">
          <span className={`text-sm font-semibold ${!isYearly ? 'text-blue-400' : 'text-gray-400'}`}>Monthly</span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="w-14 h-8 flex items-center bg-gray-700 rounded-full p-1 duration-300 cursor-pointer"
          >
            <div
              className={`bg-gradient-to-r from-blue-500 to-emerald-500 w-6 h-6 rounded-full shadow-md transform duration-300 ${
                isYearly ? 'translate-x-6' : ''
              }`}
            ></div>
          </button>
          <span className={`text-sm font-semibold ${isYearly ? 'text-emerald-400' : 'text-gray-400'}`}>
            Yearly <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full ml-1">Save ~20%</span>
          </span>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch w-full">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative flex flex-col justify-between p-8 rounded-2xl bg-gray-800 border transition-all duration-300 hover:-translate-y-2 ${
              plan.isPopular
                ? 'border-blue-500 shadow-2xl shadow-blue-500/10 scale-105 z-10'
                : 'border-gray-700 hover:border-gray-600'
            }`}
          >
            {/* Popular Badge */}
            {plan.isPopular && (
              <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-emerald-500 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                Most Popular
              </span>
            )}

            <div>
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm min-h-[60px]">{plan.description}</p>
              
              {/* Price */}
              <div className="mt-6 flex items-baseline text-white">
                <span className="text-5xl font-extrabold tracking-tight">
                  ${isYearly ? plan.priceYearly : plan.priceMonthly}
                </span>
                <span className="ml-1 text-xl font-semibold text-gray-400">/mo</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {isYearly ? `Billed $${plan.priceYearly * 12} annually` : 'Billed monthly'}
              </p>

              {/* Features List */}
              <ul className="mt-8 space-y-4 border-t border-gray-700 pt-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                    <svg
                      className="h-5 w-5 text-emerald-400 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <button
              className={`mt-8 w-full py-3 px-4 rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer ${
                plan.isPopular
                  ? 'bg-gradient-to-r from-blue-500 to-emerald-500 text-white hover:opacity-90 shadow-lg'
                  : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
              }`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;