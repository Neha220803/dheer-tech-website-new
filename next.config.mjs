/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/about-us.php",
        destination: "/about",
        permanent: true, // 301 redirect
      },
      {
        source: "/services.php",
        destination: "/our-services",
        permanent: true,
      },
      {
        source: "/branding.php",
        destination: "/our-services",
        permanent: true,
      },
      {
        source: "/contact-us.php",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
