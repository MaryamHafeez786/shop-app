function Button({ 
  children, 
  type = 'button', 
  onClick, 
  disabled = false,
  className = '',
  ...props 
}) {
  const baseClasses = "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-900 hover:bg-blue-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 transition-colors duration-200"
  const disabledClasses = "disabled:bg-blue-700 disabled:cursor-not-allowed"
  const combinedClasses = `${baseClasses} ${disabledClasses} ${className}`.trim()

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button

