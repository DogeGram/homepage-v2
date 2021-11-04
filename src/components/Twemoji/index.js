import React, { memo } from 'react'
import twemoji from 'twemoji'
const Twemoji = ({ emoji }) => (
  <span
    dangerouslySetInnerHTML={{
      __html: twemoji.parse(emoji, {
        folder: 'svg',
        ext: '.svg'
      })
    }}
    style={{display: 'inline-block', width: 'auto', height: '1em', verticalAlign: '-0.125em',}}
  />
)

export default memo(Twemoji)