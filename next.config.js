/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // this should be added here otherwise the build process will fail in github actions
};

module.exports = nextConfig;
