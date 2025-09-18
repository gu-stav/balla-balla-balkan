import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'

const singletonTypes = new Set(['settings'])

export default defineConfig([
  {
    name: 'default',
    title: 'Website',

    basePath: '/',
    projectId: 'puzuao21',
    dataset: 'production',

    plugins: [
      structureTool({
        structure: (S) =>
          S.list()
            .title('Inhalte')
            .items([
              S.documentTypeListItem('episode')
                .title('Episoden')
                .child(
                  S.documentList()
                    .id('episodeList')
                    .filter('_type == "episode"')
                    .defaultOrdering([{field: 'publishedAt', direction: 'desc'}]),
                ),
              S.documentTypeListItem('page').title('Seiten'),
              S.documentTypeListItem('author').title('Autoren'),
              S.divider(),
              S.listItem()
                .title('Einstellungen')
                .id('settings')
                .child(S.editor().id('settings').schemaType('settings').documentId('settings')),
            ]),
      }),
    ],

    schema: {
      types: schemaTypes,
      templates: (prev) => prev.filter((t) => !singletonTypes.has(t.schemaType)),
    },
    document: {
      newDocumentOptions: (prev, {creationContext}) => {
        if (creationContext.type === 'global') {
          return prev.filter((templateItem) => !singletonTypes.has(templateItem.templateId))
        }
        return prev
      },
      actions: (prev, {schemaType}) => {
        if (singletonTypes.has(schemaType)) {
          return prev.filter(
            ({action}) => action && ['publish', 'discardChanges', 'restore'].includes(action),
          )
        }
        return prev
      },
    },
  },
])
