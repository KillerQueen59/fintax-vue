<template>
  <div class="container mx-auto">
    <div
      class="animate-bounce my-10 text-center text-4xl font-bold text-coco-100"
    >
      Count On Me!
    </div>
    <div class="flex flex-wrap">
      <div class="w-96 grid grid-cols-4 mx-auto xl:mx-0 lg:mx-0">
        <div class="col-span-4 border-2 border-black bg-green-200">
          <div class="my-10 text-center text-2xl text-white">
            {{ number || "0" }}
          </div>
        </div>
        <div
          class="col-span-2 border-2 border-green-200 bg-green-0 cursor-pointer hover:bg-green-100"
        >
          <div @click="clear" class="my-4 text-center ">Clear</div>
        </div>
        <div
          class="col-span-2 border-2 border-green-200 bg-green-0 cursor-pointer hover:bg-green-100"
        >
          <div @click="remove" class="my-4 text-center ">Delete</div>
        </div>
        <div
          class="border-2 border-green-200 bg-green-0 cursor-pointer hover:bg-green-100"
        >
          <div @click="append(1)" class="my-4 text-center">1</div>
        </div>
        <div
          class="border-2 border-green-200 bg-green-0 cursor-pointer hover:bg-green-100"
        >
          <div @click="append(2)" class="my-4 text-center">2</div>
        </div>
        <div
          class="border-2 border-green-200 bg-green-0 cursor-pointer hover:bg-green-100"
        >
          <div @click="append(3)" class="my-4 text-center">3</div>
        </div>
        <div
          class="border-2 border-green-200 bg-coco-200 cursor-pointer hover:bg-coco-100"
        >
          <div @click="add()" class="my-4 text-center">+</div>
        </div>
        <div
          class="border-2 border-green-200 bg-green-0 cursor-pointer hover:bg-green-100"
        >
          <div @click="append(4)" class="my-4 text-center">4</div>
        </div>
        <div
          class="border-2 border-green-200 bg-green-0 cursor-pointer hover:bg-green-100"
        >
          <div @click="append(5)" class="my-4 text-center">5</div>
        </div>
        <div
          class="border-2 border-green-200 bg-green-0 cursor-pointer hover:bg-green-100"
        >
          <div @click="append(6)" class="my-4 text-center">6</div>
        </div>
        <div
          class="border-2 border-green-200 bg-coco-200 cursor-pointer hover:bg-coco-100"
        >
          <div @click="minus()" class="my-4 text-center">-</div>
        </div>
        <div
          class="border-2 border-green-200 bg-green-0 cursor-pointer hover:bg-green-100"
        >
          <div @click="append(7)" class="my-4 text-center">7</div>
        </div>
        <div
          class="border-2 border-green-200 bg-green-0 cursor-pointer hover:bg-green-100"
        >
          <div @click="append(8)" class="my-4 text-center">8</div>
        </div>
        <div
          class="border-2 border-green-200 bg-green-0 cursor-pointer hover:bg-green-100"
        >
          <div @click="append(9)" class="my-4 text-center">9</div>
        </div>
        <div
          class="border-2 border-green-200 bg-coco-200 cursor-pointer hover:bg-coco-100"
        >
          <div @click="multiply()" class="my-4 text-center">X</div>
        </div>
        <div
          class="border-2 border-green-200 bg-coco-200 cursor-pointer hover:bg-coco-100"
        >
          <div @click="dot()" class="my-4 text-center">.</div>
        </div>
        <div
          class="border-2 border-green-200 bg-green-0 cursor-pointer hover:bg-green-100"
        >
          <div @click="append(0)" class="my-4 text-center">0</div>
        </div>
        <div
          class="border-2 border-green-200 bg-coco-200 cursor-pointer hover:bg-coco-100"
        >
          <div @click="divide()" class="my-4 text-center">/</div>
        </div>
        <div
          class="border-2 border-green-200 bg-coco-200 cursor-pointer hover:bg-coco-100"
        >
          <div @click="equal()" class="my-4 text-center">=</div>
        </div>
      </div>
      <div class="flex-grow xl:block lg:block hidden"></div>
      <div class="w-full xl:w-6/12 lg:w-6/12 mx-auto">
        <div class="flex">
          <h1 class="text-xl text-center my-4">Count History</h1>
          <div class="flex-grow"></div>
          <button
            class="bg-green-100 hover:bg-green-200 text-white py-2 px-4 rounded my-2"
            @click="clearHistory()"
          >
            Clear History
          </button>
        </div>
        <div class="grid grid-cols-4 bg-green-100  text-white text-center ">
          <div class="border-2 border-black p-4">First Number</div>
          <div class="border-2 border-black p-4">Second Number</div>
          <div class="border-2 border-black p-4">Operation</div>
          <div class="border-2 border-black p-4">Result</div>
        </div>
        <div v-for="save in savedNumber" :key="save.id">
          <CalculatorHistory :data="save" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { uuid } from "vue-uuid";
import CalculatorHistory from "../components/CalculatorHistory.vue";

export default {
  components: {
    CalculatorHistory,
  },
  data() {
    return {
      prevNumber: "",
      number: "",
      operator: null,
      operatorClicked: false,
      operatorSign: "",
      savedNumber: [],
      fields: ["first_number", "operator", "second_number", "result", "action"],
      currentPage: 1,
      perPage: 4,
    };
  },
  methods: {
    clearHistory(){
        this.savedNumber = []
    },
    clicked() {
      console.log("clicked");
    },
    clear() {
      this.number = "";
    },
    append(num) {
      if (this.operatorClicked) {
        this.number = "";
        this.operatorClicked = false;
      }
      this.number = `${this.number}${num}`;
    },
    remove() {
      this.number = this.number.slice(0, -1);
    },
    setPrevNumber() {
      this.prevNumber = this.number;
      this.operatorClicked = true;
    },
    add() {
      this.operator = (x, y) => x + y;
      this.operatorSign = "+";
      this.setPrevNumber();
    },
    minus() {
      this.operator = (x, y) => x - y;
      this.operatorSign = "-";
      this.setPrevNumber();
    },
    divide() {
      this.operator = (x, y) => x / y;
      this.operatorSign = "/";
      this.setPrevNumber();
    },
    multiply() {
      this.operatorSign = "x";
      this.operator = (x, y) => x * y;
      this.setPrevNumber();
    },
    equal() {
      const nextNumber = this.number;
      this.number = `${this.operator(
        parseFloat(this.prevNumber),
        parseFloat(this.number)
      )}`;
      this.savedNumber.push({
        id: uuid.v4(),
        first_number: this.prevNumber,
        operator: this.operatorSign,
        second_number: nextNumber,
        result: this.number,
      });
      this.saveToLocalStorage();
      this.prevNumber = "";
      console.log(this.number);
    },
    dot() {
      if (this.number.indexOf(".") === -1) {
        this.append(".");
      }
    },
    saveToLocalStorage() {
      const parsed = JSON.stringify(this.savedNumber);
      localStorage.setItem("numbers", parsed);
    },
    removeRow(id) {
      this.savedNumber = this.savedNumber.filter((item) => {
        return item.id != id;
      });
      this.saveToLocalStorage();
    },
  },
   mounted() {
    if (localStorage.getItem("numbers")) {
      try {
        this.savedNumber = JSON.parse(localStorage.getItem("numbers"));
      } catch (e) {
        // print(e);
      }
    }
  },
  computed: {
    rows() {
      return this.savedNumber.length;
    }
  }
};
</script>

<style></style>
