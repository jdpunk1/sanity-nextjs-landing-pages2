export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5e98532f2be849cecadd3eef',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages2-studio-mmm77gap',
                  apiId: '7693cd10-2aa8-41d2-a104-20ffa7bc527c'
                },
                {
                  buildHookId: '5e98532f82590a0bbeeccd3f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages2-web-ias62be7',
                  apiId: 'c2dd6271-9ec2-4357-b7a9-3250c027d2bd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jdpunk1/sanity-nextjs-landing-pages2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages2-web-ias62be7.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
