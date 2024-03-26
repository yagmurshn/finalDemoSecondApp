module.exports = {
  plugins: ['@babel/plugin-syntax-dynamic-import', '@babel/plugin-transform-optional-chaining', '@babel/plugin-transform-nullish-coalescing-operator'],
  presets: [process.env.VUE_PLATFORM === 'web' ? '@vue/cli-plugin-babel/preset' : {}, ['@babel/env', { targets: { esmodules: true } }]],
};
