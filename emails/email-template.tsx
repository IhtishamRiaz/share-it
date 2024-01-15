import * as React from "react";
import {
   Body,
   Button,
   Container,
   Column,
   Head,
   Heading,
   Html,
   Img,
   Preview,
   Row,
   Section,
   Text,
} from "@react-email/components";
import { EmailProps } from "@/lib/types";

const EmailTemplate = ({
   emailToSend,
   shortUrl,
   userName,
   fileName,
   fileType,
   fileSize,
}: EmailProps) => {
   return (
      <Html>
         <Head />
         <Preview>Yelp recent login</Preview>
         <Body style={main}>
            <Container>
               <Section style={content}>
                  {/* <Img width={620} src={`${baseUrl}/static/yelp-header.png`} /> */}

                  <Row style={{ ...boxInfos, paddingBottom: "0" }}>
                     <Column>
                        <Heading
                           style={{
                              fontSize: 32,
                              fontWeight: "bold",
                              textAlign: "center",
                           }}
                        >
                           Hi {emailToSend},
                        </Heading>
                        <Heading
                           as="h2"
                           style={{
                              fontSize: 26,
                              fontWeight: "bold",
                              textAlign: "center",
                           }}
                        >
                           {userName} Shared a file with you.
                        </Heading>

                        <Text style={paragraph}>
                           <b>File Name: </b>
                           {fileName}
                        </Text>
                        <Text style={{ ...paragraph, marginTop: -5 }}>
                           <b>File Size: </b>
                           {(Number(fileSize) / 1024 / 1024).toFixed(2)} MB
                        </Text>
                        <Text style={{ ...paragraph, marginTop: -5 }}>
                           <b>File Type: </b>
                           {fileType}
                        </Text>
                        <Text
                           style={{
                              color: "rgb(0,0,0, 0.5)",
                              fontSize: 14,
                              marginTop: -5,
                           }}
                        >
                           *Access and Download the file at your own risk.
                        </Text>

                        <Text style={{ ...paragraph, marginTop: -5 }}>
                           Click the button below to access your file:
                        </Text>
                     </Column>
                  </Row>
                  <Row style={{ ...boxInfos, paddingTop: "0" }}>
                     <Column style={containerButton} colSpan={2}>
                        <a href={shortUrl} style={button}>
                           Download
                        </a>
                     </Column>
                  </Row>
               </Section>

               <Text
                  style={{
                     textAlign: "center",
                     fontSize: 12,
                     color: "rgb(0,0,0, 0.7)",
                  }}
               >
                  © 2024 | ShareIt | https://shareit.vercel.app
               </Text>
            </Container>
         </Body>
      </Html>
   );
};

export default EmailTemplate;

const main = {
   backgroundColor: "#fff",
   fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
   fontSize: 16,
};

const containerButton = {
   display: "flex",
   justifyContent: "center",
   width: "100%",
};

const button = {
   backgroundColor: "#e00707",
   padding: "12px 30px",
   borderRadius: 3,
   color: "#FFF",
   fontWeight: "bold",
   border: "1px solid rgb(0,0,0, 0.1)",
   cursor: "pointer",
   margin: "0 auto",
   display: "inline-block",
   fontDecoration: "none",
};

const content = {
   border: "1px solid rgb(0,0,0, 0.1)",
   borderRadius: "3px",
   overflow: "hidden",
};

const boxInfos = {
   padding: "20px 40px",
};

const containerImageFooter = {
   padding: "45px 0 0 0",
};
