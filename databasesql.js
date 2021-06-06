const { open } = require('sqlite')
const sqlite3 = require('sqlite3')

;(async () => {
  // open the database
  const db = await open({
    filename: './backend/Product.sqlite',
    driver: sqlite3.Database
  })

  await db.migrate({ force: true })
  const products = await db.all('select * from Product')
  console.log(JSON.stringify(products, null, 4))
})()
