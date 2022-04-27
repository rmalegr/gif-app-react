
import React from "react"
import { shallow } from "enzyme"
import { GifGridItem } from "../../components/GifGridItem"

describe('Pruebas en GifGridItem', () => {

   const wrapper= shallow( <GifGridItem title={ title } url={ url }  />)
   const title = 'un titulo';
   const url = 'https://localhost/algo.jpg'
  
   test('debe mostrar el componente', () => { 
      expect( wrapper ).toMatchSnapshot();
   })

   test('debe de tener un  parrafo con el title ', () => { 
      const p = wrapper.find('p');
      expect( p.text().trim() ).toBe( title )
   })
})