<template>
  <div class="container">
    <div class="form-group">
      <input
        type="text"
        class="form-control"
        v-model="bookName"
        placeholder="Kitap adını giriniz..."
      />

      <input
        type="text"
        class="form-control"
        v-model="bookAuthor"
        placeholder="Yazar adını giriniz..."
      />
      <input
        type="number"
        class="form-control"
        v-model="pageNumber"
        placeholder="Sayfa adedini giriniz..."
      />
      <select
        class="form-control"
        v-model="bookCategory"
        placeholder="Kategori"
      >
        <option v-for="m in menuTypes" v-bind:value="m.name" :key="m">
          {{ m.name }}
        </option>
      </select>
    </div>
    <button class="btn btn-primary" @click="saveBook">Kitap Ekle</button>
    <button class="btn btn-primary" @click="updateBook">Güncelle</button>
    <ul>
      <li v-for="book in books" :key="book.id">
        {{book.id}},{{ book.name }},{{ book.author }},{{ book.category }},
        {{ book.pagenumber
        }}<button class="btn btn-primary" @click="deleteBook(book.id)">
          Kitabı Sil
        </button>
        <button class="btn btn-primary" @click="editBook(book)">Düzenle</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuTypes: [
        { id: null, name: 'Kategori' },
        { id: 1, name: 'Polisiye' },
        { id: 2, name: 'Felsefe' },
        { id: 3, name: 'Kişisel Gelişim' },
        { id: 4, name: 'Tarih' },
        { id: 5, name: 'Dünya Klasikleri' },
      ],
      books: null,
      bookName: null,
      bookAuthor: null,
      bookCategory: 'Kategori',
      pageNumber: null,
      bookId: null
    }
  },
  mounted() {
    this.getBooks()
  },
  methods: {
    saveBook() {
      this.$axios
        .post('https://61ababeb264ec200176d42c8.mockapi.io/kitaplar/', {
          name: this.bookName,
          author: this.bookAuthor,
          category: this.bookCategory,
          pagenumber: this.pageNumber,
        })
        .then(() => {
          this.getBooks()
          this.bookAuthor = null
          this.bookName = null
          this.bookCategory = null
          this.pageNumber = null
        })
    },
    deleteBook(id) {
      this.$axios.delete('https://61ababeb264ec200176d42c8.mockapi.io/kitaplar/' + id).then(() => {
        this.getBooks()
      })
    },

    getBooks() {
      this.$axios
        .get('https://61ababeb264ec200176d42c8.mockapi.io/kitaplar/')
        .then((response) => (this.books = response.data))
    },
    updateBook() {
      this.$axios
        .put('https://61ababeb264ec200176d42c8.mockapi.io/kitaplar/'+this.bookId, {
          name : this.bookName,
          category : this.bookCategory,
          author: this.bookAuthor,
          pagenumber: this.pageNumber
        })
        .then((resp) => {
          this.getBooks()
          this.bookAuthor = null
          this.bookName = null
          this.bookCategory = null
          this.pageNumber = null
          this.bookId= null
        })
        .catch((error) => {
          console.log(error)
        })
    },
    editBook(data){
      this.bookName=data.name
      this.bookAuthor=data.author
      this.bookCategory=data.category
      this.pageNumber=data.pagenumber
      this.bookId=data.id

    },
    cartTotalAmount() {
      let total = 0;
      for (let item in this.cart) {
        total = total + (this.cart[item].quantity * this.cart[item].price)
      }
      return total;
    },
  },
  beforeMount() {
    this.books
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>