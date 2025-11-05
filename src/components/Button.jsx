import React from 'react'
import { FaGoogle, FaApple } from 'react-icons/fa'
import { googleIcon, appleIcon } from '../assets/images'

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
  // Check if className includes border to avoid border-transparent conflict
  const hasCustomBorder = className.includes('border-') && !className.includes('border-transparent')
  const borderClass = hasCustomBorder ? '' : 'border border-transparent'
  
  const baseClasses = `group relative w-full flex justify-center items-center gap-2 py-2 px-4 ${borderClass} text-sm font-medium rounded-md ${textColor} ${bgColor} ${hoverBgColor} focus:outline-none focus:ring-2 focus:ring-offset-2 ${focusRingColor} transition-colors duration-200`
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
        <img src={googleIcon} alt="Google" className="h-5 w-5 flex-shrink-0" />
      )}
      {showAppleIcon && (
        <img src={appleIcon} alt="Apple" className="h-5 w-5 flex-shrink-0" />
      )}
      {children}
    </button>
  )
}

export default Button

