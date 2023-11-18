// script js

// Grabs the JSON object from the canvas

        function jsonGrabber(fileInput) {
            // Check if a file is selected
            if (fileInput.files.length > 0) {
                // Get the selected file
                var selectedFile = fileInput.files[0];

                // Create a FileReader to read the file
                var reader = new FileReader();

                // Set up the FileReader onload event
                reader.onload = function(event) {
                    // The content of the file is available in event.target.result
                    var fileContent = event.target.result;

                    // You can do something with the file content here
                    console.log('File content:', fileContent);
                };

                // Read the file as text
                reader.readAsText(selectedFile);
            } else {
                console.log('No file selected.');
            }
			
        }