export default { 
  install (Vue) { 
    Vue.prototype.$DateAdd = function(y, m, d) { 
      let now = new Date();   // 현재 날짜 및 시간 
      let utc = now.getTime() + (now.getTimezoneOffset() * 60 * 1000); // UTC 시간 계산 
      let timeDiff = 9* 60 * 60 * 1000; // UTC to KST ( UTC + 9시간 ) 
      let curDateKorea = new Date(utc + (timeDiff));

      let yyyy = curDateKorea.getFullYear()
      let mm = curDateKorea.getMonth()
      let dd = curDateKorea.getDate()

      if(y !=0 || m !=0 || d !=0) {
        yyyy = yyyy + y
        mm = mm + m
        dd = dd + d 
      }

      mm++;
      
      if(mm <10){
        mm = "0"+ mm;
      }

      if(dd <10){
        dd = "0"+ dd;
      }

      let nowDate = yyyy + "-"+ mm +"-"+ dd

      return nowDate

      // return new Date(now.setDate(curDateKorea.getDate() + addDate)).toISOString().substr(0, 10); 
    } 
  } 
} 