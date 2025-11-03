import React from 'react'
import { FaGoogle, FaApple } from 'react-icons/fa'

function Button({ 
  children, 
  type = 'button', 
  onClick, 
  disabled = false,
  className = '',
  textColor = 'text-white',
  bgColor = 'bg-blue-900',
  hoverBgColor = 'hover:bg-blue-950',
  focusRingColor = 'focus:ring-blue-700',
  showGoogleIcon = false,
  showAppleIcon = false,
  ...props 
}) {
  const baseClasses = `group relative w-full flex justify-center items-center gap-2 py-2 px-4 border border-transparent text-sm font-medium rounded-md ${textColor} ${bgColor} ${hoverBgColor} focus:outline-none focus:ring-2 focus:ring-offset-2 ${focusRingColor} transition-colors duration-200`
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
      {showGoogleIcon && (
        <FaGoogle className="h-5 w-5 flex-shrink-0" style={{ display: 'block' }} aria-hidden="true" />
      )}
      {showAppleIcon && (
        <FaApple className="h-5 w-5 flex-shrink-0" style={{ display: 'block' }} aria-hidden="true" />
      )}
      {children}
    </button>
  )
}

export default Button

