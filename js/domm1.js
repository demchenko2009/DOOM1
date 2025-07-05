// Створити розмітку з кнопкою та текстовим полем.
//  За допомогою JavaScript отримати доступ до кнопки та текстового поля за
//  їх ідентифікаторами та змінити текст на кнопці на значення текстового поля.

 const butttonEL = document.querySelector(".domik")
 const input = document.querySelector(".inputik")
 
butttonEL.textContent=input.value





// Створити розмітку з заголовком та зображенням. За допомогою JavaScript отримати доступ до зображення та змінити значення атрибута "src" на шлях до іншого зображення.

 const titleEl = document.querySelector(".hh1")
 titleEl.style.textAlign ="center"
  const imges = document.querySelector("img")
  imges.src="https://moviemaker.minitool.com/images/uploads/jp/articles/2022/10/imgur-album-downloader/imgur-album-downloader-thumbnail.png"
  imges.style.margin="0 auto";
  imges.style.display="block"


//   Створити розмітку з посиланням та зображенням. За допомогою JavaScript отримати доступ до посилання та змінити значення атрибута "href" на нову URL-адресу. Також отримати доступ до зображення та додати новий атрибут "alt" з описом зображення.

  const ssilka = document.querySelector(".aa");
  ssilka.href= "https://www.twitch.tv/?ysclid=mcqioa8we677417589"

  const elemImg= document.querySelector(".im")
  elemImg.alt = "ето гном василий"
  console.log(elemImg);
  

//   Створити розмітку зі списком елементів. За допомогою JavaScript отримати доступ до першого елемента списку та змінити його вміст на новий текст.
  const elemList= document.querySelector(".list li")
elemList.textContent = "dad"
  