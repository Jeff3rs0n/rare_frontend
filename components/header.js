import { Navbar, Link, Text, Avatar, Dropdown, Container, Image} from "@nextui-org/react";
import { Layout } from "./Layout.js";
import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme } from '@nextui-org/react'

import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import styles from "./Navbar.module.css";


export default function Header() {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

 

  const address = useAddress();
   const collapseItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Container       css={{
      maxW: "100%",
      minWidth: "100%"
    }}>
 <Navbar isBordered variant="floating" >
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >

          <Text b color="inherit" 
          css={{
            fontFamily: "monospace"
          }}
          >
           RareBay 
          </Text>
          <Image
          src="https://bafkreiakjtw7wj6x7qpdliuoeypuar2554hebk3vnz75dhomkqrgbwvfya.ipfs.nftstorage.link/"
          alt="logo"
          width={50}
          height={50}
        />
        </Navbar.Brand>
        <Navbar.Content
          activeColor="warning"
          hideIn="xs"
          variant="light"
        >
          <Navbar.Link href="#">Marketplace</Navbar.Link>
          <Navbar.Link isActive href="#">
            Categories
          </Navbar.Link>
          <Navbar.Link href="#">Airdrops</Navbar.Link>
          <Navbar.Link href="#">Launchpads</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content
          css={{
            "@xs": {
              w: "12%",
              jc: "flex-end",
            },
          }}
        >
          <Dropdown placement="bottom-right">

            <Navbar.Item>
              <Dropdown.Trigger>
        <Avatar
                  bordered
                  as="button"
                  color="warning"
                  size="md"
                  src="https://bafybeibe7emo7543ezfxqrtrkvmmsluvztko6stofp3t2co4m4m2e6bi2u.ipfs.nftstorage.link/user.png"
                />
              </Dropdown.Trigger>
            </Navbar.Item>

            <Dropdown.Menu
              aria-label="User menu actions"
              color="warning"
              onAction={(actionKey) => console.log({ actionKey })}
            >
              <Dropdown.Item key="profile" css={{ height: "$18" }}>
              <div className={styles.navRight}>
            <ConnectWallet theme="dark" btnTitle="Connect Wallet" />
          {address && (
            <Link className={styles.link} href={`/profile/${address}`}>

            </Link>
          )}
        </div>

              </Dropdown.Item>
              <Dropdown.Item key="settings" withDivider>
                My Settings
              </Dropdown.Item>
              <Dropdown.Item key="team_settings">Create NFT</Dropdown.Item>
              <Dropdown.Item key="analytics" withDivider>
                My Collections
              </Dropdown.Item>
              <Dropdown.Item key="portfolio"><Link href={`/profile/${address}`}>My Portfolio</Link></Dropdown.Item>
              <Dropdown.Item key="configurations"><Link href="/create">Create Launchpad</Link></Dropdown.Item>
              <Dropdown.Item key="theme" >
              <Switch
        checked={isDark}
        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
      />
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

        </Navbar.Content>
        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item}
              activeColor="warning"
              css={{
                color: index === collapseItems.length - 1 ? "$error" : "",
              }}
              isActive={index === 2}
            >
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="#"
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    
    </Container>
  );
}