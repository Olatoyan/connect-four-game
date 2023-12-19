function Button({ onClick, children }) {
  return (
    <button
      className="mobileSmall:px-6 mobileSmall:py-2 mobileSmall:text-[1.4rem] rounded-[2rem] bg-dark-purple px-8 py-4 text-[1.6rem] font-bold uppercase text-white transition-all duration-300 hover:bg-red"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
