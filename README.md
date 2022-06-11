#  ETH Prague hackaton app
   
See an app at `https://bi4uak1fq34x.usemoralis.com`   
   
## Local development   
   
```
yarn install
```
   
```
yarn start
```
   
Web page is available at:   

```
http://localhost:3000
```

## Deploy app
   
First you need to build an app:   
   
```
yarn build
```

Next step is to navigate to build folder:   
   
```
cd build
```
   
To deploy you need Moralis CLI to be installed      

```
npm install -g moralis-admin-cli
```

Then just run deployment command   
   
```
moralis-admin-cli deploy
```
   
Now you will be asked for some details:
- Specify Moralis Api Key (secret info)
- Specify Moralis Api Secret (secret info)
- What server do you want to connect to? (0)

BOOM - DEPLOYED!
Visit `https://bi4uak1fq34x.usemoralis.com` to see the website
 