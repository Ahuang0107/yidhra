const BABEL_ENV = process.env.BABEL_ENV
const isCommonJS = BABEL_ENV !== undefined && BABEL_ENV === "cjs"
const isESM = BABEL_ENV !== undefined && BABEL_ENV === "esm"

module.exports = function (api) {
    api.cache(true)

    // execute from right to left
    const presets = [
        [
            "@babel/env",
            {
                loose: true,
                modules: isCommonJS ? "commonjs" : false,
                targets: {
                    esmodules: isESM ? true : undefined,
                },
            },
        ],
        "@babel/preset-typescript",
    ]

    // execute from left to fight
    const plugins = [
    ]

    return {
        presets,
        plugins,
    }
}
