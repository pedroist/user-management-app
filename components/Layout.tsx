import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { Box } from '@chakra-ui/react'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/users">Users</Link> | <Link href="/groups">Groups</Link>
      </nav>
    </header>
    <Box m="30px 60px">{children}</Box>
  </div>
)

export default Layout
