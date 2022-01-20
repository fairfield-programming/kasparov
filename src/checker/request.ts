import * as https from 'https';

export default function Request(options, data) {
  
  return new Promise((resolve, reject) => {
  
    const req = https.request(options, (res) => {
  
      res.setEncoding('utf8');
      let responseBody = '';

      res.on('data', (chunk) => {
  
        responseBody += chunk;
  
      });

      res.on('end', () => {
  
        resolve(JSON.parse(responseBody));
  
      });
  
    });

    req.on('error', (err) => {
 
      reject(err);
 
    });

    req.write(data)
    req.end();
    
  });

}