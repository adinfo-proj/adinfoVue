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

      yyyy = yyyy + y
      mm = mm + m
      dd = dd + d 


      // 월은 0~11로 표기 되기 때문에 1을 더해준다
      mm++;



      // 1월인 경우 -1이 되면 자동으로 12월로 표기되는게 아니라 0월로 나오기 때문에 오류 발생, 월이 0으로 표기 된경우 값을 12월로 변경해주고 해당월을 전년도로 표기
      if(mm == 0 ){
        mm = 12
        yyyy--;
      }

      // 가져온 일자가 라스트데이보다 큰경우 라스트데이로 변경해준다
      // if(mm == 2 || dd == 31){
        let  febLast = new Date(yyyy,mm, 0)
        let lastDay = febLast.getDate() //  해당월의 마지막 날짜
        if(dd > lastDay) {
          dd = lastDay
        }
      // }
      
      
      if(mm < 10){
        mm = "0"+ mm;
      }

      if(dd < 10){
        dd = "0"+ dd;
      }



      let nowDate = yyyy + "-"+ mm +"-"+ dd

      return nowDate

      // return new Date(now.setDate(curDateKorea.getDate() + addDate)).toISOString().substr(0, 10); 
    } 
  } 
} 