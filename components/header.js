import {
  Navbar,
  Text,
  Avatar,
  Dropdown,
  Container,
  Image,
} from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import { Switch, useTheme, Spacer, Button } from "@nextui-org/react";
import { Blockie } from "web3uikit";

import {
  ConnectWallet,
  useAddress,
  useUser,
  useLogin,
  useLogout,
  useMetamask,
} from "@thirdweb-dev/react";
import styles from "./Navbar.module.css";
import { NftCat } from "@web3uikit/icons";
import { HandCoin } from "@web3uikit/icons";
import { Plus } from "@web3uikit/icons";
import { Grid } from "@web3uikit/icons";
import { ReferenceApi } from "@web3uikit/icons";
import { Rocket } from "@web3uikit/icons";
import { ChevronRight2X } from "@web3uikit/icons";
import Link from "next/link";
import { useState } from "react";
import truncateEthAddress from "truncate-eth-address";
import Skeleton from "./Skeleton/Skeleton";
import { Loading } from "@web3uikit/core";

import { startTransition } from "react";
import { Suspense, lazy } from "react";

export default function Header() {
  const navc = useState("navc");
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  const address = useAddress();
  const connect = useMetamask();
  const { login } = useLogin();
  const { logout } = useLogout();
  const { user, isLoggedIn } = useUser();
  const [secret, setSecret] = useState();

  const getSecret = async () => {
    const res = await fetch("/api/secret");
    const data = await res.json();
    setSecret(data.message);
  };

  const collapseItems = [
    "Marketplace",
    "Launchpad",
    "$RARE Airdrop",
    "Categories",
    "Learn",
  ];

  return (
    <Suspense fallback={<Loading />}>
      <Navbar isBordered variant={"floating"} height={80} tabIndex={0}>
        <Navbar.Brand
          hideIn={"xs"}
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
          <Link href="/">
            <Image
              src="https://bafkreiakjtw7wj6x7qpdliuoeypuar2554hebk3vnz75dhomkqrgbwvfya.ipfs.nftstorage.link/"
              alt="logo"
              width={40}
              height={40}
            />
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
          <Spacer />
        </Navbar.Brand>

        <Navbar.Content showIn={"xs"}>
          <Dropdown
            css={{
              background: "transparent",
              backdropFilter: "blur(10px)",
            }}
          >
            <Dropdown.Button light>Menu</Dropdown.Button>
            <Dropdown.Menu
              variant="light"
              aria-label="Actions"
              css={{
                background: "transparent",
                backdropFilter: "blur(10px)",
              }}
            >
              <Dropdown.Item key="new">
                <Link href="/buy">
                  <Text
                    size={16}
                    css={{
                      fontFamily: "$mono",
                    }}
                    color="warning"
                  >
                    🛒 Marketplace
                  </Text>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item key="copy" withDivider>
                {" "}
                <Link href="/whitepaper">
                  <Text
                    size={16}
                    css={{
                      fontFamily: "$mono",
                    }}
                    color="warning"
                  >
                    📜 Whitepaper
                  </Text>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item key="edit" withDivider>
                {" "}
                <Link href="/stake">
                  <Text
                    size={16}
                    css={{
                      fontFamily: "$mono",
                    }}
                    color="warning"
                  >
                    ❄️ Rarity
                  </Text>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item key="delete" color="success" withDivider>
                <Link href="/">
                  <Text
                    size={16}
                    css={{
                      fontFamily: "$mono",
                    }}
                    color="warning"
                  >
                    🚀 Launchpads
                  </Text>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item key="delete" color="success" withDivider>
                <Link href="/roadmap">
                  <Text
                    size={16}
                    css={{
                      fontFamily: "$mono",
                    }}
                    color="warning"
                  >
                    🛣️ Roadmap
                  </Text>
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Content>
        <Spacer />
        <Navbar.Content activeColor="warning" hideIn="xs" variant="light">
          <Link href="/buy" isActive key={"Market"}>
            {" "}
            <Text
              b
              css={{
                fontFamily: "monospace",
                textGradient: "45deg, $yellow600 -20%, $blue600 100%",
              }}
            >
              Marketplace
            </Text>
          </Link>
          <Link href="/whitepaper" isActive key={"whitepaper"}>
            {" "}
            <Text
              b
              css={{
                fontFamily: "monospace",
                textGradient: "45deg, $yellow600 -20%, $blue600 100%",
              }}
            >
              Whitepaper
            </Text>
          </Link>
          <Link href="/create">
            {" "}
            <Text
              b
              color="warning"
              css={{
                fontFamily: "monospace",
                textGradient: "45deg, $yellow600 -20%, $blue600 100%",
              }}
            >
              $RARE
            </Text>
          </Link>
          <Spacer />
        </Navbar.Content>

        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item.Market}
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
                {item.Market}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
        <Navbar.Content
          css={{
            "@xs": {
              jc: "flex-end",
            },
          }}
        >
          <ConnectWallet />
          <Dropdown placement="bottom-right">
            <Navbar.Item>
              <Dropdown.Trigger>
                <Button size={16} light>
                  <Blockie seed={address} />
                </Button>
              </Dropdown.Trigger>
            </Navbar.Item>

            <Dropdown.Menu
              aria-label="User menu actions"
              color="warning"
              onAction={(actionKey) => console.log({ actionKey })}
            >
              <Dropdown.Item key="buy">
                <Link href="/buy">
                  <Text color="warning" css={{ fontFamily: "monospace" }}>
                    <NftCat fontSize="15px" /> Buy NFT
                  </Text>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item key="sell">
                <Link href="/sell">
                  {" "}
                  <Text color="warning" css={{ fontFamily: "monospace" }}>
                    <HandCoin fontSize="15px" /> Sell NFT
                  </Text>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item key="create">
                <Link href="/">
                  <Text color="warning" css={{ fontFamily: "monospace" }}>
                    <Plus fontSize="15px" /> Drop Request
                  </Text>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item key="collections">
                <Link href={`/profile/${address}`}>
                  <Text color="warning" css={{ fontFamily: "monospace" }}>
                    <Grid fontSize="15px" /> My Collections
                  </Text>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item key="portfolio">
                <Link href={`/profile/${address}`}>
                  <Text color="warning" css={{ fontFamily: "monospace" }}>
                    <ReferenceApi fontSize="15px" /> My Portfolio
                  </Text>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item key="configurations">
                <Link href="/create">
                  <Text color="warning" css={{ fontFamily: "monospace" }}>
                    <Rocket fontSize="15px" /> Mint Drops
                  </Text>
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Content>
      </Navbar>
    </Suspense>
  );
}
