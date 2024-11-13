/** @type {import('next').NextConfig} */
const nextConfig = {};

// next.config.mjs
export default {
    async rewrites() {
      return [
        {
          source: "/",
          destination: "/index.html",
        },
        {
            source: "/about-us",
            destination: "/about-us/index.html",
          },
          {
            source: "/404",
            destination: "/404/index.html",
          },
          {
            source: "/contact-us",
            destination: "/contact-us/indexcontact.html",
          },
      ];
    },
  };
