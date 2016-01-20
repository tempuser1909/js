console.log('writing something...');
var fso = new ActiveXObject("Scripting.FileSystemObject");
console.log('created activexobj');
var fh  = fso.CreateTextFile("D:\_Repo\smalltest.txt", 8, true);
console.log('created text file.');
fh.WriteLine("this is only a smalltest\n");
console.log('wrote a line');
fh.Close();
