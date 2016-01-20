/*
This is a comment space.
========================



This script is aimed to test writing data to text file from browser to local computer.



*/
var fso = new ActiveXObject("Scripting.FileSystemObject");
var fh  = fso.CreateTextFile("D:\_Repo\smalltest.txt", 8, true);
fh.WriteLine("this is only a smalltest\n");
fh.Close();
