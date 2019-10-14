import React, { Component } from 'react';

class main extends React.Component{
    render(){
        return(
            <div class="header">
            <h2>Mis pasiones</h2>
          </div>
          
          <div class="row">
            <div class="leftcolumn">
              <div class="card">
                <h2>Mi blog personal</h2>
                <h5>Mi entrenamiento</h5>
                <div class="cross" style="height:200px;"><img src="https://i.pinimg.com/originals/38/5b/e5/385be5fd940d6ecbacb5cee698da8ece.jpg"></img></div>
                <p>todos los dias (de lunes a sabado) paso entrenando varias actividades deportivas a lo largo del día. Lo cual inluye levantamiento olimpico,
                    gimnasia, y para unir los 2, practico tambien el bien aclamado y popular deporte, crossfit
                </p>
              </div>
              <div class="card">
                <h2>Los heroes del deporte</h2>
                <h5></h5>
                <div class="trinidad" style="height:100px;"><img src="https://morningchalkup.com/wp-content/uploads/2018/03/froning-fraser-bridges-1440xauto@2x.jpg"></img></div>
                <p>estos 3 hombres (de izquierda a derecha: Rich Froning, Mathew Fraser y Jsh Bridges) son considerados como los mejores atletas dentro del crossfit
                    sin duda, hoy en día por 3 años consecutivos, Mat, es el mejor del mundo
                </p>
              </div>
            </div>
            </div>
            <div>
            <div class="rightcolumn">
              <div class="card">
                <h2>About Me</h2>
                <p>como sabran, sino es cocinar, la cosa que mas me gusta hacer es entrenar, aparte de eso, paso mis dias en la UPA. Mucha gente, incluyendo 
                    algunos miembros de mi familia dicen que no se priorizar entre lo que es el estudio universitario y el entrenamiento.
                    Yo les digo que hay una linea delgada entre lo que es la adiccion y la pasion. Como atleta amateur, tengo que entrenar en una base diaria
                    pero como alumno universiatario, tambien tengo que hacer los trabajos de la facultad, es el gran problema que cada atleta universitario debe de pasar
                    lastimosamente.
                </p>
              </div>
              </div>
              </div>
              <div>
            <div>
              <div class="card">
                <h3>Datos curiosos mios...</h3>
                <li>Vivo con mis abuelos en luque, mientras que mis padres viven en chile</li>
                <li>Vivo en una familia de 5 personas aproximadamente</li>
                <li>una vez que termine la falcultad, tengo pensado estudiar cocina (y si es posible, en Francia</li>
              </div>
            </div>
          </div>
          
          <div class="footer">
            <p>autor: Ricardo Romero <br/>
            gracias por visitar este blog
            </p>

          </div>
          );
        }
}



export default main;