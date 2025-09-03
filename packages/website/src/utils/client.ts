import {createClient} from '@sanity/client'

export const client = createClient({
  projectId: 'puzuao21',
  dataset: 'production',
  useCdn: true,
  headers: {
    'X-Custom-Header': 'custom-value'
  },
  apiVersion: '2025-02-06',
})
