const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

class Transaction{
    constructor(purpose,category,dateOfTransaction,amount,description,id, userId){
        this._id = id ? new mongodb.ObjectId(id) : null;
        this.purpose = purpose
        this.category = category
        this.dateOfTransaction = dateOfTransaction
        this.amount = amount
        this.description = description
        this.userId = userId;
    }

    save() {
        const db = getDb();
        let dbOp;
        if (this._id) {
          // Update the transaction
          dbOp = db
            .collection('transactions')
            .updateOne({ _id: this._id }, { $set: this });
        } else {
          dbOp = db.collection('transactions').insertOne(this);
        }
        return dbOp
          .then(result => {
            console.log(result);
          })
          .catch(err => {
            console.log(err);
          });
      }
    
      static findAll(userId) {
        const db = getDb();
        return db
          .collection('transactions')
          .find({userId})
          .toArray()
          .then(transactions => {
            // console.log(transactions);
            return transactions;
          })
          .catch(err => {
            console.log(err);
          });
      }
    
      static findById(userId,prodId) {
        const db = getDb();
        return db
          .collection('transactions')
          .find({ _id: new mongodb.ObjectId(prodId),userId })
          .next()
          .then(transaction => {
            // console.log(transaction);
            return transaction;
          })
          .catch(err => {
            console.log(err);
          });
      }
    
      static deleteById({userId,prodId}) {
        const db = getDb();
        return db
          .collection('transactions')
          .deleteOne({ _id: new mongodb.ObjectId(prodId),userId })
          .then(result => {
            console.log('Deleted');
          })
          .catch(err => {
            console.log(err);
          });
      }
}

module.exports = Transaction