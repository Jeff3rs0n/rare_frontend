import { Container, Text, Spacer } from "@nextui-org/react"

export default function Footer() {
    return(
        <Container>
<hr></hr>
<Spacer />
<Spacer />
<Spacer />
<Spacer />
<Spacer />
<Text css={{
    fontFamily: "$mono"
}}>
    RareBay ©️ 2023. All rights reserved
</Text>
<Spacer  />
        </Container>
    )
}