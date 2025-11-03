import React from 'react'

function Checkbox({ 
  id,
  name,
  checked = false,
  onChange,
  disabled = false,
  required = false,
  label,
  labelPosition = 'right', // 'left' or 'right'
  className = '',
  // Styling props
  size = 'md', // 'sm', 'md', 'lg'
  color = 'blue', // 'blue', 'gray', 'green', 'red', 'yellow', 'purple'
  ...props 
}) {
  // Size classes
  const sizeClasses = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5'
  }

  // Color classes for checkbox
  const colorClasses = {
    blue: 'text-blue-900 focus:ring-blue-700',
    gray: 'text-gray-900 focus:ring-gray-700',
    green: 'text-darkgreen focus:ring-darkgreen',
    red: 'text-dangerred focus:ring-dangerred',
    yellow: 'text-yellow focus:ring-yellow',
    purple: 'text-purple focus:ring-purple'
  }

  const checkboxClasses = `${sizeClasses[size]} ${colorClasses[color]} bg-white border-gray-300 rounded focus:ring-2 focus:ring-offset-0 ${className}`.trim()

  const labelClasses = 'text-sm text-gray-900 cursor-pointer'

  return (
    <div className="flex items-center">
      {label && labelPosition === 'left' && (
        <label htmlFor={id} className={`${labelClasses} mr-2`}>
          {label}
        </label>
      )}
      <input
        id={id}
        name={name}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        required={required}
        className={checkboxClasses}
        {...props}
      />
      {label && labelPosition === 'right' && (
        <label htmlFor={id} className={`${labelClasses} ml-2`}>
          {label}
        </label>
      )}
    </div>
  )
}

export default Checkbox

