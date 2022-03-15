const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

class MongoDb {
  constructor(name) {
    this.name = name;
    this.client = new MongoClient(
      process.env.MONGODB_URI,
      { useUnifiedTopology: true }
    )
  }

  async _connect() {
    try {
      this.client.connect()
      const db = await this.client.db('trabajo-final');
      const collection = await db.collection(this.name);
      return collection;
    } catch (err) {
      console.error(err)
    }
  }

  async _disconnect() {
    try {
      await this.client.close();
    } catch (err) {
      console.error(err)
    }
  }

  async findAll() {
    try {
      const collection = await this._connect();
      return await collection.find().toArray();
    } catch (err) {
      console.error(err);
    } finally {
      await this._disconnect();
    }
  }

  async find(id) {
    try {
      const collection = await this._connect();
      const record = await collection.findOne({ _id: ObjectId(id) });
      if (!record) return { error: 'Registro no encontrado' };
      return record;
    } catch (err) {
      console.error(err);
    } finally {
      await this._disconnect();
    }
  }

  async create(data) {
    try {
      const collection = await this._connect();
      await collection.insertOne({ ...data, timestamp: Date.now() });
    } catch (err) {
      console.error(err);
    } finally {
      await this._disconnect();
    }
  }

  async update(data, id) {
    try {
      const collection = await this._connect();
      await collection.findOneAndUpdate(
        { _id: ObjectId(id) },
        { $set: { ...data, timestamp: Date.now() } },
        { upsert: false },
      )
    } catch (err) {
      console.error(err);
    } finally {
      await this._disconnect();
    }
  }

  async remove(id) {
    try {
      const collection = await this._connect();
      await collection.deleteOne({ _id: ObjectId(id) });
    } catch (err) {
      console.error(err);
    } finally {
      await this._disconnect();
    }
  }

  async removeAll() {
    try {
      const collection = await this._connect();
      await collection.deleteMany();
    } catch (err) {
      console.error(err);
    } finally {
      await this._disconnect();
    }
  }
}

module.exports = MongoDb;
