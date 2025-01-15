export default function StyledText({
  children,
  charClassName = "",
  className = "",
}) {
  const text = typeof children === "string" ? children : "";
  return (
    <p className={className}>
      {text.split("").map((char, index) => (
        <span key={index} className={charClassName}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </p>
  );
}
