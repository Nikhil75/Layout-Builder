import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="left-right-content-container">
          {showLeftNavbar ? (
            <div className="left-nav-bar-container">
              <h1 className="menu">Left Navbar Menu</h1>
              <ul className="left-nav-list">
                <li className="list">item 1</li>
                <li className="list">item 2</li>
                <li className="list">item 3</li>
                <li className="list">item 4</li>
              </ul>
            </div>
          ) : (
            ''
          )}
          {showContent ? (
            <div className="content-container">
              <h1 className="content">Content</h1>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
          ) : (
            ''
          )}
          {showRightNavbar ? (
            <div className="right-nav-bar-container">
              <h1 className="menu">Right Navbar</h1>
              <div className="ad">
                <p className="Ad">Ad 1</p>
              </div>
              <div className="ad">
                <p className="Ad">Ad 2</p>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
