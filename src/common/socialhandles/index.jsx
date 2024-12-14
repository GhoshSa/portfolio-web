import { socialHandles } from "../../sources"
import "./socialhandles.css"

const SocialHandles = () => {
  return (
    <div className="handles-container">
      {
        socialHandles.map((handles, index) => (
          <a href={handles.link} target="_blank" key={index} className="flex-center icon-wrapper btn-hover">
            {handles.icon}
          </a>
        ))
      }
    </div>
  )
}

export default SocialHandles