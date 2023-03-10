/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
    async redirects() {
        return [{
            source: "/canceled",
            destination: "/",
            permanent: true,
        }, ];
    },
    images: {
        domains: ["res.cloudinary.com", "lh3.googleusercontent.com"],
    },
};

module.exports = nextConfig;