const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

const ObjectId = mongodb.ObjectId;

class User{
    constructor(name,email,password,savings,budget,monthlyIncome,id){
        this._id = id;
        this.name = name
        this.email = email
        this.password = password
        this.savings = savings
        this.budget = budget
        this.monthlyIncome = monthlyIncome
    }

    save() {
        const db = getDb();
        return db.collection('users').insertOne(this);
      }
    
    static findOne(props){
      const db = getDb();
        return db.collection('users')
        .findOne(props)
        .then(user=>{
          // console.log(user)
          return user;
        })
        .catch(err => {
          console.log(err);
        });
    }
    
      static findById(userId) {
        const db = getDb();
        return db
          .collection('users')
          .findOne({ _id: new ObjectId(userId) })
          .then(user => {
            // console.log(user);
            return user;
          })
          .catch(err => {
            console.log(err);
          });
      }
}

module.exports = User