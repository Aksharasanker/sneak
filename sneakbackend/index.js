const jsonServer=require('json-server')

const sneakServer=json.jsonServer.create()

const router =jsonServer.router('db.json')

const middlware = jsonServer.default()
 
sneakServer.use(middlware)

sneakServer.use(router)

const PORT=4000 || process.env

sneakServer.listen(PORT,()=>{
    console.log(`server running successsfully at port ${PORT}`);
})