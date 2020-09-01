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
        <editor v-model="content" v-if="editMode"></editor>
        <viewer :value="content" v-else></viewer>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="read">read</v-btn>
        <v-btn @click="write">write</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import 'tui-editor/dist/tui-editor.css'
import 'tui-editor/dist/tui-editor-contents.css'
import 'codemirror/lib/codemirror.css'
const require = window.require
const { Editor, Viewer } = require('@toast-ui/vue-editor')
const fs = require('fs')
const { dialog } = require('electron').remote

const options = {
  filters: [
    {
      name: 'text and markdown',
      extensions: ['txt', 'md']
    }
  ]
} 

export default {
  components: {
    editor: Editor,
    viewer: Viewer
  },
  data () {
    return {
      editMode: true,
      content: null
    }
  },
  methods: {
    read () {
      const file = dialog.showOpenDialogSync(options)
      if (!file) return
      
      this.content = fs.readFileSync(file[0]).toString()
      console.log(this.content)
    },
    write () {
      const file = dialog.showSaveDialogSync(options)
      if (!file) return
      console.log(this.content)
      fs.writeFileSync(file, this.content)
    }
  }
}
</script>
