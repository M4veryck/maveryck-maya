const projectsData = [
    {
        id: '1',
        imgSrc: '/projects/mockify-imac.png',
        imgWidth: '240',
        imgHeight: '202',
        imgAlt: 'Mockify',
        websiteLink: 'https://mockify-tawny.vercel.app/',
        githubLink: 'https://github.com/M4veryck/mockify',
        projectTitle: 'Mockify',
        projectDesc:
            'Mockify (the low budget Spotify) allows you to Create, Read, Update and Delete playlists.',
        projectLongDesc:
            'Mockify is a website inspired by music apps like Spotify and Tidal. It has an authentication system and uses MongoDB as a database for both User and Playlist Schemas.',
        bugs: ``,
        techStack:
            'HTML, CSS, Sass, CSSModules, JavaScript, React, Next.js, MongoDB',
        difficulties: `Managing authentication was definitely the biggest challenge. The idea is that the user can access their playlists even if they've closed the browser, but I spent a long time trying to figure out how to do this. In the end, storing the token with cookies and using getInitialProps / getServerSideProps was the solution.`,
        futureFeatures:
            'Soon, users will be able to search for songs and add them to their playlists. I will implement this feature using Spotify API.',
    },
    {
        id: '2',
        imgSrc: '/projects/airbnb-clone-phone.png',
        imgWidth: '97',
        imgHeight: '202',
        imgAlt: 'Airbnb clone',
        websiteLink: 'https://airbnb-clone-tawny.vercel.app/',
        githubLink: 'https://github.com/M4veryck/airbnb-clone',
        projectTitle: 'Airbnb Clone (in progress)',
        projectDesc:
            'A replica of the Airbnb Home page. Currently only supports viewport widths of 743px or less.',
        projectLongDesc:
            'A replica of the Airbnb Home page. Currently only supports viewport widths of 743px or less.',
        bugs: ``,
        techStack: 'HTML, CSS, Sass, CSSModules, JavaScript, React, Next.js',
        difficulties: `Doing DevTools in Airbnb's website is a headache. My theory is that they encript their code so that no one can copy and paste their elements. Besides that, due to Circular font not being a free font in production, I used one that resembled the most: Montserrat. This font change led to tiny differences between my project and their website.`,
        futureFeatures:
            'Soon, desktop view, carousel, and dynamic header when scrolling will be available.',
    },
]

export { projectsData }
