import React from 'react'

function Text({ 
  children,
  as = 'p', // 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div', 'label'
  // Font styling props
  fontSize = 'base', // 'xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'
  fontFamily = 'sans', // 'sans' (Poppins)
  fontWeight = 'normal', // 'thin', 'extralight', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black'
  // Color props
  textColor = 'text-gray-900',
  // Additional styling
  className = '',
  align = '', // 'text-left', 'text-center', 'text-right', 'text-justify'
  decoration = '', // 'underline', 'line-through', 'no-underline'
  transform = '', // 'uppercase', 'lowercase', 'capitalize', 'normal-case'
  ...props 
}) {
  // Font size classes
  const fontSizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl'
  }

  // Font family classes
  const fontFamilyClasses = {
    sans: 'font-sans' // Uses Poppins from tailwind.config.js
  }

  // Font weight classes
  const fontWeightClasses = {
    thin: 'font-thin',
    extralight: 'font-extralight',
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold',
    black: 'font-black'
  }

  // Build combined classes
  const combinedClasses = `
    ${fontSizeClasses[fontSize] || fontSizeClasses.base}
    ${fontFamilyClasses[fontFamily] || fontFamilyClasses.sans}
    ${fontWeightClasses[fontWeight] || fontWeightClasses.normal}
    ${textColor}
    ${align}
    ${decoration}
    ${transform}
    ${className}
  `.trim().replace(/\s+/g, ' ')

  // Dynamic component rendering
  const Component = as

  return (
    <Component className={combinedClasses} {...props}>
      {children}
    </Component>
  )
}

export default Text

