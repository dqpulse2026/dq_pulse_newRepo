import "./Panel.css";

function Panel({ className = "", children }) {
  return <section className={`panel ${className}`.trim()}>{children}</section>;
}

export default Panel;
