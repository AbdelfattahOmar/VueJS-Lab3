<template>
  <div class="container mt-5" id="app">
    <div
      class="d-flex justify-content-between align-items-baseline bg-dark text-light mt-2px-2"
    >
      <button class="text-warning btn" @click="isvisible = false">Books</button>
      <div class="d-flex align-items-baseline">
        <p class="mx-2">
          You have added <span>{{ wishlist.length }}</span> books
        </p>
        <button class="btn btn-primary" @click="isvisible = true">
          Wishlist
        </button>
      </div>
    </div>
    <!-- end of navbar -->
    <!-- books -->
    <div class="row" v-if="isvisible == false">
      <div
        v-for="book in books"
        :key="book.ISBN"
        class="card"
        :class="[book.pages >= 50 ? 'more' : 'less']"
        style="width: 18rem; margin: 2rem"
      >
        <img :src="book.image" class="card-img-top" :title="book.name" />
        <div class="card-body">
          <h5 class="card-title">{{ book.name }}</h5>
          <p class="card-text">
            <span class="h5">Author:</span>{{ book.author }}
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <span class="h5">Category:</span> {{ book.category }}
          </li>
          <li class="list-group-item">
            <span class="h5">Pages:</span> {{ book.pages }}
          </li>
          <li class="list-group-item">
            <span class="h5">Price:</span>{{ book.price }}
          </li>
        </ul>
        <div class="card-body">
          <button
            class="col-12 btn btn-primary"
            @click="addToWishList(book)"
            :disabled="isWished(book)"
          >
            Add To Wishlist
          </button>
        </div>
      </div>
    </div>

    <div class="row" v-if="isvisible == true && wishlist.length == 0">
      <h4 class="text-center text-danger">
        Sorry,Your Wishlist is Empty Please Add books
      </h4>
    </div>
    <div class="row" v-if="isvisible == true && wishlist.length != 0">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ISBN</th>
            <th scope="col">Title</th>
            <th scope="col">Category</th>
            <th scope="col">Author</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="book in wishlist" :key="book.ISBN">
            <td scope="col">{{ book.ISBN }}</td>
            <td scope="col">{{ book.name }}</td>
            <td scope="col">{{ book.category }}</td>
            <td scope="col">{{ book.author }}</td>
            <td scope="col">{{ formatCurrency(book.price) }}</td>
            <td>
              <div class="btn btn-danger" @click="removeBook(book)">Remove</div>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="4">Total Price</td>
            <td colspan="2">{{ formatCurrency(getTotalPrice()) }}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
  <!-- end of container -->
</template>

<style>
.more {
  background-color: green;
}
.less {
  background-color: red;
}
button:disabled {
  background-color: #ccc !important;
  color: white !important;
}
</style>
<script>
import books from '../books'
export default {
  data() {
    return {
      books: books,
      isvisible: false,
      wishlist: [],
    }
  },
  methods: {
    addToWishList(book) {
      this.wishlist.push(book)
    },
    isWished(book) {
      return this.wishlist.some((wbook) => wbook.ISBN == book.ISBN)
    },
    removeBook(book) {
      this.wishlist.splice(
        this.wishlist.findIndex((wbook) => wbook.ISBN == book.ISBN),
        1
      )
    },
    formatCurrency(value) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(value)
    },
    getTotalPrice() {
      let totalPrice = 0
      this.wishlist.forEach((book) => (totalPrice += book.price))
      return totalPrice
    },
  },
}
</script>
