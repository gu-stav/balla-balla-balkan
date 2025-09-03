import blockContent from './blockContent'
import episode from './episodes'
import author from './authors'
import page from './pages'
import settings from './settings'
import {socialAccount} from './objects'

export const schemaTypes = [
	// objects
	blockContent,
	socialAccount,
	// documents
	episode,
	author,
	page,
	settings,
]
