const responses = {
  services: {
    text: "Welcome to our AI-powered services! 🚀\n\nWe specialize in:\n\n◆ Agentic AI Systems\n◆ Machine Learning Solutions\n◆ Full-Stack Development\n◆ Business Intelligence\n\nWhich one catches your interest?",
    quickReplies: ["Agentic AI", "Machine Learning", "Full-Stack", "Contact"]
  },
  internship: {
    text: "Launch your career with us! 💼\n\nOur internship program offers:\n\n◆ 6-8 weeks intensive training\n◆ Real-world project experience\n◆ Expert mentorship\n◆ Professional certificate\n◆ Job placement opportunities\n\nReady to level up?",
    quickReplies: ["Apply Now", "Requirements", "Duration", "Contact"]
  },
  contact: {
    text: "Let's connect! 📱\n\n📧 Email: hello@nexariza.com\n📱 Phone: +92-XXX-XXXXXXX\n🌐 Web: nexariza.com\n📍 Location: Pakistan\n\nHow can we assist you?",
    quickReplies: ["Services", "Internship", "Pricing", "FAQ"]
  },
  pricing: {
    text: "Flexible pricing for everyone 💎\n\n◆ Starter: $49/mo\n◆ Pro: $99/mo\n◆ Enterprise: Custom\n\nAll plans include 24/7 support.",
    quickReplies: ["Compare Plans", "Free Trial", "Contact", "Services"]
  },
  default: {
    text: "Hello there! 👋 I'm Nexariza AI. How may I help you today?",
    quickReplies: ["Services", "Internship", "Contact", "Pricing"]
  },
  "apply now": {
    text: "Awesome choice! 🎯\n\nTo apply:\n1. Visit nexariza.com/internship\n2. Complete the application\n3. Submit your portfolio\n4. Await response (2-3 days)\n\nGood luck!",
    quickReplies: ["Services", "Contact", "FAQ", "Pricing"]
  },
  requirements: {
    text: "Here's what you need 📋\n\n◆ Basic coding knowledge\n◆ Laptop + Internet\n◆ 10-15 hours/week\n◆ Passion to learn\n\nNo prior experience required!",
    quickReplies: ["Apply Now", "Duration", "Services", "Contact"]
  },
  duration: {
    text: "Program timeline 📅\n\n◆ Weeks 1-2: Foundations\n◆ Weeks 3-4: Projects\n◆ Weeks 5-6: Advanced\n◆ Weeks 7-8: Capstone\n\nFlexible scheduling available!",
    quickReplies: ["Apply Now", "Requirements", "Services", "Contact"]
  },
  faq: {
    text: "Quick answers 🤔\n\n◆ Paid? → No, it's free\n◆ Remote? → Yes!\n◆ Certificate? → Yes\n◆ Job? → Potential opportunity\n\nMore questions?",
    quickReplies: ["Services", "Internship", "Contact", "Pricing"]
  }
};

export const getAIResponse = (message) => {
  const lowerMessage = message.toLowerCase().trim();
  
  for (const [key, value] of Object.entries(responses)) {
    if (lowerMessage.includes(key)) {
      return value;
    }
  }
  
  return responses.default;
};

export const formatTimestamp = (date) => {
  return new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  }).format(date);
};
