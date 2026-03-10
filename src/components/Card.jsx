const Card = ({ children, className = '', ...props }) => {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <div
      className={`card bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8 sm:p-10 relative cursor-default overflow-hidden backdrop-blur-xl transition-transform duration-300 ${className}`.trim()}
      onMouseMove={handleMouseMove}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
