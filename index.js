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
    {id:'50214560', name: 'Pax 100x235'},
    {id: '80329197', name:'Tyssedal Porte'},
    {id: '20338411', name:'Porte - Poignées'},
    {id: '30214504', name:'Porte - Charnières'},
    {id: '30404028', name:'Tiroir bijoux'},
    {id: '20246708', name:'Tiroir face en verre'},
    {id: '70246386', name:'Plateau coulissant'},
    {id: '70257638', name:'Tablettes en verre'},
    {id: '70273092', name:'Norraryd chaises'},
    {id: 's99390948', name:'Hemnes Lit + matelas'},
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
    {id: '20433984', name: 'Komplement - Tiroir Bijoux 100x35'},
    {id: '70261150', name: 'Markus chaise de bureau'},
  ]
    var data = await Promise.all(items.map(async (item) => {
      const tmp = await checker.availability(storeId, item.id);
      tmp['name'] = item.name
      return tmp
    }))
    res.render('pages/hugo', {data})
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
