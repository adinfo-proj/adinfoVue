window.onload = function() {
  today = new Date();
  today = today.toISOString().slice(0, 10);
  bir = document.getElementById("startDate1");
  bir.value = today;
  bir = document.getElementById("closeDate1");
  bir.value = today;
}