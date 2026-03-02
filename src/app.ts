import { Component } from 'react'
import { useUserStore } from './store/useUserStore'
import { useRecipeStore } from './store/useRecipeStore'
import './app.scss'

class App extends Component {
  componentDidMount() {
    // 初始化全局状态：从 Storage 还原登录态和收藏/点赞
    useUserStore.getState().initUser()
    useRecipeStore.getState().init()
  }

  render() {
    return this.props.children
  }
}

export default App
