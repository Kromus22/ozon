//получаем данные с сервера
const getData = () => {
  fetch('https://yoyo-b0ce6-default-rtdb.firebaseio.com/goods.json')
    //приводим их в нужный для нас вид. читаемые
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      console.log(data)
    })
}

export default getData