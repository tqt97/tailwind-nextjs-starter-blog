import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

const Header = () => {
  let headerClass = 'bg-white dark:bg-gray-900 mb-12'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-950/70'
  }

  return (
    <header className={headerClass}>
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" aria-label={siteMetadata.headerTitle} title="Home page">
          <div className="flex items-center justify-between">
            <div className="rounded bg-gray-900 dark:bg-gray-50">
              <h1 className="px-3 py-1 text-2xl font-extrabold text-gray-50 dark:text-gray-900">
                T
              </h1>
            </div>
          </div>
        </Link>
        <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
          <div className="no-scrollbar hidden max-w-40 items-center space-x-4 overflow-x-auto sm:flex sm:space-x-6 md:max-w-72 lg:max-w-96">
            {headerNavLinks
              .filter((link) => link.href !== '/')
              .map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="block font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
                >
                  {link.title}
                </Link>
              ))}
          </div>
          <SearchButton />
          <ThemeSwitch />
          <MobileNav />
        </div>
      </nav>
    </header>
  )
}

export default Header
