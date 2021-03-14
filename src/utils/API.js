import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=100&nat=us"



// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  search: function() {
    return axios.get(
     BASEURL
     
    );
  }
};
