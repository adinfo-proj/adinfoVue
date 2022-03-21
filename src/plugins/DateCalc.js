export default { 
  install (Vue) { 
    Vue.prototype.$DateAdd = function(addDate) { 
      let now = new Date();   // 현재 날짜 및 시간 
      let utc = now.getTime() + (now.getTimezoneOffset() * 60 * 1000); // UTC 시간 계산 
      let timeDiff = 9* 60 * 60 * 1000; // UTC to KST ( UTC + 9시간 ) 
      let curDateKorea = new Date(utc + (timeDiff)); 

      return new Date(now.setDate(curDateKorea.getDate() + addDate)).toISOString().substr(0, 10); 
    } 
  } 
} 