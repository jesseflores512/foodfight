const Schema = mongoose.Schema;

const ChallengerSchema = new Schema ({
  name: {
    type: String,
    trim: true,
    required: 'Name is Required'
  },

  address: {
    type: String,
    trim: true,
    required: 'Address is Required'
  },

  city: {
    type: String,
    trim: true,
    required: 'City is Required'
  },

  state: {
    type: String,
    trim: true,
    required: 'State is Required'
  },

  picture: {
    type: String,
    trim: true
  }

});
