import "./connectionButton.css";

const ConnectionButton = ({ connection }) => {
  return (
    <a
      href={connection.url}
      target="_blank"
      rel="noreferrer"
      className="connectionButton__link"
      title={connection.url}
    >
        {connection.icon}
        {" "}
        <span className="connectionButton__text">{connection.name}</span>
    </a>
  );
};

export default ConnectionButton;
