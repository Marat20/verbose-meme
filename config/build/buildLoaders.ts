import { RuleSetRule } from 'webpack';

export const buildLoaders = (): RuleSetRule[] => {
  const tsLoaders = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };
  return [tsLoaders];
};
