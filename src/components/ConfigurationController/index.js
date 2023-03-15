import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      return (
        <div className="form-control">
          <input type="checkbox" id="content" onClick={onToggleShowContent} />
          <label htmlFor="content">content</label>
          <br />
          <input
            type="checkbox"
            id="LeftNavbar"
            onClick={onToggleShowLeftNavbar}
          />
          <label htmlFor="LeftNavbar">Left Navbar</label>
          <br />
          <input
            type="checkbox"
            id="rightNavbar"
            onClick={onToggleShowRightNavbar}
          />

          <label htmlFor="rightNavbar">Right Navbar</label>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
