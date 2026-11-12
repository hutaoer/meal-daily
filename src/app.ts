import { Component } from 'react'
import type { PropsWithChildren } from 'react'
import { useLikes } from './store/useLikes'
import { validateMockData } from './services/mock'
import './app.scss'

class App extends Component<PropsWithChildren> {
  componentDidMount() {
    // 从 Storage 还原点赞与头像昵称；数据自检只在开发态打印
    useLikes.getState().sync()
    validateMockData()
  }

  render() {
    return this.props.children
  }
}

export default App
