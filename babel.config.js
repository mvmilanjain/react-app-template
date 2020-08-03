module.exports = {
    presets: ['@babel/preset-env', '@babel/preset-react']
};

/*
const leanConfig = {
    presets: [['@babel/preset-react']],
    plugins: ['@babel/plugin-proposal-class-properties']
};

const legacyConfig = {
    presets: [
        ['@babel/preset-env', {corejs: 3, targets: '> 1%, not dead', useBuiltIns: 'entry'}],
        ['@babel/preset-react']
    ],
    plugins: ['@babel/plugin-proposal-class-properties']
};

module.exports ={
    env: {
        debug: leanConfig,
        development: legacyConfig,
        production: legacyConfig,
        test: legacyConfig
    }
};*/
