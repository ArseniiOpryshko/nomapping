const { parseString } = require('xml2js');

export function parseXmlToJson(xmlData) {
    return new Promise((resolve, reject) => {
      parseString(xmlData, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
}