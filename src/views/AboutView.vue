<template>
  <div>
    <input type="file" ref="fileInput" @change="onFileChange">
    <button @click="submitForm">Отправить</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      file: null,
      formData: {
        name: '',
        description: '',
        domain: this.$store.state.domain,
      }
    };
  },
  methods: {
    onFileChange(event) {
      this.file = event.target.files[0];
    },
    async submitForm() {
      const formData = new FormData();
      formData.append('file', this.file);
      formData.append('name', this.formData.name);
      formData.append('description', this.formData.description);

      try {
        const response = await axios.post(`${this.domain}/ads`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>
