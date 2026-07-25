/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 린트는 모노레포 루트의 ESLint 설정(`pnpm lint`)으로 일원화한다.
  // Next 빌드가 자체 ESLint를 돌리지 않도록 해서 설정 중복/경고를 피한다.
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
