import './About.css';
function About() {
  return (
    <div>
      <section>
        <h1 className='ProjectDesc'>Project Description</h1>

        <p className='Entry1'></p>
      </section>
      <article>
        <strong>
          <p>Juhao Chen</p>
        </strong>
        <a className='Member1' href={'https://github.com/JuHaoChen1997'}>
          Juhao's GitHub
        </a>
        <p></p>
      </article>
      <article>
        <strong>
          <p>Hermanclyde Guerrero</p>
        </strong>
        <a className='Member2' href={' https://github.com/HC-Guerrero'}>
          Herman's GitHub
        </a>
        <p></p>
      </article>
      <article>
        <strong>
          <p>Lily Wu</p>
        </strong>
        <a className='Member3' href={'https://github.com/liliwu8'}>
          Lily's GitHub
        </a>
        <p></p>
      </article>
    </div>
  );
}

export default About;
