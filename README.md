# Segmentum - an ETH Prague hackathon app

## Description

👋 Segmentum is aimed at facilitating communication with token-gated communities. It allows you to segment a group of people from your community and airdrop or message them via Blockscan chat. As an example, you may want to communicate only to all your OG token holders who recently minted a POAP at your latest community event and reward them with any form of token for their active participation. 

## Screenshot of Segmentum

![Screenshot of the App Segmentum](src/assets/images/screenshot_segmentum.png?raw=true)

## Disclaimer

In the current form of the tool you could use it easily to spam walllet holders. Anons, play safe, we don't do this here. Later iterations will add spam control, promised 🤞

## Demo

You can checkout Segmentum at `https://bi4uak1fq34x.usemoralis.com`   

## How to run Segmentum locally

Install the dependencies

 ```
yarn install
```

Start the application   
```
yarn start
```

Go to this webpage in your browser

```
http://localhost:3000
```

   
## Local development   
   
Web page is available at:   

```
http://localhost:3000
```

## Deploy app
   
First you need to build the app
   
```
yarn build
```

Next step is to navigate to the build/ folder 
   
```
cd build
```
   
To deploy you need Moralis CLI to be installed      

```
npm install -g moralis-admin-cli
```

Then just run the deployment command
   
```
moralis-admin-cli deploy
```
   
Now you will be asked for some details:
- Specify Moralis Api Key (secret info)
- Specify Moralis Api Secret (secret info)
- What server do you want to connect to? (0)

BOOOM 💥 - DEPLOYED!

## Credits

Created with ❤️ on the ETH Prague Hackathon. 

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
