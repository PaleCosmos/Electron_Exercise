<template>
  <v-container fluid>
    <v-card>
      <v-toolbar dense flat color="#aaaaaa" dark>
        <v-toolbar-title>문서편집기</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="editMode = !editMode">
          <v-icon>{{editMode? 'mdi-eye' : 'mdi-pencil'}}</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text>
        <v-textarea 
        ref="tuiEditor"
        initialEditType="wysiwyg"
        v-model ="editorText"
        :readonly="editMode"/>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="read">read</v-btn>
        <v-btn @click="write">write</v-btn>
          <v-btn >x</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
const require = window.require
const fs = require('fs')
const { dialog } = require('electron').remote

const dialogOptions = {
  filters: [
    {
      name: 'text and markdown',
      extensions: ['txt', 'md']
    }
  ]
} 

export default {
  components: {
  },
  data () {
    return {
      editMode: true,
      editorText: '',
      height: '100%'
    }
  },
  methods: {
    read () {
      const file = dialog.showOpenDialogSync(dialogOptions)

      if (!file) {
        console.log('nofile [read]')
        return
      }
      
      this.editorText = fs.readFileSync(file[0]).toString()
      console.log(this.editorText)
    },
    write () {
      const file = dialog.showSaveDialogSync(dialogOptions)

      if (!file) {
        console.log('nofile [write]')
        return
      }
      console.log(this.editorText)
      fs.writeFileSync(file, this.editorText)
    }
  }
}
</script>
