export const buildSVGLoader = () => {
  return {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };
};
