import React from 'react'
import { Contain, Table } from './styles'

export default function IdoExchange () {
  return (
    <section className='custom-container'>
      <Contain>
        <div className='title'>
          <h2>BLINGCOME The IDO Exchange Launchpad </h2>
          <p>BLINGCOME Token IDO Launchpad <br /> Summary:</p>
        </div>
        <div className='text'>
          <p>
            Our goal is to sell utility tokens to a
            maximum of USD $3 million and a minimum of USD
            $500.000. Some of the financial assumptions
            may change with ETH/USD exchange rates and
            volatility, but the following
            numbers are best effort projected estimates as
            of March 10th, 2022.
          </p>
          <p style={{ color: '#F3C46B', textAlign: 'center' }}><strong>Projected Assumption – 1 ETH = USD $2999.00</strong></p>
        </div>
        <Table>
          <tbody>
            <tr>
              <td>
                <p>
                  <span>
                    <strong>Hard Cap</strong>
                  </span>
                </p>
              </td>
              <td> <p>880 ETH - this may change with exchange rates.</p> </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>
                    <strong>Max Contribution</strong>
                  </span>
                </p>
              </td>
              <td> <p>  Unlimited.</p></td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>
                    <strong>Exchange Rate</strong>
                  </span>
                </p>
              </td>
              <td> <p> 1 ETH = 42,850 FilmCoin Utility Tokens (FLIKS) - this may change with ETH exchange rates.</p></td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>
                    <strong>Token Contract Address</strong>
                  </span>
                </p>
              </td>
              <td>
                <a href='https://etherscan.io/token/0x9280abf1af455d6228def9c93b5e6d85f3f1ecc8'>
                  <p>https://etherscan.io/token/0x9280abf1af455d6228def9c93b5e6d85f3f1ecc8</p>
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>
                    <strong>Launch Date and Time</strong>
                  </span>
                </p>
              </td>
              <td> <p>8AM GMT March 10</p></td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>
                    <strong>Launch Time-Frame</strong>
                  </span>
                </p>
              </td>
              <td>
                <p>30 days (based on Block Number TBC). </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <span>
                    <strong>Launch Completion</strong>
                  </span>
                </p>
              </td>
              <td>
                <p>
                Token launch will end when either the maximum
                number of ETH are raised or block number (TBC)
                is reached.
                </p>
              </td>
            </tr>
          </tbody>
        </Table>
      </Contain>
    </section>
  )
}
