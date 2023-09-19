export default function Button(props) {
  return (
    <button
      style={
        props.mode
          ? {
              backgroundColor: "#423F3E",
              borderColor: "#423F3E",
              color: "#171010"
            }
          : null
      }
      onClick={props.onclick}
      className="add_button"
    >
      {" "}
      +{" "}
    </button>
  );
}
