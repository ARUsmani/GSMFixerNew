// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     sassOptions: {
//       quietDeps: true, // Suppresses warnings from node_modules
//     },
//   };
  
//   export default nextConfig;
  

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    quietDeps: true, // Suppresses warnings from node_modules
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dlwhmnvqtpuselcwwdqt.supabase.co", // Supabase domain
        pathname: "/storage/v1/object/public/**",    // Allow access to the storage path
      },
      // {
      //   protocol: 'https',
      //   hostname: 'bootdey.com',
      //   pathname: '/img/Content/avatar/**', // Allows images from this path
      // },
    ],
  },
};

export default nextConfig;


