import './About.css'
function About() {
  return (
    <div>
      <section>
        <h1 className='ProjectDesc'>Project Description</h1>

        <p className='Entry1'></p>
      </section>
      <br />
      <br />
      <article className='juhao-bio'>
        <strong>
          <p>Juhao Chen</p>
        </strong>
        <a className='Member1' href={'https://github.com/JuHaoChen1997'}>
          <img
            src={require('./GithubLogo/github-icon.png')}
            alt='logo'
            width={100}
            height={100}
          />
        </a>
        <p></p>
      </article>
      <hr />
      <article className='herman-bio'>
        <strong>
          <p>Hermanclyde Guerrero</p>
        </strong>
        <a className='Member2' href={' https://github.com/HC-Guerrero'}>
          <img
            src={require('./GithubLogo/github-icon.png')}
            alt='logo'
            width={100}
            height={100}
          />
        </a>
        <p></p>
      </article>
      <hr />
      <article className='lily-bio'>
        <strong>
          <p>Lily Wu</p>
        </strong>
        <a className='Member3' href={'https://github.com/liliwu8'}>
          <img
            src={require('./GithubLogo/github-icon.png')}
            alt='logo'
            width={100}
            height={100}
          />
        </a>
        <p></p>
      </article>
    </div>
  )
}

export default About
