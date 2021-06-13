const JAVA_KEY = "62";
const CPP_KEY = "53";
const PYTHON_KEY = "70";
const V_KEY = "84";
const RUBY_KEY = "72";
const R_KEY = "80";

const BASE_URL = "http://172.18.48.76:8081/submissions";
//const API_URL = window.location.origin + '/' + window.location.pathname + 'api' + '/';
const API_URL = "172.27.37.93:8080/";

function getExtention(key) {
    switch (key) {
        case "62":
            return "java"
            break;
        case "53":
            return "c"
            break;
        case "80":
            return "r"
            break;
        case "70":
            return "py"
            break;
        case "84":
            return "vb"
            break;
        case "72":
            return "rb"
            break;
        case "63":
            return "js"
            break;
        default:
            return "js"
            break;
    }
}


function getKey(extention) {
    switch (extention) {
        case "java":
            return "62"
            break;
        case "c":
            return "53"
            break;
        case "r":
            return "80"
            break;
        case "py":
            return "70"
            break;
        case "vb":
            return "84"
            break;
        case "rb":
            return "72"
            break;
        case "js":
            return "63"
            break;
        default:
            return "c"
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
    console.log("trying to get all file, url: ")
    $(document).ready(function () {
        let allFileElement = document.getElementById("allFile");
        //$("#ans").html("Loading...");
        $.ajax({
            url: "api/get_file.php",
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
         
          <div class="mx-auto  w-full mt-2 mb-2" @click='var editor = ace.edit("editor"); editor.setValue(` + `\`${sourceCode}\`` + `); document.getElementById("fileOpenExtention").innerHTML = ".` + file.extention + `"; document.getElementById("fileOpenName").innerHTML = "` + file.name + `"; document.getElementById("languageSelect").value  = "` + file.language_code + `"; document.getElementById("idOpenFile").innerHTML = "` + file.id + `";' x-data="{ open: false, color: false }"
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
                  <h4 class="font-bold">` + fileName + `</h4>
                  <small class="text-xs"> ` + file.created_at + `</small>
              </div>
              <div id="idFile" class="hidden">` + file.id + `</div>
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


function searchFile() {
    $(document).ready(function () {
        $("#searchButton").click(function () {
            let allFileElement = document.getElementById("allFile");
            let searchInput = document.getElementById("searchFile");
            //$("#ans").html("Loading...");
            console.log("url : "+ "api/get_file.php?search=" + searchInput.value)
            $.ajax({
                url: "api/get_file.php?search=" + searchInput.value,
                type: "get",
                dataType: 'json',
                success: function (response) {
                    console.log("search file : " + response);
                    allFileElement.innerHTML = '';
                    for (const file of response) {
                        console.log(file);
                        let sourceCode = `${file.source_code}`;
                        let fileName = file.name + `.` + file.extention;
                        allFileElement.innerHTML += `
         
          <div class="mx-auto  w-full mt-2 mb-2" @click='var editor = ace.edit("editor"); editor.setValue(` + `\`${sourceCode}\`` + `); document.getElementById("fileOpenExtention").innerHTML = ".` + file.extention + `"; document.getElementById("fileOpenName").innerHTML = "` + file.name + `"; document.getElementById("languageSelect").value  = "` + file.language_code + `"; document.getElementById("idOpenFile").innerHTML = "` + file.id + `";' x-data="{ open: false, color: false }"
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
                  <h4 class="font-bold">` + fileName + `</h4>
                  <small class="text-xs"> ` + file.created_at + `</small>
              </div>
              <div id="idFile" class="hidden">` + file.id + `</div>
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
    });

}

function loading() {
    document.getElementById("alert").innerHTML = '';
    document.getElementById("loading").innerHTML = '';
    document.getElementById("loading").innerHTML = `
    <div class="alert flex flex-row items-center bg-red-200 p-5 rounded border-b-2 border-red-300">
  <div class="alert-icon flex items-center justify-center h-10 w-10 flex-shrink-0 rounded-full">
    <svg class="animate-spin h-8 w-8 rounded-full bg-transparent border-2 border-transparent border-opacity-50" style="border-right-color: white; border-top-color: white;" viewBox="0 0 24 24"></svg>
  </div>
  <div class="alert-content ml-4">
    <div class="alert-title font-semibold text-lg text-red-800">Processing</div>
    <div class="alert-description text-sm text-red-600">Tunggu..</div>
  </div>
</div>
`;
}

function errorAlert(message) {
    document.getElementById("alert").innerHTML += `
        <div x-data="{ show: true }" x-show="show" class="alert mb-5 flex flex-row items-center bg-red-200 p-5 rounded border-b-2 border-red-300" >
    <div class="alert-icon flex items-center bg-red-100 border-2 border-red-500 justify-center h-10 w-10 flex-shrink-0 rounded-full">
				<span class="text-red-500">
					<svg fill="currentColor"
						 viewBox="0 0 20 20"
						 class="h-6 w-6">
						<path fill-rule="evenodd"
							  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
							  clip-rule="evenodd"></path>
					</svg>
				</span>
			</div>
			<div class="alert-content ml-4">
				<div class="alert-title font-semibold text-lg text-red-800">
                    Error
				</div>
				<div class="alert-description text-sm text-red-600">
                    `+ message + `
				</div>
			</div>
<button type="button" @click="show = false" class=" text-yellow-700 ml-10" >
        <span class="text-2xl">&times;</span>
</button >
</div >
        `;
    document.getElementById("loading").innerHTML = '';
}

function successAlert(message) {
    document.getElementById("alert").innerHTML += `
        <div x-data="{ show: true }" x-show="show" class="alert mb-5 flex flex-row items-center bg-red-200 p-5 rounded border-b-2 border-red-300" >
    <div class="alert-icon flex items-center bg-green-100 border-2 border-green-500 justify-center h-10 w-10 flex-shrink-0 rounded-full">
				<span class="text-green-500">
					<svg fill="currentColor"
						 viewBox="0 0 20 20"
						 class="h-6 w-6">
						<path fill-rule="evenodd"
							  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
							  clip-rule="evenodd"></path>
					</svg>
				</span>
			</div>
			<div class="alert-content ml-4">
				<div class="alert-title font-semibold text-lg text-green-800">
                    Success
				</div>
				<div class="alert-description text-sm text-green-600">
                    `+ message + `
				</div>
			</div>
<button type="button" @click="show = false" class=" text-yellow-700 ml-10" >
        <span class="text-2xl">&times;</span>
</button >
</div >
        `;
    document.getElementById("loading").innerHTML = '';
}

function createNewFile() {
    $(document).ready(function () {
        $("#createNewFileButton").click(function () {
            loading()
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
                url: "api/add_file.php",
                type: "post",
                dataType: 'json',
                data: data,
                success: function (response) {
                    if (response.status == true) {
                        getAllFile()
                        successAlert("Berhasil menambahkan file baru")
                    }
                },
                error: function (errormessage) {
                    console.log(errormessage.responseJSON);
                    errorAlert(errormessage.responseText);
                }
            });
        });
    });

}


function getHistoryFile() {
    console.log("trying to get all history file, url: ")
    $(document).ready(function () {
        let allFileElement = document.getElementById("historyFile");
        //$("#ans").html("Loading...");
        $.ajax({
            url: "api/get_file.php?history=true",
            type: "get",
            dataType: 'json',
            success: function (response) {
                console.log("all history file : " + response);
                allFileElement.innerHTML = '';
                for (const file of response) {
                    console.log(file);
                    let sourceCode = `${file.source_code} `;
                    let fileName = file.name + `.` + file.extention;
                    allFileElement.innerHTML += `
                                    <div class="mx-auto  w-full mt-2 mb-2" @click='var editor = ace.edit("editor"); editor.setValue(` + `\`${sourceCode}\`` + `); document.getElementById("fileOpenExtention").innerHTML = ".` + file.extention + `"; document.getElementById("fileOpenName").innerHTML = "` + file.name + `"; document.getElementById("languageSelect").value  = "` + file.language_code + `"; document.getElementById("idOpenFile").innerHTML = "` + file.id + `";' x-data="{ open: false, color: false }"
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
                                            <h4 class="font-bold">` + fileName + `</h4>
                                            <small class="text-xs"> ` + file.created_at + `</small>
                                        </div>
                                        <div id="idFile" class="hidden">` + file.id + `</div>
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


function codeEditor(lang_id) {
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/dracula");
    $(document).ready(function () {
        $("#runButton").click(function () {
            let code = editor.getValue();
            $("#ans").html("Loading...");
            loading();
            console.log(code);
            let data = {
                stdin: document.getElementById("inputCode").value,
                source_code: code,
                language_id: document.getElementById("languageSelect").value,
                number_of_runs: "1",
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
                error: function (errormessage) {
                    console.log(errormessage);
                    errorAlert(errormessage.responseText);
                }
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
                        console.log(response);
                        $("#ans").html(response.stdout);
                        if (response.stdout) {
                            successAlert("Program berhasil dijalankan");
                        } else {
                            errorAlert(response.stderr);
                        }

                        let dataSave = {
                            "name": document.getElementById("fileOpenName").innerHTML,
                            "source_code": code,
                            "language_code": document.getElementById("languageSelect").value,
                            "extention": getExtention(document.getElementById("languageSelect").value),
                            "id": document.getElementById("idOpenFile").innerHTML,
                        };
                        console.log(dataSave);
                        $.ajax({
                            url: "api/save_file.php",
                            type: "post",
                            dataType: 'json',
                            data: dataSave,
                            success: function (response) {
                                console.log(response)
                                if (response.status == true) {
                                    getAllFile()
                                    getHistoryFile()
                                    successAlert("Berhasil menyimpan file")
                                } else {
                                    errorAlert(response.pesan)
                                }

                            },
                            error: function (errormessage) {
                                console.log(errormessage);
                                errorAlert(errormessage.responseText)
                            }
                        });
                    },
                    error: function (errormessage) {
                        console.log(errormessage.responseJSON);
                        errorAlert(errormessage.responseJSON);
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

        let javacode = `public class Main {
        public static void main(String args[]) {
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
        cout << "Hello World"; \n
    } `
        editor.setValue(cppcode)
    }

    if (lang_id == RUBY_KEY) {
        let rubycode = `puts "Hello World"`

        editor.setValue(rubycode)
    }

    if (lang_id == R_KEY) {
        let rcode = `print("Hello World")`

        editor.setValue(rcode)
    }

    if (lang_id == V_KEY) {
        let visualcode = `Module VBModule
        Sub Main()
            Console.WriteLine("Hello World")
        End Sub
    End Module
    `

        editor.setValue(visualcode)
    }

}

function deleteFile() {
    $(document).ready(function () {
        $("#deleteButton").click(function () {
            let data = { 'id': document.getElementById("idOpenFile").innerHTML };
            console.log("delete file " + data)
            loading()
            $.ajax({
                url: "api/delete_file.php",
                type: "post",
                dataType: 'json',
                data: data,
                success: function (response) {
                    if (response.status == true) {
                        getAllFile()
                        successAlert("Berhasil menghapus file")
                    }
                },
                error: function (errormessage) {
                    console.log(errormessage.responseJSON);
                    errorAlert(errormessage.responseText);

                }
            });
        });
    });
}


function printFile() {
    $(document).ready(function () {
        $("#printButton").click(function () {
            let fileName = document.getElementById("fileOpenName").innerHTML + document.getElementById("fileOpenExtention").innerHTML;
            let editor = ace.edit("editor");
            let code = editor.getValue();

            console.log("print file" + fileName);

            var printWindow = window.open('', '', '');
            printWindow.document.write('<html><head><title>' + fileName + '</title>');
            printWindow.document.write('</head><body>');
            printWindow.document.write('<pre>' + code + '</pre>');
            printWindow.document.write('</body></html>');
            printWindow.document.close();
            printWindow.print();

        });
    });
}

function uploadFile() {
    $(document).ready(function () {
        $("#uploadFileButton").click(function () {
            let fileName = document.getElementById("fileOpenName").innerHTML + document.getElementById("fileOpenExtention").innerHTML;
            let editor = ace.edit("editor");
            let code = editor.getValue();
            console.log("upload file" + fileName)

            var fileInput = window._protected_reference = document.createElement("INPUT");
            fileInput.type = "file";
            fileInput.accept = ".java,.c,.py";

            // (cancel will not trigger 'change')
            fileInput.addEventListener('change', function (ev2) {
                var file = fileInput.files[0];
                var textType = /text.*/;

                if (file.type.match(textType)) {
                    var reader = new FileReader();

                    reader.onload = function (e) {
                        var content = reader.result;
                        //Here the content has been read successfuly
                        console.log("UPLOAD FILE")
                        console.log(file);
                        console.log(content);
                        let data = {
                            "name": file.name.split(".")[0],
                            "source_code": content,
                            "language_code": getKey(file.name.split(".")[1]),
                            "extention": file.name.split(".")[1],
                            'user_id': localStorage.getItem("id"),
                        }
                        console.log(data)
                        $.ajax({
                            url: "api/add_file.php",
                            type: "post",
                            dataType: 'json',
                            data: data,
                            success: function (response) {
                                console.log(response);
                                if (response.status == true) {
                                    console.log("sukses");
                                    getAllFile();
                                    successAlert("Berhasil mengupload file baru");
                                }
                            },
                            error: function (errormessage) {
                                console.log(errormessage);
                                errorAlert(errormessage.responseText)
                            }
                        });
                    }

                    reader.readAsText(file);
                } else {
                    fileDisplayArea.innerText = "File not supported!"
                }
            });
            fileInput.click();


        });
    });
}


function downloadFile() {
    $(document).ready(function () {
        $("#downloadButton").click(function () {
            loading()
            let fileName = document.getElementById("fileOpenName").innerHTML + document.getElementById("fileOpenExtention").innerHTML;
            let editor = ace.edit("editor");
            let code = editor.getValue();
            console.log("download file" + fileName)

            download(fileName, code);
            successAlert("Berhasil mendownload file");
        });
    });
}

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}