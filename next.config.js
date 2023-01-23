/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
    images: {
        domains: ["res.cloudinary.com", "lh3.googleusercontent.com"],
    },
};

module.exports = nextConfig;