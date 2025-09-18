import Heading from './Heading.astro';
import Link from './Link.astro';
import List from './List.astro';
import ListItem from './ListItem.astro';

export const components = {
  block: {
    h2: Heading,
    h3: Heading
  },
  list: List,
  listItem: ListItem,
  mark: {
    link: Link
  }
}
