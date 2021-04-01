const JAVA_KEY = "62";
const CPP_KEY = "53";
const PYTHON_KEY = "70";
const SQL_KEY = "82";
const NODEJS_KEY = "63";

const BASE_URL = "http://172.25.108.131:8081/submissions";
//const API_URL = window.location.origin + '/' + window.location.pathname + 'api' + '/';
const API_URL = "http://localhost/galaxy/html/api/";

function getExtention(key) {
  switch (key) {
    case 62:
      return ".java"
      break;
    case 53:
      return ".c"
      break;
    case 70:
      return ".py"
      break;
    case 82:
      return ".sql"
      break;
    case 63:
      return ".js"
      break;
    default:
      return ".js"
      break;
  }
}

function getMainData() {
  $(document).ready(function () {
    let id = localStorage.getItem("id");
    let first_name = localStorage.getItem("first_name");
    let photo = localStorage.getItem("photo");
    console.log("first_name " + first_name);
    if (id == null) {
      setTimeout("location.href = 'signin.html';", 0);
    } else {
      document.getElementById("nameAccount").innerHTML = first_name
      document.getElementById("imageAccount").src = photo
    }
  });
}

function getAllFile() {
  console.log("trying to get all file, url: " + API_URL)
  $(document).ready(function () {
    let allFileElement = document.getElementById("allFile");
    //$("#ans").html("Loading...");
    $.ajax({
      url: API_URL + "get_file.php",
      type: "get",
      dataType: 'json',
      success: function (response) {
        console.log("all file : " + response);
        allFileElement.innerHTML = '';
        for (const file of response) {
          console.log(file);
          let sourceCode = `${file.source_code}`;
          let fileName = file.name + `.` + file.extention;
          allFileElement.innerHTML += `
         
          <div class="mx-auto  w-full mt-2 mb-2" @click='var editor = ace.edit("editor"); editor.setValue(` + `\`${sourceCode}\`` + `); document.getElementById("fileOpenName").innerHTML = "` + fileName + `"; document.getElementById("languageSelect").value  = "` + file.language_code + `";' x-data="{ open: false, color: false }"
          @keydown.escape="open = false" @click.away="open = false">
          <div
              class="flex items-center bg-gray-800 hover:bg-blue-700 rounded-md p-3 text-white cursor-pointer transition duration-500 ease-in-out hover:shadow hover:bg-indigo-600">
              <div>
                  <svg fill="currentColor" class="w-10 h-10" style=""
                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path
                          d="M0 4c0-1.1.9-2 2-2h7l2 2h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z">
                      </path>
                  </svg>

              </div>
              <div class="px-3 mr-auto">
                  <h4 class="font-bold">`+ fileName + `</h4>
                  <small class="text-xs"> `+ file.created_at + `</small>
              </div>
              <div id="idFile" class="hidden">`+ file.id +`</div>
              <div class="relative">
                  <a href="javascript:;" @click="open = !open">
                      <svg fill="currentColor" class="w-5 h-5" style=""
                          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path
                              d="M10 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4z">
                          </path>
                      </svg>

                  </a>

                  <div x-show="open" x-transition:enter="transition ease-out duration-100"
                      x-transition:enter-start="transform opacity-0 scale-95"
                      x-transition:enter-end="transform opacity-100 scale-100"
                      x-transition:leave="transition ease-in duration-75"
                      x-transition:leave-start="transform opacity-100 scale-100"
                      x-transition:leave-end="transform opacity-0 scale-95"
                      class="options absolute bg-white text-gray-600 origin-top-right right-0 mt-2 w-56 rounded-md shadow-lg overflow-hidden">
                      <a href="javascript:;"
                          class="flex py-3 px-2 text-sm font-bold hover:bg-gray-100 ">
                          <span class="mr-auto">Edit</span>
                          <svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5" style="">
                              <path
                                  d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z">
                              </path>
                          </svg>
                      </a>
                      <a href="javascript:;"
                          class="flex py-3 px-2 text-sm font-bold hover:bg-gray-100">
                          <span class="mr-auto">Download</span>
                          <svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5" style="">
                              <path fill-rule="evenodd"
                                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                  clip-rule="evenodd"></path>
                          </svg>
                      </a>
                      <a href="javascript:;"
                          class="flex py-3 px-2 text-sm font-bold bg-red-400 text-white">
                          <span class="mr-auto">Delete</span>
                          <svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5" style="">
                              <path fill-rule="evenodd"
                                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                  clip-rule="evenodd"></path>
                          </svg>

                      </a>
                  </div>
              </div>
          </div>
      </div>
         `;
        }
      },
      error: function (errormessage) {
        console.log(errormessage);
      }
    });
  });
}

function createNewFile() {
  $(document).ready(function () {
    $("#createNewFileButton").click(function () {
      let today = new Date();
      let currentDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
      let data = {
        "name": 'HelloWorld-' + currentDate,
        "source_code": '',
        "language_code": 53,
        "extention": 'c',
        'user_id': localStorage.getItem("id"),
      }
      console.log("start create new file, name:" + data.name)
      $.ajax({
        url: API_URL + "add_file.php",
        type: "post",
        dataType: 'json',
        data: data,
        success: function (response) {
          if (response.status == true) {
            getAllFile()
          }
        },
        error: function (errormessage) {
          console.log(errormessage.responseJSON);
        }
      });
    });
  });

}


function getHistoryFile() {
  console.log("trying to get all history file, url: " + API_URL)
  $(document).ready(function () {
    let allFileElement = document.getElementById("historyFile");
    //$("#ans").html("Loading...");
    $.ajax({
      url: API_URL + "get_file.php",
      type: "get",
      dataType: 'json',
      success: function (response) {
        console.log("all history file : " + response);
        allFileElement.innerHTML = '';
        for (const file of response) {
          console.log(file);
          let sourceCode = `${file.source_code}`;
          let fileName = file.name + `.` + file.extention;
          allFileElement.innerHTML += `
          <div class="mx-auto  w-full mt-2 mb-2" @click='var editor = ace.edit("editor"); editor.setValue(` + `\`${sourceCode}\`` + `); document.getElementById("fileOpenName").innerHTML = "` + fileName + `"; document.getElementById("languageSelect").value  = "` + file.language_code + `";' x-data="{ open: false, color: false }"
          @keydown.escape="open = false" @click.away="open = false">
          <div
              class="flex items-center bg-gray-800 hover:bg-blue-700 rounded-md p-3 text-white cursor-pointer transition duration-500 ease-in-out hover:shadow hover:bg-indigo-600">
              <div>
                  <svg fill="currentColor" class="w-10 h-10" style=""
                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path
                          d="M0 4c0-1.1.9-2 2-2h7l2 2h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z">
                      </path>
                  </svg>

              </div>
              <div class="px-3 mr-auto">
                  <h4 class="font-bold">`+ fileName + `</h4>
                  <small class="text-xs"> `+ file.created_at + `</small>
              </div>
              <div class="relative">
                  <a href="javascript:;" @click="open = !open">
                      <svg fill="currentColor" class="w-5 h-5" style=""
                          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path
                              d="M10 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4z">
                          </path>
                      </svg>

                  </a>

                  <div x-show="open" x-transition:enter="transition ease-out duration-100"
                      x-transition:enter-start="transform opacity-0 scale-95"
                      x-transition:enter-end="transform opacity-100 scale-100"
                      x-transition:leave="transition ease-in duration-75"
                      x-transition:leave-start="transform opacity-100 scale-100"
                      x-transition:leave-end="transform opacity-0 scale-95"
                      class="options absolute bg-white text-gray-600 origin-top-right right-0 mt-2 w-56 rounded-md shadow-lg overflow-hidden">
                      <a href="javascript:;"
                          class="flex py-3 px-2 text-sm font-bold hover:bg-gray-100 ">
                          <span class="mr-auto">Edit</span>
                          <svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5" style="">
                              <path
                                  d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z">
                              </path>
                          </svg>
                      </a>
                      <a href="javascript:;"
                          class="flex py-3 px-2 text-sm font-bold hover:bg-gray-100">
                          <span class="mr-auto">Download</span>
                          <svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5" style="">
                              <path fill-rule="evenodd"
                                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                  clip-rule="evenodd"></path>
                          </svg>
                      </a>
                      <a href="javascript:;"
                          class="flex py-3 px-2 text-sm font-bold bg-red-400 text-white">
                          <span class="mr-auto">Delete</span>
                          <svg viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5" style="">
                              <path fill-rule="evenodd"
                                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                  clip-rule="evenodd"></path>
                          </svg>

                      </a>
                  </div>
              </div>
          </div>
      </div>
         `;
        }
      },
      error: function (errormessage) {
        console.log(errormessage);
      }
    });
  });
}


function codeEditor(lang_id, datainput) {
  var editor = ace.edit("editor");
  editor.setTheme("ace/theme/dracula");
  console.log("id" + lang_id)
  $(document).ready(function () {
    $("#runButton").click(function () {
      let code = editor.getValue();
      $("#ans").html("Loading...");
     
      console.log(code);
      let data = {
        source_code: code,
        language_id: lang_id,
        number_of_runs: "1",
        stdin: datainput,
        expected_output: null,
        cpu_time_limit: "2",
        cpu_extra_time: "0.5",
        wall_time_limit: "5",
        memory_limit: "128000",
        stack_limit: "64000",
        max_processes_and_or_threads: "60",
        enable_per_process_and_thread_time_limit: false,
        enable_per_process_and_thread_memory_limit: false,
        max_file_size: "1024",
      };
      console.log(data)
      let request = $.ajax({
        url: BASE_URL,
        type: "post",
        data: data,
      });

      const delay = (ms) => new Promise((res) => setTimeout(res, ms));
      // Callback handler that will be called on success
      request.done(async function (response, textStatus, jqXHR) {
        // Log a message to the console
        console.log("Hooray, it worked!");
        let token = response.token;
        await new Promise((resolve) => setTimeout(resolve, 3000)); // 3 sec
        console.log(3, "after 3 seconds");
        let second_request = $.ajax({
          url: BASE_URL + "/" + token,
          type: "get",
          success: function (response) {

            console.log("datainput : " + datainput);
            console.log(response.stdout);
            $("#ans").html(response.stdout);
            let dataSave = {
              "name": document.getElementById("fileOpenName").innerHTML,
              "source_code": code,
              "language_code": lang_id,
              "extention": getExtention(lang_id),
              "id": document.getElementById("idFile").innerHTML,
            };
            console.log(dataSave);
            $.ajax({
              url: API_URL + "save_file.php",
              type: "post",
              dataType: 'json',
              data: dataSave,
              success: function (response) {
                console.log(response)
                if (response.status == true) {
                  getAllFile()
                }
              },
              error: function (errormessage) {
                console.log(errormessage);
              }
            });
          },
          error: function (errormessage) {
            console.log(errormessage.responseJSON);
            $("#ans").html(errormessage.responseJSON.error);
          }
        });
        // second_request.done(function (response) {
        //   console.log(response.stdout);
        //   $("#ans").html(response.stdout);
        // });

        // second_request.error(function (response) {
        //   console.log(response.stdout);
        //   $("#ans").html(response.responseText);
        // });

      });
    });
  });
  if (lang_id == PYTHON_KEY)
    editor.setValue("def execute(): \n\t for i in range(10):\n\t\t print i \nexecute()")
  //java

  if (lang_id == JAVA_KEY) {

    let javacode = `public class Main{
  public static void main(String args[]){
    System.out.println("hello");
  }
}
`;

    editor.setValue(javacode)
  }

  if (lang_id == CPP_KEY) {
    let cppcode = `#include <iostream>
using namespace std;
  int main() {
      cout<<"Hello World"; \n
}`
    editor.setValue(cppcode)
  }

  if (lang_id == SQL_KEY) {
    let sqlcode = `BEGIN TRANSACTION;

    /* Create a table called NAMES */
    CREATE TABLE NAMES(Id integer PRIMARY KEY, Name text);
    
    /* Create few records in this table */
    INSERT INTO NAMES VALUES(1,'Tom');
    INSERT INTO NAMES VALUES(2,'Lucy');
    INSERT INTO NAMES VALUES(3,'Frank');
    INSERT INTO NAMES VALUES(4,'Jane');
    INSERT INTO NAMES VALUES(5,'Robert');
    COMMIT;
    
    /* Display all the records from the table */
    SELECT * FROM NAMES;`

    editor.setValue(sqlcode)
  }

  if (lang_id == NODEJS_KEY) {
    let javascriptcode = `console.log('Hello, world!')`

    editor.setValue(javascriptcode)
  }

} 
