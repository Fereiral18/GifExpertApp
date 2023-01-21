import { useState } from "react"
import { AddCategory, GifGrid } from "./components"


export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch'])
 
  const addCategory = (newCategory) =>{
    if(categories.includes(newCategory))return;
    return setCategories([newCategory, ...categories])
    
  }
        return (
            <>
           
            <h1>GifExpertApp</h1>
          
            <AddCategory 
            onNewCategory={addCategory}
            />

        
              {
                categories.map((category) =>(
                    
                      <GifGrid 
                      key={category} 
                      category ={category} />
                    ))
            
              }  
           
            

            </>
            )
}
