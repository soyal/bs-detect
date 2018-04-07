import './index.less'

const container = document.createElement('p')
container.classList.add('bs-detect')
container.textContent =
  '你的浏览器版本过低，请使用最新版chrome或者firefox访问本系统以体验完善的系统功能'

document.body.appendChild(container)
