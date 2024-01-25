const fs = require('fs')
const id3 = require('node-id3')

const filtterMp3 = () => {
  const url = './audio/mp3'

  const files = fs.readdirSync(url)

  files.forEach(file => {
    const tags = id3.read(`${url}/${file}`)

    const title = tags.title
    const artist = tags.artist
    const name = `${artist}-${title}`

    console.log(name)

    fs.rename(`${url}/${file}`, `${url}/${name}.flac`, err => {
      console.log(err)
    })
  })
}

const filtterFlac = () => {
  const url = './audio/flac'

  const files = fs.readdirSync(url)

  files.forEach(file => {
    const name = `凤凰传奇-${file.replace(/凤凰传奇|.flac|-| /g, '')}`

    console.log(name)

    fs.rename(`${url}/${file}`, `${url}/${name}.flac`, err => {
      console.log(err)
    })
  })
}

filtterMp3()
filtterFlac()
