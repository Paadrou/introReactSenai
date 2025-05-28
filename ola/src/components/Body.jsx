import React, { useState } from 'react'
import './Body.css'


function Body() {
  const[cont, setCont] = useState(0)
  const[inputValor, setInputValor] = useState("")
  const[inputN1, setInputN1] = useState('')
  const[inputN2, setInputN2] = useState('')

  function matar(){
    if(cont < 69420000){
      setCont(cont + 1)
    }
  }

  function reviver(){
    if(cont > 0){
      setCont(cont - 1)
    }
  }

  function alterar(){
    setCont(cont +Number(inputValor))
  }

  function somar(){
    setCont(Number(inputN1) + Number(inputN2))
  }

  function subtrair(){
    setCont(Number(inputN1) - Number(inputN2))
  }

  function multiplicador(){
    setCont(Number(inputN1) * Number(inputN2))
  }
  
  return (
    
    <div className='Body'>
        <h2 className='titulo2'>=P</h2>
        <p>
           E o mundo parou
           Depois que o meteoro atingiu, parou
           Eu não sei nada de você, baby, você é clichê, baby
           Mas tudo bem, todo mundo também  
           Eu não sou quebra-cabeça, mas a sua eu vou quebrar
           Quarenta e quatro mensagens quebraram meu celular
           Eu não sei nada de você, baby, você é clichê, baby
           Mas tudo bem, todo mundo também é   <br /><br />
          <div className='dino'>
           <button onClick={reviver} c>Reviver 1 dinossauro</button>               
           Contador de dinossauros que o meteoro matou: {cont} 
           <button onClick={matar} >  Matar 1 dinossauro  </button>               
          </div>
          </p>

          <div className="form">
            <input type="number"
            value={inputValor}
            onChange={(e)=> setInputValor(e.target.value)}/>
          </div>
          
          <button onClick={alterar}>alterar</button>

          <div className="calculadora">
            <input type="text" value={inputN1} onChange={(e)=> setInputN1(e.target.value)} />

            <button onClick={somar}>+</button>
            <button onClick={subtrair}>-</button>
            <button onClick={multiplicador}>x</button>

            <input type="text" value={inputN2} onChange={(e)=> setInputN2(e.target.value)} />

            {}
          </div>
    </div>
              )
            }

export default Body