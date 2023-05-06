import React from 'react'

interface DocumentProps {
  children: React.ReactNode
  /** Array of css import strings */
  css: string[]
  meta?: string[]
}

export const Document = ({ children, css = [] }: DocumentProps) => {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        {css.map((cssLinks, index) => {
          return (
            <link rel="stylesheet" key={`css-${index}`} href={`/${cssLinks}`} />
          )
        })}
      </head>
      <body>
        <div id="redwood-app">{children}</div>
      </body>
    </html>
  )
}
