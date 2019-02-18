var Schema = mongoose.Schema;
// create a schema
var toDoSchema = new Schema({
    itemId: Number,
    item: String,
    completed: Boolean
}, {collection:"TodoList"});
// we need to create a model using it
var ToDo = mongoose.model('ToDo', toDoSchema);

mongoose.connect('mongodb://localhost:27017/local', { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', ()=> {console.log( '---FAILED to connect to mongoose')})
db.once('open', () => {
 console.log( '+++Connected to mongoose')
})