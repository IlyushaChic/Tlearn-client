import {createDomain} from 'effector'



const dict=createDomain()




const handleRemoveDict = (dict, header) => {

  // console.log("dict")
  console.log(dict)
  // console.log("header")
  // console.log(header)


  // dict.forEach(dict=>{    
  //   console.log(dict.name)
  //   console.log(header)
  // })

  dict.filter(dicts => dicts.name !== header)
  console.log(dict)
  return dict
}



//для получения словаря
export const setDict=dict.createEvent()

//для создания словаря
export const createDict=dict.createEvent()

//для обновления словаря
export const updateDict=dict.createEvent()

//для удаления словаря
export const removeDict=dict.createEvent()


// export const setUserName=dict.createEvent()

//первое значение это предыдущее значение 
export const $dict=dict.createStore([])
.on(createDict,(state,dict)=>[...state,dict])
.on(setDict,(_,dict)=>dict)
.on(removeDict, (state,name) => [...handleRemoveDict(state, name)]

)
//принимает значение в setAuth и присваивает это значение в $auth





