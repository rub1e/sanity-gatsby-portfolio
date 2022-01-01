export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61d0d9626f54ffa92c2aa8b4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-kxycsq5e',
                  apiId: '2b9175da-c8bf-4b09-adbf-b2d6092a2483'
                },
                {
                  buildHookId: '61d0d962add95e5ad046c4e0',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-b9k8xy87',
                  apiId: 'ec4bd786-0bb4-4c53-ab87-bcb0dc3850c5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rub1e/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-b9k8xy87.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
