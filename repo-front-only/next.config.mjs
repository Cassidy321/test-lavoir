/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/auth/signup',
                destination: 'http://boiweb.fr/api/api/auth/signup',
            },
            {
                source: '/api/auth/login',
                destination: 'http://boiweb.fr/api/api/auth/login',
            },
        ];
    },
};

export default nextConfig;
