  /*
  Offset stays same unlike other countries where Turkish government decided to pass a law for continuous summer time usage
  
  English Source = https://www.theguardian.com/world/2016/sep/08/turkey-to-stay-on-summer-time-all-year-round

  This law will be revoked on 28 October 2018
  Module will be updated 15 October 2018 in a similar manner to moment.js
  */

function getTime(){
  date = new Date();
  var utc = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
  return new Date(utc.getTime() - (-180) * 60000).toLocaleString(); 
}

module.exports.getTime = getTime;
