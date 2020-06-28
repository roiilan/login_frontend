
<template>
  <div>
  <!-- WORD PAGE!
    <router-link to="/">    
      Home page
    </router-link> -->


<textarea id="templateText"  v-model="templateText2" style="width:300px;height:200px;">
</textarea>
{{templateText}}

<br>
<input type="file" id="docxTemplateInput"/>




      
  </div>
</template>

<script>

import Docxtemplater from "docxtemplater";
import PizZip from "pizzip";
import PizZipUtils from "pizzip/utils/index.js";

import FileSaver from "../libs/FileSaver.js";

export default {
  data(){
    return{
        templateText2: null,
        templateTexty: {
"first_name" : "Hipp",
"last_name" : "Edgar",
"phone" : "0652455478",
"description" : "New Website"
},

    }
  }, 
  mounted() {
	// document.getElementById("docxTemplateInput").addEventListener("change", readTemplateFile);


    // window.addEventListener("change",function(evt) {
    document.getElementById("docxTemplateInput").addEventListener("change",function(evt) {
    //readTemplateFile
	  // Retrieve the first (and only!) File from the FileList object
		var templateFile = evt.target.files[0];
		console.log(templateFile.name); // the file name


		if (templateFile) {
            var r = new FileReader();
            
            

            //  createImage (file) {
            //     let reader = new FileReader()
            //     reader.onload = (event) => {
            //         this.product.image = event.target.result
            //     }
            //     reader.readAsDataURL(file)
            //     }



			// r.onload = function(e) {
			r.onload = function(e) {
                console.log(e.target.result, " e.target.result")
                console.log(e.target, " e.target")
                var contents = e.target.result;
                
                ////////////////////////////// 
                // doc = new window.Docxgen(contents);   

                var zip = new PizZip(contents);
                var doc = new Docxtemplater(zip);
                ////////////////


				// var text = document.getElementById("templateText").value;
                var text = this.templateText;
                console.log(this.templateText, "templateText")

				var data = JSON.parse(text);
				
				doc.setData(data); //set the templateVariables
				doc.render() //apply them (replace all occurences of {first_name} by Hipp, ...)
				var out = doc.getZip().generate({
					type : "blob"
				})
				saveAs(out, "output.docx")
			}
			r.readAsBinaryString(templateFile);
		} else {
			alert("Failed to load file");
		}
    });
    // document.body.addEventListener("click",this.handleClick)
  },
//   destroyed(){
//     document.body.removeEventListener("click",this.handleClick)
//   },
 
}
</script>
