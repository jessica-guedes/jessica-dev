import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";


export default function Projects() {
  const [itemsApi, setItemsApi] = useState([])

  useEffect(() => {
    let abortController = new AbortController(); 

    function getGitHubAPI() {
      fetch('https://api.github.com/users/Jessica-Guedes/repos')
      .then(async res => {
        if (!res.ok) {
          throw new Error(res.status)
        }
        let data = await res.json()
        setItemsApi(data)
      })
      .catch(e => console.log(e))
    }

    getGitHubAPI()

    return () => abortController.abort();  
  }, [])

  return (
    <div>
      <NavBar/>
      <div className="w-[600px] mx-auto bg-gray-900  p-4 " >
      
           <ul>
            {itemsApi.map(item => {
              return (
                <li key={item.id} className="p-4 border rounded-lg mb-6 leading-relaxed text-sm bg-neutral-900">
                  <h2 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    {item.name.toUpperCase()}
                  </h2>
                  <p className="text-white mb-4">{item.description}</p>
                  <p className="text-white">URL: {item.url}</p>
                  <p className="text-white">Data Criação: {Intl.DateTimeFormat('pt-BR')
                    .format(new Date(item.created_at))}
                  </p>
                </li>
              );
            })}
           </ul>
      
      </div>
    </div>
  )
}

