const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // 배포 경로 설정: 레포지토리 이름과 똑같이 맞춰야 합니다!
  publicPath: process.env.NODE_ENV === 'production'
    ? '/HTML202603/'  // ← 여기가 내 레포지토리 이름과 정확히 일치해야 함
    : '/'
})