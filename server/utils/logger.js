/* 2 ways to use:
    1) non-destructure
      const logger = require('./utils/logger')

      logger.info('message')

      logger.error('error message')

    2) destructure the functions  
*/


const info = (...params) => {
  if (process.env.NODE_ENV !== 'test') { 
    console.log(...params)
  }
}
  
const error = (...params) => {
  if (process.env.NODE_ENV !== 'test') { 
    console.error(...params)
  }
}
  
module.exports = {
  info, error
}

