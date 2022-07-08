import React from 'react'
import { Contain } from './styled'
import { ReactComponent as WhitepaperIcon } from '@/icons/aboutUs/whitepaper.svg'
import { ReactComponent as LitepaperIcon } from '@/icons/aboutUs/litepaper.svg'
import { useNavigate } from 'react-router-dom'
export default function Participate () {
  const navigate = useNavigate()
  return (
    <section className='custom-container'>
      <Contain>
        <div className='text-box'>
          <h2>
          Participate in <span>blingcome</span>
          </h2>
          <p>The Fashion Currency Of Choice</p>
          <button className='custom-btn' onClick={() => navigate('/buy-now')}>Buy Now</button>
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
