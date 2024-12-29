import { Link } from 'react-router-dom'

function ProjectCard({ title, description, image, path }) {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        <img 
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
      </div>
      
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link 
          to={path}
          className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-center transition duration-200"
        >
          Try {title}
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;