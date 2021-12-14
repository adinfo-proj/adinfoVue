export default {
  install (Vue) {
    Vue.prototype.$DateAdd = function(addDate) {
      var now = new Date();   // 현재 날짜 및 시간
      return new Date(now.setDate(now.getDate() + addDate)).toISOString().substr(0, 10);
    }
  }
}