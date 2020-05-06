import StoriesHeader from './header'
import StoriesFooter from './footer'
import Story from './story'

export const SearchContext = React.createContext()

export default ({ stories, page }) => {
  const [sortName, setSortName] = React.useState('search')
  return (
    <SearchContext.Provider value={{ sortName, setSortName }}>
      <div className="story-list">
        <StoriesHeader />
        {(stories || []).map((story) => (
          <Story story={story} key={story.objectID} />
        ))}
        <StoriesFooter page={page} />
      </div>
    </SearchContext.Provider>
  )
}
