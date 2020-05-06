import Router from 'next/router'
import { SearchContext } from './index'

const storyHeader = () => {
  const { sortName, setSortName } = React.useContext(SearchContext)
  const sortAndRefresh = (sortName) => {
    setSortName(sortName)
    Router.push(`/?page=1&&sortName=${sortName}`)
  }
  return (
    <div className="stories-header">
      <a href="https://news.ycombinator.com">
        <img
          className="stories-source-logo"
          src="https://news.ycombinator.com/y18.gif"
          alt="Y"
        />
      </a>
      <span
        Style={`color: ${
          sortName !== 'search_by_date' ? '#fff' : '#000'
        };cursor: pointer;`}
        onClick={() => sortAndRefresh('search')}
      >
        top
      </span>
      <span> | </span>
      <span
        Style={`color: ${
          sortName === 'search_by_date' ? '#fff' : '#000'
        };cursor: pointer;`}
        onClick={() => sortAndRefresh('search_by_date')}
      >
        new
      </span>
    </div>
  )
}

export default React.memo(storyHeader)
