import IndexField from './components/IndexField'
import DetailField from './components/DetailField'
import FormField from './components/FormField'

Nova.booting((app, store) => {
  app.component('index-youtube-field', IndexField)
  app.component('detail-youtube-field', DetailField)
  app.component('form-youtube-field', FormField)
})
