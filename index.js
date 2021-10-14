const express = require('express')
const checker = require('ikea-availability-checker');
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', async (req, res) => {
    const storeId= '562'
    const items = [ 
    {id: 's69157456', name: 'Lit Manou'},
    {id:'50214560', name: 'Pax 100x235'},
    {id: '80329197', name:'Tyssedal Porte'},
    {id: '20338411', name:'Porte - Poignées'},
    {id: '30214504', name:'Porte - Charnières'},
    {id: '30404028', name:'Tiroir bijoux'},
    {id: '20246708', name:'Tiroir'},
    {id: '00446534', name:'Porte pantalons'},
    {id: '70246386', name:'Plateau coulissant'},
    {id: '00257298', name:'Corbeille'},
    {id: '30263245', name:'Corbeille - Rail'},
    {id: '70257638', name:'Tablettes en verre'},
    {id: '70277957', name:'Tablettes'},
    {id: '30256891', name:'Tringle'},
  ]
    var data = await Promise.all(items.map(async (item) => {
      const tmp = await checker.availability(storeId, item.id);
      tmp['name'] = item.name
      return tmp
    }))
    res.render('pages/index', {data})
  })
  .get('/hugo', async (req, res) => {
    const storeId= '562'
    const items = [ 
    {id: '10488769', name: 'Kallviken Porte Gris ciment'},
    {id: '20348896', name: 'ÖSTERNÄS - Poignées cuir'},
    {id: '70246758', name: 'Komplement - Tiroir 100x35'},
    {id: 's59010988', name: 'Komplement - Corbeille 50x58'},
    {id: '20433984', name: 'Komplement - Tiroir Bijoux 100x35'},
    {id: '60342656', name: 'TRÅDFRI - Transfo elec'},
  ]
    var data = await Promise.all(items.map(async (item) => {
      const tmp = await checker.availability(storeId, item.id);
      tmp['name'] = item.name
      return tmp
    }))
    res.render('pages/hugo', {data})
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
