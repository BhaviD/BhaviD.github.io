module.exports = {
  siteTitle: 'Bhavi Dhingra | Software Dev Engineer',
  siteDescription:
    'Bhavi Dhingra is a Software Dev Engineer based in Bangalore, KA who specializes in building (and occasionally designing) exceptional websites, applications, and everything in between.',
  siteKeywords: 'Bhavi Dhingra, Bhavi, Dhingra, bhavidhingra, software engineer, backend engineer',
  siteUrl: 'https://bhavidhingra.com',
  siteLanguage: 'en_US',
  googleVerification: 'PACsFQvXge8i3XNMs_M-ATW3133o4Y2mXSJl_MMOX3Y',
  name: 'Bhavi Dhingra',
  location: 'Bangalore, KA',
  email: 'bhavi.dhingra@gmail.com',
  github: 'https://github.com/bhavidhingra',
  twitterHandle: '@bhavidhingra9',
  socialMedia: [
    {
      name: 'Leetcode',
      url: 'https://leetcode.com/bhavidhingra/',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/bhavidhingra',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/bhavidhingra/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/bhavidhingra/',
    },
  ],

  navLinks: [
    {
      name: '../about',
      url: '/#about',
    },
    {
      name: '../experience',
      url: '/#jobs',
    },
    {
      name: '../work',
      url: '/#projects',
    },
    {
      name: '../contact',
      url: '/#contact',
    },
    {
      name: '../blog',
      url: '/blog',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
