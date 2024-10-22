# reactExplore


# Ready for prod :
 Remove the comments, minimize, bundles.

 # standard repo for all packages :
 npm 

# How to you initiate you app with npm?
By npm init.

# How to bundle our app?
use webpack or parcel. caret vs tilde? caret - upgardes minor version automatically, tilde - major version automatically.

Difference btw package.json and package.lock.json (has exact version)

what happens when you do npx parcel index.html ??
Igniting our app into server.
npx vs npm : npx executes the package, npm install the package.

# remove CDN links and install react and react dom as npm dependencies so they are present in your node modules instead of making CDN API call everytime.

# Parcel
- Dev build
- local server
- HMR - hot module replacement
- File watching algo - written in c++
- Caching - Faster builds - see .parcel-cache
- Image optimization
- Minification
- Bundling
- Compress
- Consistency Hashing 
- Code splitting
- Differential bundling - To support all old browsers
- Error handling
- Tree shaking -  remove unused code
- HTTPS also supported


# Production build 

- npx parcel build index.html - Production ready code in dist with all minified, tree shaking, compressed.
- Highly optimized build

# BrowserList

- https://browserslist.dev/?q=bGFzdCAxMCBjaHJvbWUgdmVyc2lvbnM%3D - Tool which helps in adding how much percentage of browsers your app should work.

# Own Create React App complete *************

# ************************

# Extensions 
- Bracket pair colorization, ESlint, Prettier, 

# What is React Component ?
# class based components. OLD
# functional components. NEW

# JSX takes care of cross scripting attack on its own.
# call API and assign the variable data directly, JSX will sanitize the data without blindly assigning.

#      <Title/>  ,  <Title></Title>  {Title()} All are same










