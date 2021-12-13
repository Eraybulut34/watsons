<template>
  <div class="animated fadeIn">
      <b-container>
    <b-row>
        <b-col md="4" v-for="book in books"
        :key="book.id">
      <b-card
        img-src="https://superbilgiler.com/wp-content/uploads/2018/11/656.jpg"
        img-alt="Img"
        img-top
      >
        <h4 class="card-title">
       {{ book.name }}
        </h4>
        <p class="card-text">
         
          {{ book.author }}
        </p>
        <p class="card-text">
          {{ book.category }}
        </p>
        <p class="card-text">
          {{ book.pagenumber }} Sayfa
        </p>
        <div slot="footer">
          <b-btn variant="primary" block>Add</b-btn>
        </div>
      </b-card>
      </b-col>
    </b-row>
    </b-container>

    <div class="card-pagination">
      <div
        class="page-index"
        v-for="i in nbPages"
        :key="i"
        @click="goto(i)"
        :class="{ active: currentPage(i) }"
      ></div>
    </div>
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
      ],
      books: null,
      bookName: null,
      bookAuthor: null,
      bookCategory: 'Kategori',
      pageNumber: null,
      bookId: null,
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
        .put('https://61ababeb264ec200176d42c8.mockapi.io/kitaplar/' + this.bookId, {
          name: this.bookName,
          category: this.bookCategory,
          author: this.bookAuthor,
          pagenumber: this.pageNumber,
        })
        .then((resp) => {
          this.getBooks()
          this.bookAuthor = null
          this.bookName = null
          this.bookCategory = null
          this.pageNumber = null
          this.bookId = null
        })
        .catch((error) => {
          console.log(error)
        })
    },
    editBook(data) {
      this.bookName = data.name
      this.bookAuthor = data.author
      this.bookCategory = data.category
      this.pageNumber = data.pagenumber
      this.bookId = data.id
    },
  },
  beforeMount() {
    this.books
  },
}
</script>

<style>
.card-pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.3rem;
}
.page-index {
  margin-left: 0.66rem;
  width: 1rem;
  height: 1rem;
  border-radius: 1rem;
  background: #007bff;
}
.active {
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 1.3rem;
}
</style>
