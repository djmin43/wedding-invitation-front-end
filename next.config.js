/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'www.notion.so',
      's3.us-west-2.amazonaws.com',
      'mindongjoon.blob.core.windows.net',
    ],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
}
