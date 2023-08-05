import { BuildOptions } from "./types/config";
import type { Configuration as DevServerConfiguraton } from 'webpack-dev-server';

export function buildDevServer(options: BuildOptions): DevServerConfiguraton {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true,
        hot: true
    }
}