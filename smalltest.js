var fso = new ActiveXObject("Scripting.FileSystemObject");
var fh  = fso.CreateTextFile("D:\_Repo\smalltest.txt", 8, true);
fh.WriteLine("this is only a smalltest\n");
fh.Close();
