import React from 'react';

function Projects() {
  return (
    <section id='projects'>
      <h2>Projects</h2>
      <div>
        <h3>Prokurer Supplier Portal</h3>
        <p>Mar 2023 – Nov 2023</p>
        <ul>
          <li>Transitioned application from Angular to React.</li>
          <li>
            Implemented Redux-Saga middleware for managing asynchronous data
            flows.
          </li>
          <li>Provided QA support and fixed bugs.</li>
          <li>
            <a
              href='https://supplier.prokurer.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              Supplier Link
            </a>
          </li>
        </ul>
      </div>
      {/* Repeat for other projects */}
    </section>
  );
}

export default Projects;
