let myChart; 
let transactions = [];

fetch("/api/transaction")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    transactions = data;

    populateTotal();
    populateTable();
    populateChart();
  });



  function populateTotal() {

  }


  


  function populateTable() {

}





function populateChart() {

}









function sendTransaction(idAdding) {

}








document.querySelector().onclick = funciton () {
    sendTransaction(true)
}

document.querySelector().onclick = funciton () {
    sendTransaction(false)
}