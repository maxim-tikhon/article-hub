var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { buildCssLoader } from './loader/buildCssLoader';
import { buildBabelLoader } from './loader/buildBabelLoader';
export function buildLoaders(options) {
    var isDev = options.isDev;
    // const typescriptLoader = {
    //   test: /\.tsx?$/,
    //   use: 'ts-loader',
    //   exclude: /node_modules/,
    // };
    var cssLoader = buildCssLoader(isDev);
    var svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };
    var fileLoader = {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        use: [{
                loader: 'file-loader',
            }],
    };
    var codeBabelLoader = buildBabelLoader(__assign(__assign({}, options), { isTsx: false }));
    var tsxCodeBabelLoader = buildBabelLoader(__assign(__assign({}, options), { isTsx: true }));
    return [
        fileLoader,
        svgLoader,
        codeBabelLoader,
        tsxCodeBabelLoader,
        // typescriptLoader,
        cssLoader,
    ];
}
