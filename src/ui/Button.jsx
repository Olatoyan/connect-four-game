function Button({ onClick, children }) {
  return (
    <button
      className="rounded-[2rem] bg-dark-purple px-8 py-4 text-[1.6rem] font-bold uppercase text-white transition-all duration-300 hover:bg-red"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
