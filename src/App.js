import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import Octocat from './components/Octocats.js'

const octocats = [
  {
    image: 'https://octodex.github.com/images/octobiwan.jpg',
    number: 3,
    name: 'the Octobi Wan Catnobi by',
    author: 'https://github.com/cameronmcefee.png'
  },
  {
    image: 'https://octodex.github.com/images/stormtroopocat.jpg',
    number: 86,
    name: 'the Stormtroopocat by',
    author: 'https://github.com/jeejkang.png'
  },
  {
    image: 'https://octodex.github.com/images/doctocat-brown.jpg',
    number: 68,
    name: 'the Doctocat Brown by',
    author: 'https://github.com/jonrohan.png'
  },
  {
    image: 'https://octodex.github.com/images/de-los-muertos.jpg',
    number: 56,
    name: 'the Octocat De Los Muertos by',
    author: 'https://github.com/cameronmcefee.png'
  },
  {
    image: 'https://octodex.github.com/images/dunetocat.jpg',
    number: 105,
    name: 'the Dunetocat by',
    author: 'https://github.com/JohnCreek.png'
  },
  {
    image: 'https://octodex.github.com/images/daftpunktocat-thomas.jpg',
    number: 102,
    name: 'the Daftpunktocat-Thomas by',
    author: 'https://github.com/jeejkang.png'
  },
  {
    image: 'https://octodex.github.com/images/heisencat.jpg',
    number: 78,
    name: 'the Heisencat by',
    author: 'https://github.com/jonrohan.png'
  },
  {
    image: 'https://octodex.github.com/images/boxertocat_octodex.jpg',
    number: 143,
    name: 'the Boxertocat by',
    author: 'https://github.com/rubyjazzy.png'
  },
  {
    image: 'https://octodex.github.com/images/justicetocat.jpg',
    number: 136,
    name: 'the Justicetocat by',
    author: 'https://github.com/heyhayhay.png'
  },
  {
    image: 'https://octodex.github.com/images/gobbleotron.jpg',
    number: 120,
    name: 'the Gobble-o-tron by',
    author: 'https://github.com/JohnCreek.png',
    author2: 'https://github.com/tonyjaramillo.png'
  },
  {
    image: 'https://octodex.github.com/images/xtocat.jpg',
    number: 36,
    name: 'the X-tocat by',
    author: 'https://github.com/cameronmcefee.png'
  },
  {
    image: 'https://octodex.github.com/images/saritocat.jpg',
    number: 114,
    name: 'the Saritocat by',
    author: 'https://github.com/JohnCreek.png'
  },
  {
    image: 'https://octodex.github.com/images/yaktocat.jpg',
    number: 109,
    name: 'the Yaktocat by',
    author: 'https://github.com/JohnCreek.png'
  },
  {
    image: 'https://octodex.github.com/images/murakamicat.jpg',
    number: 83,
    name: 'the Murakamicat by',
    author: 'https://github.com/billyroh.png'
  }
]

class App extends Component {
  render() {
    return (
      <>
        <nav class="header">
          <img src="./images/logo (1).png" />
          <div class="top-links">
            <a>RSS</a>
            <a>FAQ</a>
            <a>Back to GitHub</a>
          </div>
        </nav>

        <div class="container">
          <section class="main-body">
            <Octocat />
          </section>
          {octocats.map(octocat => {
            return (
              <Octocat
                image={octocat.image}
                number={octocat.number}
                name={octocat.name}
                author={octocat.author}
              />
            )
          })}

          <footer>
            <div class="bottom-links">
              <p>RSS</p>
              <p>FAQ</p>
            </div>
            <i class="fab fa-github" />
            <div class="copyright">
              <p>© 2013 – 2018 GitHub, Inc.</p>
              <p>All rights reserved.</p>
            </div>
          </footer>
        </div>
      </>
    )
  }
}

export default App
