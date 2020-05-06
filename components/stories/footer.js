import Link from 'next/link'

const footer = ({ page }) => {
  return (
    <div className="stories-footer">
      {page > 1 && (
        <div Style="float:left; padding-left: 5px;">
          <Link href={`/?page=${page - 1}`}>
            <a>Prev</a>
          </Link>{' '}
          |{' '}
        </div>
      )}
      <div Style="float: left; padding-left: 5px;">
        <Link href={`/?page=${page + 1}`}>
          <a>More</a>
        </Link>
      </div>
      <div className="stories-page-no" Style="float:right;padding-right: 5px;">
        Page No: {page}
      </div>
    </div>
  )
}

export default React.memo(footer)