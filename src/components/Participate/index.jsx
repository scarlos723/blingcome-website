import React from 'react'
import { Contain } from './styled'
import { ReactComponent as WhitepaperIcon } from '@/icons/aboutUs/whitepaper.svg'
import { ReactComponent as LitepaperIcon } from '@/icons/aboutUs/litepaper.svg'
export default function Participate () {
  return (
    <section className='custom-container'>
      <Contain>
        <div className='text-box'>
          <h2>
          Participate in <span>blingcome</span>
          </h2>
          <p>The Fashion Currency Of Choice</p>
          <button className='custom-btn'>Buy Now</button>
        </div>
        <div className='icons-container'>
          <article>
            <WhitepaperIcon />
            <p>Whitepaper</p>
          </article>
          <article>
            <LitepaperIcon />
            <p>Litepaper</p>
          </article>
        </div>
      </Contain>

    </section>
  )
}
