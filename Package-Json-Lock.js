// 1. What is Package Json file in npm projects ??
// ans : Package.json file  stores the basic information about the project and specifically is stores 
// the informaton about version, dependencies, package etc etc. 

// {
//     "name": "react-routing",
//     "private": true,
//     "version": "0.0.0",
//     "type": "module",
//     "scripts": {
//       "dev": "vite",
//       "build": "vite build",
//       "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
//       "preview": "vite preview"
//     }


// Package.lock.json file : this file stores the precise information about the projects like current version of the node , npm , dependencies, dev dependencies etc etc. so that as soon as any users will install the npm packages the will get the same project and version. 