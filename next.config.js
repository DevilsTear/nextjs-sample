const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

/** @type {import('next').NextConfig} */
const nextDevConfig = {
  reactStrictMode: true,
  env: {
    mysql_connection_string: 'test connectin string'
  }
}

const nextProdConfig = {
  reactStrictMode: true,
  env: {
    mysql_connection_string: 'prod connectin string'
  }
}

module.exports = (phase) => {
  if(phase === PHASE_DEVELOPMENT_SERVER){
    return nextDevConfig;
  }

  return nextProdConfig;
}
