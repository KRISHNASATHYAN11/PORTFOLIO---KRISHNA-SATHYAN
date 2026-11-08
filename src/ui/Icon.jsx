import {
  FaBars,
  FaCamera,
  FaCheckCircle,
  FaCode,
  FaCommentDots,
  FaCss3Alt,
  FaDatabase,
  FaEnvelope,
  FaGitAlt,
  FaGithub,
  FaHeart,
  FaHtml5,
  FaJs,
  FaLaptopCode,
  FaLeaf,
  FaLinkedinIn,
  FaNodeJs,
  FaPaintBrush,
  FaPalette,
  FaPaperPlane,
  FaPhone,
  FaReact,
  FaSeedling,
  FaTerminal,
  FaTimes,
  FaTree,
  FaUser,
} from "react-icons/fa";

const icons = {
  bars: FaBars,
  camera: FaCamera,
  checkCircle: FaCheckCircle,
  code: FaCode,
  commentDots: FaCommentDots,
  css3: FaCss3Alt,
  database: FaDatabase,
  envelope: FaEnvelope,
  git: FaGitAlt,
  github: FaGithub,
  heart: FaHeart,
  html5: FaHtml5,
  javascript: FaJs,
  laptopCode: FaLaptopCode,
  leaf: FaLeaf,
  linkedin: FaLinkedinIn,
  node: FaNodeJs,
  paintBrush: FaPaintBrush,
  palette: FaPalette,
  paperPlane: FaPaperPlane,
  phone: FaPhone,
  react: FaReact,
  seedling: FaSeedling,
  terminal: FaTerminal,
  times: FaTimes,
  tree: FaTree,
  user: FaUser,
};

const Icon = ({ name, className = "", ...props }) => {
  const IconComponent = icons[name];
  if (!IconComponent) return null;

  return (
    <IconComponent
      className={`portfolio-icon${className ? ` ${className}` : ""}`}
      aria-hidden="true"
      focusable="false"
      {...props}
    />
  );
};

export default Icon;
