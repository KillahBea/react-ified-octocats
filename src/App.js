import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import Octocat from './components/Octocats.js'

const octocats = [
  {
    image: 'https://octodex.github.com/images/octobiwan.jpg',
    number: 3,
    name: 'Octobi Wan Catnobi',
    author: 'https://github.com/cameronmcefee.png'
  },
  {
    image: 'https://octodex.github.com/images/stormtroopocat.jpg',
    number: 86,
    name: 'Stormtroopocat',
    author: 'https://github.com/jeejkang.png'
  },
  {
    image: 'https://octodex.github.com/images/doctocat-brown.jpg',
    number: 68,
    name: 'Doctocat Brown',
    author: 'https://github.com/jonrohan.png'
  },
  {
    image: 'https://octodex.github.com/images/octocat-de-los-muertos.jpg',
    number: 56,
    name: 'Octocat De Los Muertos',
    author: 'https://github.com/cameronmcefee.png'
  },
  {
    image: 'https://octodex.github.com/images/dunetocat.png',
    number: 105,
    name: 'Dunetocat',
    author: 'https://github.com/JohnCreek.png'
  },
  {
    image: 'https://octodex.github.com/images/daftpunktocat-thomas.gif',
    number: 102,
    name: 'Daftpunktocat-Thomas',
    author: 'https://github.com/jeejkang.png'
  },
  {
    image: 'https://octodex.github.com/images/heisencat.png',
    number: 78,
    name: 'Heisencat',
    author: 'https://github.com/jonrohan.png'
  },
  {
    image: 'https://octodex.github.com/images/boxertocat_octodex.jpg',
    number: 143,
    name: 'Boxertocat',
    author: 'https://github.com/rubyjazzy.png'
  },
  {
    image: 'https://octodex.github.com/images/justicetocat.jpg',
    number: 136,
    name: 'Justicetocat',
    author: 'https://github.com/heyhayhay.png'
  },
  {
    image: 'https://octodex.github.com/images/gobbleotron.gif',
    number: 120,
    name: 'Gobble-o-tron',
    author: 'https://github.com/JohnCreek.png',
    author2: 'https://github.com/tonyjaramillo.png'
  },
  {
    image: 'https://octodex.github.com/images/xtocat.jpg',
    number: 36,
    name: 'X-tocat',
    author: 'https://github.com/cameronmcefee.png'
  },
  {
    image: 'https://octodex.github.com/images/saritocat.png',
    number: 114,
    name: 'Saritocat',
    author: 'https://github.com/JohnCreek.png'
  },
  {
    image: 'https://octodex.github.com/images/yaktocat.png',
    number: 109,
    name: 'Yaktocat',
    author: 'https://github.com/JohnCreek.png'
  },
  {
    image: 'https://octodex.github.com/images/dunetocat.png',
    number: 105,
    name: 'Dunetocat',
    author: 'https://github.com/JohnCreek.png'
  },
  {
    image: 'https://octodex.github.com/images/murakamicat.png',
    number: 83,
    name: 'Murakamicat',
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
          </section>

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
