import Link from "next/link";

export default () => {
    return (<div className="stories-header">
                <a href="https://news.ycombinator.com">
                    <img 
                        className="stories-source-logo" 
                        src="https://news.ycombinator.com/y18.gif" 
                        alt="Y" />
                </a>
                <Link href="/">top</Link>|
                <Link href="/">new</Link>
            </div>)
}