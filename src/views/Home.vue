<template>
  <div class="bg-tosca-0">
    <div class="container mx-auto">
      <div class="flex flex-wrap ">
        <div class="xl:w-5/12 lg:w-5/12 md:w-7/12 py-32 mx-auto">
          <h1 class="text-5xl text-dark">Fintax Internship Assignment</h1>
          <div class="my-8 rounded-md shadow max-w-md">
            <a
              href="#"
              class="w-full flex flex-wrap items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-coco-0 hover:bg-coco-100 "
            >
              <img src="../assets/github.png" class="w-10 mr-8 my-4" />
              <p>Check the Code!</p>
            </a>
          </div>
        </div>
        <div class="xl:w-7/12  px-32  pt-0 xl:pt-32 pb-20 max-w-3xl">
          <h1 class="font-bold text-2xl my-4 ">Requirements</h1>
          <Requirements title="Class and Style Bindings" />      
          <Requirements
            title="Do routing using path
           variable, query, and navigation guard"
          />
          <Requirements title="Create Nested Component" />
          <Requirements
            title=" Create Child and parent
            component communication"
          />
          <Requirements
            title=" Do Event Handling by create
            simple math calculator ( 2 inputs, 1 operational)"
          />
          <Requirements
            title=" Create Table with filter asc,
            desc, total record (3,5,10,all)"
          />

          <Requirements
            title=" Test API using
            https://reqres.in/ , http://dummy.restapiexample.com/"
          />
          <Requirements
            title="Use browser storage (cookie/
            local/ session)"
          />
          <Requirements
            title="using CSS framework such as
            Bootstrap is allowed, but will be great if we can also see how you
            apply styling on your app"
          />
          <Requirements
            title="send your work to
            hiring@fintax.id. you can send a .zip file or your GitHub link"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Requirements from "../components/Requirement.vue";

export default {
  components: {
    Requirements,
  },
};
</script>
