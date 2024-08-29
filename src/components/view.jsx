function View({ children, className, ...props }) {
  return (
    <div
      className={`border-4 border-solid border-blue-500 bg-blue-100 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default View;
