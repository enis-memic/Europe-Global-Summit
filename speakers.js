const presenters = [
  {
    name: 'Dr. James C. Cooper',
    title: 'Professor, Economic Foundations of Legal Studies',
    description:
      'He teaches Economic Foundations of Legal Studies for the TFAS Legal Studies Institute (LSI). He is an associate professor of law and director of the Program on Economics and Privacy (PEP) at George Mason University Antonin Scalia Law School.',
    img: './images/cj.jpg',
  },
  {
    name: 'Antonia Carver',
    title: 'Director of Art Jameel',
    description:
      'Overseeing its work across heritage, education, and the arts. Prior to joining Art Jameel, she was director of Art Dubai. During her tenure, this annual event became the leading international fair for the Middle East and South Asia, and the worlds most global, including a diverse educational and not-for-profit program.',
    img: './images/ac.jpg',
  },
  {
    name: 'Sir Timothy John Berners-Lee',
    title: 'Director of the W3 Consortium',
    description:
      'Also known as TimBL, is an English computer scientist best known as the inventor of the World Wide Web. He is a Professorial Fellow of Computer Science at the University of Oxford and a professor at the Massachusetts Institute of Technology (MIT).',
    img: './images/stb.jpg',
  },
  {
    name: 'Kim Young-Sam',
    title: 'Politician and activist',
    description:
      'Kim Young-sam was a South Korean politician and activist who served as the seventh president of South Korea from 1993 to 1998.',
    img: './images/ky.jpg',
  },
  {
    name: 'Lawrence Mark Sanger',
    title: 'Co-founder of Wikipedia',
    description:
      'Lawrence Mark Sanger is an American Internet project developer and philosopher who co-founded the online encyclopedia Wikipedia along with Jimmy Wales. Sanger coined the name and wrote much of Wikipedias original governing policy, such as "Neutral point of view".',
    img: './images/Sanger.jpg',
  },
  {
    name: 'Lawrence Edward Page',
    title: 'Co-founder of Google',
    description:
      'Lawrence Edward Page is an American business magnate, computer scientist and internet entrepreneur. He is best known for co-founding Google with Sergey Brin. Page was the CEO (chief executive officer) of Google from 1997 until August 2001 (stepping down in favor of Eric Schmidt) then from April 2011 until July 2015 when he moved to become CEO of Alphabet Inc.',
    img: './images/Larry_Page.jpg',
  },
];

presenters.forEach((speaker) => {
  const presenting = document.querySelector('.presenters');
  const presenter = document.createElement('article');
  presenter.classList.add('speakers');
  presenting.appendChild(presenter);

  presenter.innerHTML = ` 
  <div class="speaker">
  <img src="./images/bg-img-bg.jpg" class="bg-img" alt="Image with orange squeares" />
  <img src=${speaker.img} class="speakers-img" alt="speaker image">
  </div>
  <div>
  <h3 class="speaker-name">${speaker.name}</h3>
  <h5 class="speaker-title">${speaker.title}</h5>
  <hr class="hr">
  <p class="speaker-description"> ${speaker.description}</p>
  </div>
  </div>`;
});
