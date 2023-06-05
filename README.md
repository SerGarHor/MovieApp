🎬🎬🎬🎬🎬🎬🎬🎬🎬🎬 **MovieApp** 🎬🎬🎬🎬🎬🎬🎬🎬🎬🎬

Hola!! a continuación te contare de que trata este proyecto, como sirve algunas funciones y de donde se consumio la api para las peliculas

--Primero, se debe tener la version 15 de Angular y con este l una versión de Node compatible, en este caso use estas versiones:


![image](https://github.com/SerGarHor/MovieApp/assets/93298529/af9feb18-abcc-45af-a973-2a3fc986ec50)


--Ahora que ya se verifico las versioens, tenemos que crear una cuenta en TMDB, aqui es donde consumiremos la información, te dejo la documentación
  aqui: https://developer.themoviedb.org/docs
  
--Por el momento en esta API solo se puede realizar peticiones get, algunas estan fallidas pero otras estan sirviendo, yo use esta API:

![image](https://github.com/SerGarHor/MovieApp/assets/93298529/f6985d01-0de4-4d2a-a944-1d1e3e6a895d)

Esta API nos trae las peliculas que estan en taquilla en los cines, las ultimas en el actual año, un total de casi 20 peliculas 🎬

👾👾👾👾👾👾Ya con esto podemos ir al codigo 👾👾👾👾👾👾:

--Dentro del archivo service esta la respectiva peticón a la api, ahi encontraras lo necesario para poder acceder a ella:


![image](https://github.com/SerGarHor/MovieApp/assets/93298529/cf5280c7-3548-4d7b-a09f-3bbc3f5fac7a)


La aplicación es responsive, eso lo puedes encontrar en los archivos de estilos, se uso boostrap, angular material y estilos con grillas.

--Pasemos a la creación de peliculas

  Por el momento no se puede crear peliculas por medio de la API, pero tuve una idea y es crear una pleicula y agregarsela al array que nos llega de la API
  con eso podemos crear peliculas y visualizarlas despues de crearlas siendo esta el ultimo item de la lista.
  
--El filtro del buscar funciona por meido de eventos del teclado y se hace un filtro al array:

![image](https://github.com/SerGarHor/MovieApp/assets/93298529/0ce93f30-9ce0-4413-ab1b-b636f102f427)
![image](https://github.com/SerGarHor/MovieApp/assets/93298529/e0e134c0-24ae-4068-b58f-407f39e5ba98)

👾👾👾👾👾👾 Ver detalles de peliculas 👾👾👾👾👾👾
![image](https://github.com/SerGarHor/MovieApp/assets/93298529/12834ac9-3076-4d68-ad30-fd66c7b13926)

En esta linea nos dirige a un componente ene l cual podemos saber los detalles a profundidad de la pelicula
![image](https://github.com/SerGarHor/MovieApp/assets/93298529/97b6d4d2-597f-487c-bdca-76236e6f7072)

Se cambia el valor de una variable en el servicio y se consume esta misma para mostrar los datos en este componente
![image](https://github.com/SerGarHor/MovieApp/assets/93298529/c3760337-6571-4eb4-b322-c631c0e7fa9c)


Esto seria todo, espero te sirva como aprendizaje, aprendi bastante con este reto, hubo cosas nuevas y otras a destacar, gracias por leer!!!!



