import './About.css'
function About() {
  return (
    <div className='about'>
      <section>
        <h1 className='ProjectDesc'>Project Description</h1>
        <p className='Entry1'>
          A student made Youtube clone using React, Javascript, and CSS. Done in
          a team of three with Hermanclyde Guerrero, Lily Wu, Juhao Chen. Uses
          live API data drawn from Google's Youtube Ver3.
        </p>
      </section>
      <br />
      <br />
      <article className='juhao-bio'>
        <strong>
          <p>Juhao Chen</p>
        </strong>
        <a className='Member1' href={'https://github.com/JuHaoChen1997'}>
          GitHub
        </a>
        <p>
          An aspiring software engineer of Pursuit's 8.3 cohort, I love to code
          and solve challenging problems. I'm currently perfecting my skills and
          am training to become a software engineer to solve real-world
          problems. When I'm not coding, I enjoy drawing and listening to music.
        </p>
      </article>
      <hr />
      <article className='herman-bio'>
        <strong>
          <p>Hermanclyde Guerrero</p>
        </strong>
        <a className='Member2' href={' https://github.com/HC-Guerrero'}>
          GitHub
        </a>
        <p>
          An aspiring software engineer of Pursuit's 8.3 cohort, with a strong
          passion to enter video game development. I dabble in video game
          modifications and have a strong inclination towards history,
          economics, and old school video games.
        </p>
      </article>
      <hr />
      <article className='lily-bio'>
        <strong>
          <p>Lily Wu</p>
        </strong>
        <a className='Member3' href={'https://github.com/liliwu8'}>
          GitHub
        </a>
        <p>
          I am fullstack software engineer in NYC with a Bachelor of Business
          Administration in Marketing. I like to code and create website. When I
          am not coding, I like to binge on series.
        </p>
      </article>
    </div>
  )
}

export default About
