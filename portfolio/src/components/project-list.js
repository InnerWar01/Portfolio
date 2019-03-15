import React from 'react';

const projects = 
[
  {
    id: 1,
    img: require('../img/travel-australia.jpg'),
    title: 'Travel to Australia',
    name: 'travel-australia',
    year: '2016'
  },
  {
    id: 2,
    img: require('../img/panc.jpg'),
    title: 'PANC',
    name: 'panc',
    year: '2017'
  },
  {
    id: 3,
    img: require('../img/synkroma2.jpg'),
    title: 'Synkroma',
    name: 'synkroma',
    year: '2017'
  },
  {
    id: 4,
    img: require('../img/lumobok.jpg'),
    title: 'Lumobok',
    name: 'lumobok',
    year: '2017'
  },
  {
    id: 5,
    img: require('../img/interactive-tree-1.jpg'),
    title: 'Interactive Tree',
    name: 'interactive-tree',
    year: '2018'
  },
  {
    id: 6,
    img: require('../img/sentify.png'),
    title: 'Sentify',
    name: 'sentify',
    year: '2018'
  },
  {
    id: 7,
    img: require('../img/into-the-woods.png'),
    title: 'Into The Woods',
    name: 'into-the-woods',
    year: '2018'
  }
];

function ProjectGridList(props) {
  return (
    <div id="project-list">
      {/*Main*/}
      <div id="main">
        <section id="one" className="tiles">
          {projects.reverse().map(project => (
            <article key={project.id} style={{backgroundImage: "url('" + project.img +"')"}} onClick={event => props.handleRedirection(event, project.name)}>
              <header className="major">
                <h3>{project.title}</h3>
              </header>
            </article>
          ))}
          </section>
      </div>
    </div>
  );
}

export default ProjectGridList;