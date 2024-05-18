<template>
    <div>
      <h1>Upload File</h1>
      <input type="file" @change="onFileChange" />
      <textarea v-model="text"></textarea>
      <button @click="upload">Upload</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  export default {
    data() {
      return {
        file: null,
        text: "",
        data: {'test':1, 'test2':2}
      };
    },
    methods: {
      onFileChange(event) {
        this.file = event.target.files[0];
      },
      upload() {
        const formData = new FormData();
        formData.append("file", this.file);
        formData.append("title", 'adsmytitle');
        formData.append("price", 'adsmytitle');
        formData.append("currency", 'adsmytitle');
        formData.append("description", 'qwffqwfqwqwfqwfqwf');
        formData.append("region", 'qwffqwfqwqwfqwfqwf');
        formData.append("category_url", 'qwffqwfqwqwfqwfqwf');
        formData.append("subcategory_url", 'qwffqwfqwqwfqwfqwf');
        formData.append("owner_id", 2);
        formData.append('owenr_type', 'user')

        axios.post('http://127.0.0.1:8000/ads', formData)
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.error('Error:', error);
          });
      }
    }
  };
  </script>