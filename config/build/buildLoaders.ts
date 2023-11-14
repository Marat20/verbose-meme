import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { RuleSetRule } from 'webpack';
import { BuildOptions } from './types/config';

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
  const styleLoaders = {
    test: /\.s[ac]ss$/i,
    use: [
      options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: options.isDev
              ? '[path][name]__[local]'
              : '[hash:base64:8]',
          },
        },
      },
      'sass-loader',
    ],
  };

  const tsLoaders = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };
  return [tsLoaders, styleLoaders];
};
