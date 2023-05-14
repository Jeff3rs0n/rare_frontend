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
 <Navbar isBordered variant="static" >
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
 <Link href="/">
 <Text b color="warning" 
          css={{
            fontFamily: "monospace",
            textGradient: "45deg, $yellow600 -20%, $red600 100%",
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
 </Link>
         
        </Navbar.Brand>
        <Navbar.Content
          activeColor="warning"
          hideIn="xs"
          variant="light"
        >
          <Navbar.Link href="/" isActive> <Text b color="warning" 
          css={{
            fontFamily: "monospace"
          }}
          >
           Marketplace
          </Text></Navbar.Link>
          <Navbar.Link  href="#">
          <Text b color="warning" 
          css={{
            fontFamily: "monospace"
          }}
          >
           Categories
          </Text>
          </Navbar.Link>
          <Navbar.Link href="#"> <Text b color="warning" 
          css={{
            fontFamily: "monospace"
          }}
          >
           Airdrop 
          </Text></Navbar.Link>
          <Navbar.Link href="#"> <Text b color="warning" 
          css={{
            fontFamily: "monospace"
          }}
          >
           Lanchpads 
          </Text></Navbar.Link>
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
              <Dropdown.Item key="buy" withDivider><Link href="/buy"><Text color="warning" css={{ fontFamily: "monospace"}}>Buy NFT</Text></Link>
              </Dropdown.Item>
              <Dropdown.Item key="sell"><Link href="/sell"> <Text color="warning" css={{ fontFamily: "monospace"}}>Sell NFT</Text></Link>
              </Dropdown.Item>
              <Dropdown.Item key="create"><Text color="warning" css={{ fontFamily: "monospace"}}>Create NFT</Text></Dropdown.Item>
              <Dropdown.Item key="collections" withDivider><Link href={`/profile/${address}`}><Text color="warning" css={{ fontFamily: "monospace"}}>My Collections</Text></Link>
              </Dropdown.Item>
              <Dropdown.Item key="portfolio"><Link href={`/profile/${address}`}><Text color="warning" css={{ fontFamily: "monospace"}}>My Portfolio</Text></Link></Dropdown.Item>
              <Dropdown.Item key="configurations"><Link href="/create"><Text color="warning" css={{ fontFamily: "monospace"}}>Create Launchad</Text></Link></Dropdown.Item>
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