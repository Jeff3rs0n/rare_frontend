import {
  Navbar,
  Text,
  Avatar,
  Dropdown,
  Container,
  Image,
} from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import { Switch, useTheme, Spacer } from "@nextui-org/react";

import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import styles from "./Navbar.module.css";
import {NftCat} from '@web3uikit/icons'
import {HandCoin} from '@web3uikit/icons'
import {Plus} from '@web3uikit/icons'
import {Grid} from '@web3uikit/icons'
import {ReferenceApi} from '@web3uikit/icons'
import {Rocket} from '@web3uikit/icons'
import {ChevronRight2X} from '@web3uikit/icons'
import Link from "next/link";



export default function Header() {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  const address = useAddress();
  const collapseItems = [
    "Marketplace",
    "Launchpad",
    "$RARE Airdrop",
    "Categories",
    "Learn",
  ];

  return (

      <Navbar isBordered variant="floating">
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
          <Link href="/">
            <Text
              b
              color="warning"
              css={{
                fontFamily: "monospace",
                textGradient: "45deg, $yellow600 -20%, $red600 100%",
              }}
            >
              RareBay
            </Text>
</Link>
            <Image
              src="https://bafkreiakjtw7wj6x7qpdliuoeypuar2554hebk3vnz75dhomkqrgbwvfya.ipfs.nftstorage.link/"
              alt="logo"
              width={40}
              height={40}
            />
        </Navbar.Brand>
        <Navbar.Content activeColor="warning" hideIn="xs" variant="light">
          <Link href="/" isActive>
            {" "}
            <Text
              b
             
              css={{
                fontFamily: "monospace",
                textGradient: "45deg, $yellow600 -20%, $blue600 100%"
              }}
            >
              Marketplace
            </Text>
          </Link>
          <Link href="/whitepaper" isActive>
            {" "}
            <Text
              b
             
              css={{
                fontFamily: "monospace",
                textGradient: "45deg, $yellow600 -20%, $blue600 100%"
              }}
            >
              Whitepaper
            </Text>
          </Link>
          <Link href="#">
            <Text
              b
             
              css={{
                fontFamily: "monospace",
                textGradient: "45deg, $yellow600 -20%, $blue600 100%"
              }}
            >
              Categories
            </Text>
          </Link>
          <Link href="#">
            {" "}
            <Text
              b
              color="warning"
              css={{
                fontFamily: "monospace",
                textGradient: "45deg, $yellow600 -20%, $blue600 100%"              }}
            >
              $RARE 
             </Text>
          </Link>
          <Spacer />
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
                  size="sm"
                  src="https://bafybeifwhnkyf2y2tzmcsv6rrysbcrkvpitozkjoefky2seaitaw7txyby.ipfs.nftstorage.link/user(1).png"
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
                <ConnectWallet btnTitle="Sign In"  />
                  {address && (
                    <Link
                      className={styles.link}
                      href={`/profile/${address}`}
                    ></Link>
                  )}
                </div>
              </Dropdown.Item>
              <Dropdown.Item key="buy" withDivider>
                <Link href="/buy">
                  <Text color="warning" css={{ fontFamily: "monospace" }}>
                  <NftCat fontSize='15px'/>   Buy NFT
                  </Text>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item key="sell">
                <Link href="/sell">
                  {" "}
                  <Text color="warning" css={{ fontFamily: "monospace" }}>
                  <HandCoin fontSize='15px'/> Sell NFT
                  </Text>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item key="create">
                <Link href="/">
                <Text color="warning" css={{ fontFamily: "monospace" }}>
                <Plus fontSize='15px'/> Create NFT
                </Text>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item key="collections" withDivider>
                <Link href={`/profile/${address}`}>
                  <Text color="warning" css={{ fontFamily: "monospace" }}>
                  <Grid fontSize='15px'/> My Collections
                  </Text>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item key="portfolio">
                <Link href={`/profile/${address}`}>
                  <Text color="warning" css={{ fontFamily: "monospace" }}>
                  <ReferenceApi fontSize='15px'/> My Portfolio
                  </Text>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item key="configurations">
                <Link href="/create">
                  <Text color="warning" css={{ fontFamily: "monospace" }}>
                  <Rocket fontSize='15px'/> Create Launchad
                  </Text>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item key="theme" withDivider>
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
                fontFamily: "monospace",
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
  );
}
