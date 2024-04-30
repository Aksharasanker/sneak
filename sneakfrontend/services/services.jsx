

export const getDetails =async(reqBody)=>{
  return await ('POST',`${serverURL}/products`,reqBody)
}




export const serverURL='http://localhost:4000/'




import  axios  from "axios";




export const details =async(httpmethod,url,reqBody)=>{
      const reqConfig ={
         method:httpmethod,
         url:url,
         data:reqBody,
         headers:{"Content-Type":"application/json"}
      }

  return await axios(reqConfig).then((result)=>{
        return result
    }).catch((err)=>{
        return err
    })
    }
