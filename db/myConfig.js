const pool = require('./config.js')

let allService = {
    query(sql,values) {
        return new Promise((resolve,reject) => {
            pool.getConnection( (err,con) => {
                if(err){
                    reject(err)
                }
                else {
                    con.query(sql,values, (err,rows) => {

                        if(err) {
                            reject(err)
                        }
                        else {
                            resolve(rows)
                        }
                        con.release()

                    })
                }
            })
        })
    },
    findAllData() {
        let _sql = `SELECT * FROM user`

        return allService.query(_sql)
    },
    adduserData(obj) {
        let _sql = `INSERT INTO user set user=?, pass=?`;
        return allService.query(_sql,obj)
    }
}

module.exports = allService