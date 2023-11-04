function CoreConcepts({ title, description, image }) {
  return (
    <li>
      <img src={image} alt={image} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

export default CoreConcepts;
