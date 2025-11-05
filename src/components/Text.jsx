import React from 'react'

// Variant definitions - fontSize, fontFamily, and fontWeight combinations
const variants = {
  // Heading variants
  'h1': { fontSize: '5xl', fontFamily: 'montserrat', fontWeight: 'extrabold' },
  'h2': { fontSize: '4xl', fontFamily: 'montserrat', fontWeight: 'bold' },
  'h3': { fontSize: '3xl', fontFamily: 'montserrat', fontWeight: 'bold' },
  'h4': { fontSize: '2xl', fontFamily: 'montserrat', fontWeight: 'semibold' },
  'h5': { fontSize: 'xl', fontFamily: 'montserrat', fontWeight: 'semibold' },
  'h6': { fontSize: 'lg', fontFamily: 'montserrat', fontWeight: 'medium' },
  
  // Body text variants
  'body': { fontSize: 'base', fontFamily: 'montserrat', fontWeight: 'normal' },
  'body-sm': { fontSize: 'sm', fontFamily: 'montserrat', fontWeight: 'normal' },
  'body-xs': { fontSize: 'xs', fontFamily: 'montserrat', fontWeight: 'normal' },
  
  // Large text variants
  'large': { fontSize: 'lg', fontFamily: 'montserrat', fontWeight: 'medium' },
}

function Text({ 
  children,
  as = 'p', // 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div', 'label'
  // Variant prop - predefined fontSize, fontFamily, and fontWeight combinations
  variant,
  // Individual font styling props (can override variant)
  fontSize,
  fontFamily,
  fontWeight, // 'thin', 'extralight', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black' (will use variant default if not provided)
  // Color props
  textColor = 'text-black',
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
    sans: 'font-sans', // Uses Montserrat from tailwind.config.js
    montserrat: 'font-montserrat' // Uses Montserrat from tailwind.config.js
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

  // Get fontSize, fontFamily, and fontWeight from variant if provided, otherwise use individual props
  const variantConfig = variant ? variants[variant] : null
  const finalFontSize = fontSize || variantConfig?.fontSize || 'base'
  const finalFontFamily = fontFamily || variantConfig?.fontFamily || 'sans'
  const finalFontWeight = fontWeight || variantConfig?.fontWeight || 'normal'

  // Build combined classes
  const combinedClasses = `
    ${fontSizeClasses[finalFontSize] || fontSizeClasses.base}
    ${fontFamilyClasses[finalFontFamily] || fontFamilyClasses.sans}
    ${fontWeightClasses[finalFontWeight] || fontWeightClasses.normal}
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

