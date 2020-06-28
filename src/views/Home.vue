<template>
  <div>
    <textarea v-model="word" ref="word" name="text" id="text" cols="30" rows="10"></textarea>
    <button @click="exportHTML">Export as Word</button>
    <router-link
      to="/login"
    > 
        login
    </router-link>
          
  </div>
</template>

<script>

export default {
  data(){
    return{
      word: ''
    }
  },
  methods:{
    exportHTML(){
      var vm = this, word = `<html xmlns:o='urn:schemas-microsoft-com:office:office xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>${vm.word}</body></html>`;

      var source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(word);
      var fileDownload = document.createElement("a");
      document.body.appendChild(fileDownload);
      fileDownload.href = source;
      fileDownload.download = 'document.doc';
      fileDownload.click();
      document.body.removeChild(fileDownload);
    }
  }
}
</script>
