const fs = require("fs");
const CS = fs.createWriteStream("write_stream_output.txt");

var output_data =
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. ";

CS.write(output_data, () =>
  console.log(
    'writing is performed\nplease open "write_stream_output.txt" file\n'
  )
);

CS.end(() => console.log("file operation eneded sucessfully!\n"));

//different streams for testing
CS.on("end", () => console.log("from end stream"));
CS.on("finish", () => console.log("from finish stream"));
CS.on("error", (err) => console.log("error accured :" + err));
