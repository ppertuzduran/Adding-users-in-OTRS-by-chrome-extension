function calculateOutput() {
    var input = document.getElementById("inputBox").value; // Get the input value
    var lines = input.trim().split("\n"); // Split the input into lines
  
    var names_users = [];
    for (var line = 0; line < lines.length; line += 2) {
      var name = lines[line].trim();
      var user = lines[line + 1].trim().split(":")[1].trim();
      names_users.push([name, user]);
    }
  
    var output = ""; // Initialize the output
  
    for (var i = 0; i < names_users.length; i++) {
      var name = names_users[i][0];
      var user = names_users[i][1];
      var name_parts = name.split(" ");
      var first_name = name_parts[0];
      var last_name = name_parts[name_parts.length - 1];
  
      if (name_parts.length > 2 && name_parts.length < 4) {
        first_name = '"' + name_parts[0] + " " + name_parts[1] + '"';
      }

      if (name_parts.length == 4) {
        first_name = '"' + name_parts[0] + " " + name_parts[1] + '"';
        last_name = '"' + name_parts[2] + " " + name_parts[3] + '"';
      }

      if (name_parts.length == 5) {
        first_name = '"' + name_parts[0] + " " + name_parts[1] + " " + name_parts[2] + '"';
        last_name = '"' + name_parts[3] + " " + name_parts[4] + '"';
      }

      var command =
        "/opt/otrs/bin/otrs.Console.pl Admin::CustomerUser::Add" +
        " --user-name " +
        decodeURIComponent(user) +
        " --first-name " +
        decodeURIComponent(first_name) +
        " --last-name " +
        decodeURIComponent(last_name) +
        " --email-address " +
        decodeURIComponent(user) +
        decodeURIComponent(' --customer-id "KONECTA ESPAÑA"') +
        decodeURIComponent(' --password "Konectaespaña2023"');
  
      output += command + "\n";
    }
  
    document.getElementById("outputBox").value = output; // Update the output value
  }
  
  function copyOutput() {
    var outputBox = document.getElementById("outputBox");
    outputBox.select();
    document.execCommand("copy");
  }
  
  document
    .getElementById("calculateButton")
    .addEventListener("click", calculateOutput);
  
  document
    .getElementById("copyButton")
    .addEventListener("click", copyOutput);
  
  
  
  
  