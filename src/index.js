import UAParser from 'ua-parser-js'
import './index.less'

const WHITE_LIST = ['chrome', 'firefox', 'edge']

function doAlter() {
  const container = document.createElement('div')
  container.classList.add('bs-detect')

  const text = document.createElement('p')
  text.classList.add('bs-detect_text')
  text.textContent =
    '你的浏览器版本过低，请使用最新版chrome或者firefox访问本系统以体验完善的系统功能'

  const close = document.createElement('span')
  close.classList.add('bs-detect_close')
  close.textContent = '×'
  close.addEventListener('click', () => {
    document.body.removeChild(container)
  })

  container.appendChild(text)
  container.appendChild(close)

  document.body.appendChild(container)
}

const ua = new UAParser()
const bsInfo = ua.getBrowser()
console.log(bsInfo)

if (WHITE_LIST.indexOf(bsInfo.name.toLowerCase()) === -1) {
  doAlter()
}
