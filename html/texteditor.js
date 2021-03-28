const JAVA_KEY = "62";
const CPP_KEY = "53";
const PYTHON_KEY = "70";
const SQL_KEY = "82";
const NODEJS_KEY = "63";
const BASE_URL = "http://172.25.108.131:8081/submissions";


function codeEditor(lang_id,datainput) {
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

  if (lang_id == SQL_KEY){
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

  if (lang_id == NODEJS_KEY){
    let javascriptcode = `console.log('Hello, world!')`

      editor.setValue(javascriptcode)
  }

} 
