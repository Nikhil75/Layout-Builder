import {Component} from 'react'

import ConfigurationController from './components/ConfigurationController'

import ConfigurationContext from './context/ConfigurationContext'

import Layout from './components/Layout'

import './App.css'

class App extends Component {
  state = {
    showContent: true,
    showLeftNavbar: true,
    showRightNavbar: true,
  }

  onToggleShowContent = () => {
    this.setState(prev => ({
      showContent: !prev.showContent,
    }))
  }

  onToggleShowLeftNavbar = () => {
    this.setState(prev => ({
      showLeftNavbar: !prev.showLeftNavbar,
    }))
  }

  onToggleShowRightNavbar = () => {
    this.setState(prev => ({
      showRightNavbar: !prev.showRightNavbar,
    }))
  }

  render() {
    const {showContent, showLeftNavbar, showRightNavbar} = this.state
    console.log(showContent)
    return (
      <ConfigurationContext.Provider
        value={{
          showContent,
          showLeftNavbar,
          showRightNavbar,
          onToggleShowContent: this.onToggleShowContent,
          onToggleShowLeftNavbar: this.onToggleShowLeftNavbar,
          onToggleShowRightNavbar: this.onToggleShowRightNavbar,
        }}
      >
        <div className="app-container">
          <div className="layout-container">
            <h1 className="layout-head">Layout</h1>
            <ConfigurationController />
          </div>
          <Layout />
        </div>
      </ConfigurationContext.Provider>
    )
  }
}

export default App
