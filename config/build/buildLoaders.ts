import { RuleSetRule } from 'webpack';
import { buildBabelLoader } from './loaders/buildBabelLoader';
import { buildCssLoader } from './loaders/buildCssLoader';
import { BuildOptions } from './types/config';

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
  const babelLoader = buildBabelLoader(options);

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const styleLoader = buildCssLoader(options.isDev);

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };
  return [fileLoader, svgLoader, babelLoader, tsLoader, styleLoader];
};
